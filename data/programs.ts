import { Program, ProgramPillar } from '../types';

export const PROGRAMS: Program[] = [
    // ─────────────────────────── STEM ───────────────────────────
    {
        id: 'first-coders',
        title: 'First Coders',
        pillar: ProgramPillar.STEM,
        grades: 'Grades K–2',
        gradeBands: ['K–2'],
        description: 'Animated stories and simple games with ScratchJr — sequencing and problem-solving before kids can even read fluently.',
        devices: 'Tablets (iPads or Android)',
        materials: 'ScratchJr (free)',
        image: '/programs/first-coders.jpg',
        imageCredit: { text: 'Tufts University, Scratch Foundation', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:ScratchJr_Interface.png' },
        tags: ['Coding', 'Free Software', 'Early Learners'],
    },
    {
        id: 'game-builders',
        title: 'Game Builders',
        pillar: ProgramPillar.STEM,
        grades: 'Grades 3–5',
        gradeBands: ['3–5'],
        description: 'Students design and code their own playable games in Scratch; sessions build toward a site-wide arcade showcase.',
        devices: 'Laptops/Chromebooks',
        materials: 'Scratch (free)',
        image: '/programs/game-builders.jpg',
        imageCredit: { text: 'Scratch, MIT Media Lab', license: 'CC BY-SA 2.0', url: 'https://commons.wikimedia.org/wiki/File:Scratch_3.0_editor.png' },
        tags: ['Coding', 'Free Software', 'Showcase Event'],
        studentOutcomes: [
            'Design and code 3 complete, playable games: a Chase game, a Clicker, and a Platformer',
            'Use real CS concepts in every project — sequences, events, loops, conditionals, and variables',
            'Practice the design → test → debug cycle and learn to fix their own bugs',
            'Give and receive playtester feedback, then iterate on their designs',
            'Present a finished game to a real audience at the Arcade Showcase',
            'Leave with a Scratch portfolio they can keep building at home, free'
        ],
        whyItMatters: [
            { title: 'Creators, not consumers', description: 'Kids already spend hours playing games. This program moves them to the other side of the screen: designing the rules, art, and logic instead of just consuming them.' },
            { title: 'The exposure window', description: 'Ages 8–11 are when kids decide whether STEM "is for them." Most elementary schools offer little or no computer science — afterschool is where that gap gets closed.' },
            { title: 'A showcase families show up for', description: "The Arcade Showcase turns your program's value into a public event. One site's first showcase drew 60+ families — visibility that pays off with enrollment and funders alike." },
            { title: 'Debugging builds persistence', description: "Every bug a student fixes is practice sticking with a hard problem. It's a skills story that resonates in grant reports as much as in the computer lab." }
        ],
        curriculumArc: [
            { weeks: 'Weeks 1–3', title: 'Scratch Foundations', description: 'Sprites, backdrops, motion, and events — every student ships a simple Chase game by week 3.' },
            { weeks: 'Weeks 4–6', title: 'The Clicker', description: 'Score variables, costumes, and upgrade logic — the math of "one more click."' },
            { weeks: 'Weeks 7–10', title: 'The Platformer', description: 'Gravity, collision, and multi-level design — the most requested game type, now buildable.' },
            { weeks: 'Weeks 11–14', title: 'Design Your Own', description: 'Students pick a genre and polish a personal game: sound effects, title screens, "Game Over" states.' },
            { weeks: 'Weeks 15–16', title: 'The Arcade Showcase', description: 'Playtesting stations, final fixes, and a family event where every student demos a finished game.', isCapstone: true }
        ],
        staffOutcomes: [
            'Facilitate block-based coding with zero prior experience',
            'Guide students through 3 game types: Chase, Clicker, and Platformer',
            'Debug the 10 most common student errors',
            'Host a site-wide "Arcade Showcase" for families'
        ],
        trainingModules: [
            { title: 'Module 1: Staff Bootcamp', description: 'Sprites, backdrops, and motion — everything your staff needs before day one.' },
            { title: 'Module 2: Logic & Loops', description: 'Teaching events, conditionals, and repetition through gameplay.' },
            { title: 'Module 3: Score & Lives', description: 'Variables that keep kids invested in polishing their games.' },
            { title: 'Module 4: Game Polish', description: 'Sound effects, title screens, and "Game Over" states.' },
            { title: 'Module 5: The Arcade Showcase', description: 'Running a family event that markets your program for you.' }
        ],
        // TODO(verify): confirm these four numbers before publishing widely
        logistics: {
            sessionLength: '45–60 min',
            totalSessions: '16 weekly sessions',
            groupSize: '8–16 students',
            staffRatio: '1 trained leader per ~10 students'
        },
        faq: [
            { question: 'Do students need accounts to use Scratch?', answer: 'No — Scratch runs in the browser without sign-in, and the training covers setting up teacher-managed accounts if you want kids to save projects site-wide.' },
            { question: 'Can kids keep building at home?', answer: 'Yes — Scratch is completely free on any browser, so the portfolio they build is theirs to keep growing.' },
            { question: 'What does hosting the Arcade Showcase require from our site?', answer: 'A room, the devices you already use for sessions, and about an hour. Module 5 of the staff training is the complete event playbook.' }
        ],
        caseStudyId: '1'
    },
    {
        id: 'level-up-coding',
        title: 'Level Up Coding',
        pillar: ProgramPillar.STEM,
        grades: 'Grades 6–8',
        gradeBands: ['6–8'],
        description: 'The bridge out of blocks: retro-style games in MakeCode Arcade, transitioning into beginner Python.',
        devices: 'Laptops/Chromebooks',
        materials: 'Free platforms; optional handheld Arcade consoles (~$40 ea.) for playing their builds',
        // TODO(image): stand-in. Capture a MakeCode Arcade game mid-edit at arcade.makecode.com.
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Coding', 'Python', 'Middle School'],
    },
    {
        id: '3d-design-print',
        title: '3D Design & Print Studio',
        pillar: ProgramPillar.STEM,
        grades: 'Grades 3–8',
        gradeBands: ['3–5', '6–8'],
        description: 'Students design in Tinkercad and print real objects — keychains to prosthetic-hand challenges, scaled by age.',
        devices: 'Laptops/Chromebooks',
        materials: '1–2 desktop printers (e.g., Bambu A1 Mini or Prusa Mini), PLA filament, Tinkercad (free)',
        image: '/programs/3d-design-print.jpg',
        imageCredit: { text: 'Wikimedia Commons', license: 'CC0', url: 'https://commons.wikimedia.org/wiki/File:3D_Printing.jpg' },
        tags: ['Maker', '3D Printing', 'Take-Home Projects'],
    },
    {
        id: 'vr-world-builders',
        title: 'VR World Builders',
        pillar: ProgramPillar.STEM,
        grades: 'Grades 4–8',
        gradeBands: ['3–5', '6–8'],
        description: 'Build and code interactive 3D worlds in CoSpaces, then walk through them in VR.',
        devices: 'Laptops/Chromebooks',
        materials: 'CoSpaces Edu license; optional low-cost VR viewers (phone-cradle style)',
        // TODO(image): stand-in. Capture a CoSpaces Edu 3D scene in the editor (free tier).
        image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Coding', 'VR', 'Design'],
    },
    {
        id: 'robocubes',
        title: 'RoboCubes',
        pillar: ProgramPillar.STEM,
        grades: 'Grades K–3',
        gradeBands: ['K–2', '3–5'],
        description: 'Screen-free robotics with snap-together robotic cubes (e.g., Cubelets) — kids build robot behaviors from sensor and motor blocks.',
        devices: 'None',
        materials: 'Robotic cube classroom kit',
        image: '/programs/robocubes.jpg',
        imageCredit: { text: 'SparkFun Electronics', license: 'CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:Cubelets_Six_Kit_(15311725944).jpg' },
        tags: ['Robotics', 'Screen-Free', 'Early Learners'],
        screenFree: true,
    },
    {
        id: 'robotics-1',
        title: 'Robotics I: Build & Code',
        pillar: ProgramPillar.STEM,
        grades: 'Grades 3–5',
        gradeBands: ['3–5'],
        description: 'First real build-and-program robotics using LEGO SPIKE Essential (or Dash) — missions, mazes, and challenge mats.',
        devices: 'Tablets or laptops',
        materials: '1 robotics kit per 2–3 students, challenge mats',
        image: '/programs/robotics-1.jpg',
        imageCredit: { text: 'Wikimedia Commons', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Lego_Mindstorms_EV3_Robot.jpg' },
        tags: ['Robotics', 'LEGO SPIKE', 'Hands-On'],
        caseStudyId: '2'
    },
    {
        id: 'robotics-2',
        title: 'Robotics II: Competition Ready',
        pillar: ProgramPillar.STEM,
        grades: 'Grades 6–8',
        gradeBands: ['6–8'],
        description: 'Advanced builds with LEGO SPIKE Prime or VEX IQ, structured around head-to-head challenges and optional league play.',
        devices: 'Laptops/tablets',
        materials: 'SPIKE Prime or VEX IQ kits, game field elements',
        image: '/programs/robotics-2.jpg',
        imageCredit: { text: 'U.S. Air Force', license: 'Public domain', url: 'https://commons.wikimedia.org/wiki/File:Scott_members_mentor_students_in_robotics_competition_141122-F-IW762-006.jpg' },
        tags: ['Robotics', 'Competition', 'League Play'],
    },
    {
        id: 'minecraft-coding',
        title: 'Minecraft Coding',
        pillar: ProgramPillar.STEM,
        grades: 'Grades 3–8',
        gradeBands: ['3–5', '6–8'],
        description: 'Code inside Minecraft Education — students program an in-game agent with blocks (younger) or Python (older) to build and automate.',
        devices: 'Laptops/Chromebooks/tablets',
        materials: 'Minecraft Education licenses',
        image: '/programs/minecraft-coding.jpg',
        imageCredit: { text: 'Wikimedia Commons', license: 'CC BY 3.0', url: 'https://commons.wikimedia.org/wiki/File:Minecraft_-_Lush_caves.jpg' },
        tags: ['Coding', 'Minecraft', 'High Demand'],
    },
    {
        id: 'circuit-inventors',
        title: 'Circuit Inventors',
        pillar: ProgramPillar.STEM,
        grades: 'Grades 2–6',
        gradeBands: ['K–2', '3–5', '6–8'],
        description: 'Makey Makey turns bananas, foil, and playdough into game controllers and instruments — electricity and conductivity through pure play.',
        devices: 'Laptops',
        materials: 'Makey Makey kits, alligator clips, conductive odds and ends (mostly grocery/craft store)',
        image: '/programs/circuit-inventors.jpg',
        imageCredit: { text: 'Wikimedia Commons', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Makey_Makey.jpg' },
        tags: ['Maker', 'Circuits', 'Low Cost'],
    },
    {
        id: 'invention-lab',
        title: 'Invention Lab',
        pillar: ProgramPillar.STEM,
        grades: 'Grades 3–8',
        gradeBands: ['3–5', '6–8'],
        description: 'Open-ended engineering-design challenges: cardboard builds, recycled-material inventions, simple circuits. The lowest-cost, highest-flexibility program in the catalog.',
        devices: 'None',
        materials: 'Consumables — cardboard, hot glue, tape, craft stock, LEDs + coin batteries',
        // TODO(image): stand-in. Photograph an actual cardboard build from a session.
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Maker', 'Screen-Free', 'Lowest Cost'],
        screenFree: true,
    },
    {
        id: 'structures-skyscrapers',
        title: 'Structures & Skyscrapers',
        pillar: ProgramPillar.STEM,
        grades: 'Grades 2–8',
        gradeBands: ['K–2', '3–5', '6–8'],
        description: "Structural engineering with building kits (KEVA planks, Strawbees, K'NEX): bridges, towers, and shake-table earthquake tests.",
        devices: 'None',
        materials: 'Building kits, weights and fans for load/wind testing',
        image: '/programs/structures-skyscrapers.jpg',
        imageCredit: { text: 'Wikimedia Commons', license: 'CC0', url: 'https://commons.wikimedia.org/wiki/File:Open_Dag_Philips_Drachten_Strawbees.jpg' },
        tags: ['Engineering', 'Screen-Free', 'Hands-On'],
        screenFree: true,
    },

    // ─────────────────────────── AI ───────────────────────────
    {
        id: 'ai-explorers',
        title: 'AI Explorers',
        pillar: ProgramPillar.AI,
        grades: 'Grades 3–6',
        gradeBands: ['3–5', '6–8'],
        description: 'Demystifying AI through hands-on training games — students teach a computer to recognize images and sounds using kid-safe, no-login tools (Teachable Machine, Machine Learning for Kids) plus unplugged activities.',
        devices: 'Laptops/Chromebooks',
        materials: 'Free web tools',
        // TODO(image): stand-in. Capture Teachable Machine mid-training with class samples showing.
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['AI', 'Kid-Safe Tools', 'No Logins Required'],
    },
    {
        id: 'intro-vibe-coding',
        title: 'Intro to Vibe Coding',
        pillar: ProgramPillar.AI,
        grades: 'Grades 6–12',
        gradeBands: ['6–8', '9–12'],
        description: 'Students describe the app or game they want in plain language and build it in partnership with AI tools. Training focuses heavily on facilitation: keeping kids in the driver\'s seat, iterating on prompts, and debugging by conversation.',
        devices: 'Laptops/Chromebooks',
        materials: 'AI builder platform accounts (Claude, Replit, or similar)',
        // TODO(image): stand-in. Capture a student-built app running from an AI builder session.
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['AI', 'App Building', 'Age-Gated Tools'],
    },

    // ─────────────────────────── ESPORTS ───────────────────────────
    {
        id: 'launch-esports',
        title: 'Launch Your Esports Program',
        pillar: ProgramPillar.ESPORTS,
        grades: 'Grades 4–12',
        gradeBands: ['3–5', '6–8', '9–12'],
        description: 'The zero-to-team training: age-appropriate game selection (Rocket League, Smash, Minecraft for younger; Valorant-tier only for HS), team structure and practice format, sportsmanship and screen-time policy, running an in-house tournament, and joining scholastic leagues.',
        devices: 'Consoles or gaming PCs — we teach the budget path explicitly: 4–6 Nintendo Switch consoles gets a program running for a fraction of a gaming-PC lab',
        materials: 'Consoles or gaming PCs, monitors, headsets, controllers, wired internet',
        image: '/programs/launch-esports.jpg',
        imageCredit: { text: 'Wikimedia Commons', license: 'CC BY-SA 4.0', url: 'https://commons.wikimedia.org/wiki/File:Iskandar_Investment_Esports_Carnival_2019.jpg' },
        tags: ['Esports', 'Tournaments', 'Budget Path Included'],
        caseStudyId: '3'
    },
];

export const PILLAR_ORDER = [ProgramPillar.STEM, ProgramPillar.AI, ProgramPillar.ESPORTS];

/** URL slugs for pillar-filtered program library routes, e.g. /programs/ai */
export const PILLAR_SLUGS: Record<ProgramPillar, string> = {
    [ProgramPillar.STEM]: 'stem',
    [ProgramPillar.AI]: 'ai',
    [ProgramPillar.ESPORTS]: 'esports',
};
