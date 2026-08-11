#!/usr/bin/env bash
# Downloads the program catalog imagery into public/programs/ and downscales it.
# Re-runnable: overwrites whatever is already there.
#
# Sources and licenses are recorded in public/programs/CREDITS.md — keep the two
# in sync when adding or replacing an image here.
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p public/programs

fetch() { # <program-id> <url>
    local id="$1" url="$2" tmp
    tmp="public/programs/.$id.orig"
    if ! curl -sL --fail --max-time 60 -A "Mozilla/5.0" "$url" -o "$tmp"; then
        echo "  FAIL $id — download error, leaving existing file alone" >&2
        rm -f "$tmp"
        return 0
    fi
    # -Z bounds the long edge, but it also *enlarges* smaller sources, which just
    # ships a blurry upscale. Only pass -Z when the image is actually oversized.
    local long_edge resize=()
    long_edge=$(sips -g pixelWidth -g pixelHeight "$tmp" 2>/dev/null | awk '/pixel/{if($2>m)m=$2}END{print m+0}')
    if [ "$long_edge" -gt 1200 ]; then resize=(-Z 1200); fi
    # ${a[@]+"${a[@]}"} keeps `set -u` happy on bash 3.2 when the array is empty.
    if ! sips -s format jpeg -s formatOptions 80 ${resize[@]+"${resize[@]}"} "$tmp" --out "public/programs/$id.jpg" >/dev/null 2>&1; then
        echo "  FAIL $id — sips could not convert $(file -b "$tmp")" >&2
        rm -f "$tmp"
        return 0
    fi
    rm -f "$tmp"
    echo "  ok   $id.jpg ($(du -h "public/programs/$id.jpg" | cut -f1))"
}

base="https://upload.wikimedia.org/wikipedia/commons"

fetch first-coders           "$base/1/13/ScratchJr_Interface.png"
fetch game-builders          "$base/0/0d/Scratch_3.0_editor.png"
fetch 3d-design-print        "$base/f/f4/3D_Printing.jpg"
fetch robocubes              "$base/d/dc/Cubelets_Six_Kit_%2815311725944%29.jpg"
fetch robotics-1             "$base/c/cb/Lego_Mindstorms_EV3_Robot.jpg"
# NB: the Commons "VEX IQ Robotics Competiton" file is the wordmark logo, not a
# photo — using a real competition scene instead.
fetch robotics-2             "$base/6/68/Scott_members_mentor_students_in_robotics_competition_141122-F-IW762-006.jpg"
fetch minecraft-coding       "$base/9/97/Minecraft_-_Lush_caves.jpg"
# The "Attendees Play with a MakeyMakey" shot is adults at a conference table;
# this one actually shows the board, clips, and a student.
fetch circuit-inventors      "$base/9/99/Makey_Makey.jpg"
fetch structures-skyscrapers "$base/1/16/Open_Dag_Philips_Drachten_Strawbees.jpg"
fetch launch-esports         "$base/2/28/Iskandar_Investment_Esports_Carnival_2019.jpg"

echo "Done. $(ls -1 public/programs/*.jpg 2>/dev/null | wc -l | tr -d ' ') images in public/programs/"
