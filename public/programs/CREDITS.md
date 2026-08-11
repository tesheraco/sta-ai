# Program image credits

Every file in this directory is produced by `scripts/fetch-program-images.sh`. Do not
edit images here by hand — change the source URL in that script and re-run it, so the
provenance below stays true.

The `imageCredit` field in `data/programs.ts` mirrors this table and is what renders
on the program detail page. Keep the two in sync.

| File | Program | Source | License | Attribution |
|---|---|---|---|---|
| `first-coders.jpg` | First Coders | [ScratchJr Interface](https://commons.wikimedia.org/wiki/File:ScratchJr_Interface.png) | CC BY-SA 4.0 | Tufts University, Scratch Foundation |
| `game-builders.jpg` | Game Builders | [Scratch 3.0 editor](https://commons.wikimedia.org/wiki/File:Scratch_3.0_editor.png) | CC BY-SA 2.0 | Scratch, MIT Media Lab |
| `3d-design-print.jpg` | 3D Design & Print Studio | [3D Printing](https://commons.wikimedia.org/wiki/File:3D_Printing.jpg) | CC0 | — |
| `robocubes.jpg` | RoboCubes | [Cubelets Six Kit](https://commons.wikimedia.org/wiki/File:Cubelets_Six_Kit_(15311725944).jpg) | CC BY 2.0 | SparkFun Electronics |
| `robotics-1.jpg` | Robotics I | [Lego Mindstorms EV3 Robot](https://commons.wikimedia.org/wiki/File:Lego_Mindstorms_EV3_Robot.jpg) | CC BY-SA 4.0 | — |
| `robotics-2.jpg` | Robotics II | [Students in robotics competition](https://commons.wikimedia.org/wiki/File:Scott_members_mentor_students_in_robotics_competition_141122-F-IW762-006.jpg) | Public domain | U.S. Air Force |
| `minecraft-coding.jpg` | Minecraft Coding | [Minecraft — Lush caves](https://commons.wikimedia.org/wiki/File:Minecraft_-_Lush_caves.jpg) | CC BY 3.0 | — |
| `circuit-inventors.jpg` | Circuit Inventors | [Makey Makey](https://commons.wikimedia.org/wiki/File:Makey_Makey.jpg) | CC BY-SA 4.0 | — |
| `structures-skyscrapers.jpg` | Structures & Skyscrapers | [Strawbees, Open Dag Philips Drachten](https://commons.wikimedia.org/wiki/File:Open_Dag_Philips_Drachten_Strawbees.jpg) | CC0 | — |
| `launch-esports.jpg` | Launch Your Esports Program | [Iskandar Investment Esports Carnival 2019](https://commons.wikimedia.org/wiki/File:Iskandar_Investment_Esports_Carnival_2019.jpg) | CC BY-SA 4.0 | — |

## Still to capture

Five programs have no image here and still use a stock stand-in, marked
`TODO(image)` in `data/programs.ts`. Nothing suitable exists under a usable licence
for these, and each runs on a free tool — a self-captured screenshot is both easier
and more accurate than anything findable:

| Program | Capture | Where |
|---|---|---|
| Level Up Coding | A retro game mid-edit, sprite + blocks visible | arcade.makecode.com |
| VR World Builders | A 3D scene in the editor | cospaces.io/edu (free tier) |
| AI Explorers | Mid-training, with class samples showing | teachablemachine.withgoogle.com |
| Intro to Vibe Coding | A student-built app running | your own Claude/Replit account |
| Invention Lab | An actual cardboard build from a session | your camera |

Capture at 1600×900 or larger in a clean browser window, save as
`public/programs/<program-id>.jpg`, then in `data/programs.ts` set
`image: '/programs/<program-id>.jpg'` and delete the `TODO(image)` comment. Leave
`imageCredit` off — it's your own work.

## Notes on the sourced set

- **Substituted kit**: Robotics I/II show LEGO EV3 and a generic competition floor;
  the curriculum specifies SPIKE Essential/Prime. Same category, different kit.
- **Minecraft** is vanilla terrain, not the Education Edition Code Builder. Microsoft
  permits screenshots of *your own* creations, so an Education Edition capture is the
  clean upgrade.
- **Trademarked products** appear in the LEGO, Minecraft, Makey Makey, and Cubelets
  images. LEGO's Fair Play policy and Minecraft's usage guidelines both discourage
  this on a commercial site. Each is a one-line swap in the fetch script if that
  becomes a concern.
- **Lower-resolution sources**: `first-coders.jpg` (589×442) and `robocubes.jpg`
  (538×460) are the largest versions available. Fine in the card strip, soft in the
  400px detail hero — the best candidates for replacement.
