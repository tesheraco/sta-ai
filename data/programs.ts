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
        studentOutcomes: [
            'Create 4+ animated projects in ScratchJr: interactive scenes, a joke-teller, and a multi-page story',
            'Sequence picture blocks into real programs — the foundation of every coding language, no reading required',
            'Use events, loops, and speed blocks to bring characters to life',
            'Draw their own characters and record their own voices right into their programs',
            'Practice "try, watch, fix" — the earliest form of debugging',
            'Premiere a finished animated story for families at the Story Premiere'
        ],
        whyItMatters: [
            { title: 'Coding before they can read', description: 'ScratchJr was built at MIT and Tufts for pre-readers — every block is a picture. Kindergartners sequence real programs years before most schools introduce computer science.' },
            { title: 'Screen time parents feel good about', description: 'This is creation, not consumption. Kids leave knowing tablets are for making stories — a framing parents and licensors consistently praise.' },
            { title: 'Runs on tablets you already own', description: 'ScratchJr is free on iPads and Android tablets. If your site has a tablet cart, your only real cost is the training.' },
            { title: 'A premiere, not a pickup line', description: 'The Story Premiere turns an ordinary Friday into a family event — kids narrate their animated stories on the big screen while parents film every second.' }
        ],
        curriculumArc: [
            { weeks: 'Weeks 1–3', title: 'Meet the Blocks', description: 'The stage, the characters, and the motion blocks — every student makes a character dance across the screen on day one.' },
            { weeks: 'Weeks 4–6', title: 'Tap, Bump, Send', description: 'Start-on-tap, start-on-bump, and message blocks — programs that react, and characters that talk to each other.' },
            { weeks: 'Weeks 7–10', title: 'Sound & Scenes', description: 'Recorded voices, drawn characters, and multi-page scenes — projects start looking like little films.' },
            { weeks: 'Weeks 11–14', title: 'My Animated Story', description: 'Each student plans and builds a story with a beginning, middle, and end across multiple pages.' },
            { weeks: 'Weeks 15–16', title: 'The Story Premiere', description: 'Final touches, a practice screening, and a family event where every story plays on the big screen.', isCapstone: true }
        ],
        staffOutcomes: [
            'Run tablet-based coding sessions with pre-readers — no coding background needed',
            'Teach sequencing, events, and loops using picture blocks and 5-year-old-friendly language',
            'Manage a room of K–2 students with tablets: routines, transitions, and helper roles',
            'Host a Story Premiere screening event for families'
        ],
        trainingModules: [
            { title: 'Module 1: ScratchJr Bootcamp', description: 'The interface, the picture blocks, and your first animated scene — built live during training.' },
            { title: 'Module 2: Tablet Routines for Little Learners', description: 'Handout, headphones, and hand signals — the classroom management that makes K–2 tech time calm.' },
            { title: 'Module 3: Events, Loops & Sounds', description: 'The blocks behind interactivity, and how to teach them without technical vocabulary.' },
            { title: 'Module 4: Story Projects', description: 'Facilitating multi-page stories: planning pages, recording narration, and keeping every kid moving forward.' },
            { title: 'Module 5: The Story Premiere', description: 'The complete playbook for a family screening event — projector setup to applause.' }
        ],
        // TODO(verify): confirm these four numbers before publishing widely
        logistics: {
            sessionLength: '30–45 min',
            totalSessions: '16 weekly sessions',
            groupSize: '8–12 students',
            staffRatio: '1 trained leader per ~8 students'
        },
        faq: [
            { question: "Can kids who can't read yet really code?", answer: 'Yes — that\'s exactly what ScratchJr was designed for. Every block is a picture, and the curriculum teaches sequencing and cause-and-effect without a single word of required reading.' },
            { question: 'Do we need one tablet per student?', answer: 'One each is ideal, but the curriculum works in pairs — and pair-programming roles are built into the facilitation guides for exactly that setup.' },
            { question: 'Does ScratchJr need internet or accounts?', answer: 'No accounts at all, and it runs fully offline once installed. Projects save right on the tablet, so there\'s nothing to log into and nothing to lose.' }
        ]
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
        studentOutcomes: [
            'Build 3 retro-style games in MakeCode Arcade — playable in any browser, or on a handheld console',
            'Design sprites, tilemaps, and multi-level game progressions',
            'See their block code as real Python with MakeCode\'s one-click toggle — the same program, both ways',
            'Write their first text code: variables, loops, and functions in Python',
            'Read error messages and debug text code without panicking',
            'Demo a finished game at the Retro Arcade Demo Day'
        ],
        whyItMatters: [
            { title: 'The bridge out of blocks', description: 'Most middle schoolers plateau in Scratch. MakeCode\'s toggle lets them see their own blocks as real Python — the gentlest on-ramp to text code that exists.' },
            { title: 'Middle school is the drop-off point', description: 'CS interest craters in grades 6–8, especially for girls. A program that ships games they\'re genuinely proud of holds the audience most programs lose.' },
            { title: 'Free platform, optional hardware', description: 'MakeCode Arcade is free in any browser. The ~$40 handheld consoles are a pure upgrade — a kid carrying their own game in their pocket is a marketing photo that writes itself.' },
            { title: '"I write Python" means something', description: 'Python is the language of intro CS and data science. Students leave with a claim that registers with high school counselors — and in grant reports.' }
        ],
        curriculumArc: [
            { weeks: 'Weeks 1–3', title: 'Retro Foundations', description: 'Sprites, controller events, and overlap logic — every student ships a playable chase-and-collect game by week 3.' },
            { weeks: 'Weeks 4–6', title: 'Level Design', description: 'Tilemaps, walls, and win conditions — single-screen games grow into multi-level worlds.' },
            { weeks: 'Weeks 7–9', title: 'Behind the Blocks', description: 'The Python toggle comes out: students see their game as text, then make their first edits directly in code.' },
            { weeks: 'Weeks 10–14', title: 'Python Projects', description: 'Variables, loops, and functions in text — each student builds a personal game in Python or hybrid blocks-and-text.' },
            { weeks: 'Weeks 15–16', title: 'Retro Arcade Demo Day', description: 'Playtesting, final fixes, and a family event where every student demos a finished game — on consoles if you have them.', isCapstone: true }
        ],
        staffOutcomes: [
            'Facilitate MakeCode Arcade game building with zero coding background',
            'Guide the blocks-to-Python transition without needing to be a Python expert',
            'Read and triage beginner Python errors alongside students',
            'Run a Retro Arcade Demo Day, with or without handheld consoles'
        ],
        trainingModules: [
            { title: 'Module 1: MakeCode Bootcamp', description: 'The editor, sprites, and events — you\'ll build your first game live during training.' },
            { title: 'Module 2: Level Design', description: 'Tilemaps, difficulty curves, and the design vocabulary that keeps middle schoolers iterating.' },
            { title: 'Module 3: The Python Toggle', description: 'When and how to flip students into text — and how to coach it without being a programmer yourself.' },
            { title: 'Module 4: Errors Are the Lesson', description: 'The most common beginner Python errors, and the debugging culture that turns frustration into persistence.' },
            { title: 'Module 5: Demo Day', description: 'The event playbook — plus loading student games onto handheld consoles if your site has them.' }
        ],
        // TODO(verify): confirm these four numbers before publishing widely
        logistics: {
            sessionLength: '45–60 min',
            totalSessions: '16 weekly sessions',
            groupSize: '8–16 students',
            staffRatio: '1 trained leader per ~10 students'
        },
        faq: [
            { question: 'Do students need to know Scratch first?', answer: 'No — weeks 1–3 start from zero. Students coming out of Scratch or Game Builders move faster, but the arc assumes no prior coding.' },
            { question: 'Are the handheld consoles required?', answer: 'Not at all — the browser version is the complete experience. Consoles (~$40 each) are an optional upgrade, and a shared set of 4–6 covers a whole group for Demo Day.' },
            { question: 'How much Python do they actually learn?', answer: 'The honest answer: real foundations — variables, loops, conditionals, and functions, written in text and debugged by hand. It\'s the launchpad for a high school CS class, not a replacement for one.' }
        ]
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
        studentOutcomes: [
            'Design and print real objects they take home — nametags, keychains, and original inventions',
            'Master Tinkercad: shapes, holes, grouping, and precise measurement',
            'Design for the physical world: scale, tolerance, and what a printer can actually build',
            'Iterate like engineers — measure the misfit, adjust the model, print again',
            'Complete a design-for-someone-else challenge, from a gift for a friend to an assistive-device concept',
            'Show their work at a family Maker Market'
        ],
        whyItMatters: [
            { title: 'The take-home effect', description: 'A 3D-printed object goes home in a backpack and gets shown to everyone. No program markets itself to families more reliably.' },
            { title: 'Real CAD, real early', description: 'Tinkercad teaches the same design thinking behind professional tools like Fusion. "Our 4th graders do CAD" is a sentence leadership loves to say.' },
            { title: 'A printer is a magnet', description: 'A running 3D printer draws a crowd in any program space. It signals — to kids, parents, and funders — that real making happens here.' },
            { title: 'Design with empathy', description: 'The design-for-someone challenge connects engineering to caring for another person — a story that lands as well in grant narratives as it does at pickup time.' }
        ],
        curriculumArc: [
            { weeks: 'Weeks 1–3', title: 'Tinkercad Basics', description: 'Shapes, holes, and grouping — every student designs a nametag or keychain that hits the printer by week 3.' },
            { weeks: 'Weeks 4–6', title: 'Design for the Real World', description: 'Measurement, scale, and tolerance — including prints that don\'t fit on purpose, so students learn why.' },
            { weeks: 'Weeks 7–10', title: 'Functional Objects', description: 'Hooks, containers, phone stands, and spinning tops — objects that have a job, and get tested at it.' },
            { weeks: 'Weeks 11–14', title: 'Design for Someone', description: 'Students interview a "client," then prototype and iterate — older students take on assistive-device concepts.' },
            { weeks: 'Weeks 15–16', title: 'The Maker Market', description: 'A family showcase where every student presents a table of their printed work — and tells the design story behind it.', isCapstone: true }
        ],
        staffOutcomes: [
            'Teach Tinkercad from zero — no CAD background required',
            'Run the printers: slicing, bed prep, filament swaps, and first-layer checks',
            'Manage a print queue so every student\'s work gets printed without eating session time',
            'Host a Maker Market where students show off a semester of printed designs'
        ],
        trainingModules: [
            { title: 'Module 1: Tinkercad Bootcamp', description: 'The editor, the workflow, and your first design — modeled live during training.' },
            { title: 'Module 2: Meet Your Printer', description: 'Setup, slicing, and your first print — plus the maintenance routine that prevents most failures.' },
            { title: 'Module 3: The Print Queue', description: 'Batching, overnight prints, and keeping 16 students\' work flowing through 1–2 machines.' },
            { title: 'Module 4: Failure Triage', description: 'Spaghetti, warping, and adhesion — diagnosing the five classic print failures at a glance.' },
            { title: 'Module 5: The Maker Market', description: 'The event playbook: display tables, design-story cards, and a room full of families.' }
        ],
        // TODO(verify): confirm these four numbers before publishing widely
        logistics: {
            sessionLength: '45–60 min',
            totalSessions: '16 weekly sessions',
            groupSize: '8–16 students',
            staffRatio: '1 trained leader per ~10 students'
        },
        faq: [
            { question: 'How many printers do we actually need?', answer: 'One works; two is comfortable. Most printing happens between sessions from a queue — Module 3 of the training is entirely about making that painless.' },
            { question: 'What does filament cost?', answer: 'A 1 kg spool of PLA runs about $20–25 and prints dozens of student-sized objects. Most sites get through a semester on 2–3 spools.' },
            { question: 'Is 3D printing safe to run around kids?', answer: 'The curriculum uses PLA only — a plant-based, low-odor filament — on enclosed-nozzle desktop printers, with handling rules built into the session guides.' }
        ]
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
        studentOutcomes: [
            'Build interactive 3D worlds — then walk through them in VR',
            'Code interactions in CoBlocks: movement, collisions, scoring, and dialogue',
            'Design escape rooms, quiz worlds, and guided tours with real game logic',
            'Think in 3D: cameras, navigation, and how a visitor experiences a space',
            'Collaborate on a team world with shared scenes and divided roles',
            'Present their world at a family VR Gallery Walk'
        ],
        whyItMatters: [
            { title: '"We have VR" fills rosters', description: 'Few phrases move enrollment like VR — and phone-cradle viewers cost less than a pizza party. This is the biggest wow-per-dollar in the catalog.' },
            { title: 'Creation, not consumption', description: 'Commercial VR is something kids passively experience. Here they architect the world first — then step inside something they built themselves.' },
            { title: 'Design and code in one', description: 'World-building attracts the artists and storytellers who\'d never sign up for "coding club" — then quietly teaches them to code anyway.' },
            { title: 'Works without headsets', description: 'Every world runs full-screen in the browser too. VR viewers are the wow factor, not a dependency — no expensive hardware stands between you and launch.' }
        ],
        curriculumArc: [
            { weeks: 'Weeks 1–3', title: 'World Building 101', description: 'Scenes, terrain, objects, and cameras — every student publishes an explorable world in the first three weeks.' },
            { weeks: 'Weeks 4–6', title: 'Make It Interactive', description: 'CoBlocks coding: click events, movement, and dialogue — worlds start responding to their visitors.' },
            { weeks: 'Weeks 7–10', title: 'Games in 3D', description: 'Scoring, timers, and collisions — students build escape rooms and quiz worlds with real win conditions.' },
            { weeks: 'Weeks 11–14', title: 'The Team World', description: 'Small teams plan and build one ambitious world together — builder, coder, and story roles included.' },
            { weeks: 'Weeks 15–16', title: 'The VR Gallery Walk', description: 'Families tour student worlds in VR viewers and on screens — with each creator as the guide.', isCapstone: true }
        ],
        staffOutcomes: [
            'Facilitate 3D world-building in CoSpaces with no prior experience',
            'Teach CoBlocks coding: events, movement, and game logic',
            'Manage student seats and classes in CoSpaces Edu',
            'Run VR sessions safely — viewer hygiene, time limits, and motion-comfort rules'
        ],
        trainingModules: [
            { title: 'Module 1: CoSpaces Bootcamp', description: 'The editor, the object library, and your first world — built live during training.' },
            { title: 'Module 2: CoBlocks Coding', description: 'Events, movement, and logic — the coding layer, taught the way you\'ll teach it.' },
            { title: 'Module 3: Classes & Accounts', description: 'License setup, student seats, and reviewing student work from the teacher dashboard.' },
            { title: 'Module 4: VR, Safely', description: 'Viewer hygiene, session lengths, motion sensitivity, and the supervision routine parents will ask about.' },
            { title: 'Module 5: The Gallery Walk', description: 'The event playbook: viewer stations, screen stations, and student guides.' }
        ],
        // TODO(verify): confirm these four numbers before publishing widely
        logistics: {
            sessionLength: '45–60 min',
            totalSessions: '16 weekly sessions',
            groupSize: '8–16 students',
            staffRatio: '1 trained leader per ~10 students'
        },
        faq: [
            { question: 'Do we need VR headsets?', answer: 'No — every world runs full-screen in the browser. Phone-cradle viewers (roughly $10–15 each) add the wow moments, and a shared set of 4–6 covers a whole group.' },
            { question: 'Is VR safe for younger students?', answer: 'The curriculum uses short, supervised viewer sessions with motion-comfort rules, and most building happens on regular screens. An entire training module covers running VR safely.' },
            { question: 'What does the CoSpaces license cost?', answer: 'CoSpaces Edu is licensed per student seat, typically a few dollars per seat for the year. Your shopping list includes the current tiers and the exact plan we recommend.' }
        ]
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
        studentOutcomes: [
            'Build working robots from sense, think, and act cubes — no screens involved',
            'Explain how robots sense, think, and act — the core loop of all robotics',
            'Predict what a cube combination will do, test it, and revise — the scientific method in miniature',
            'Invent robot "creatures" with personalities: light-chasers, edge-avoiders, and flashlight-followers',
            'Share cubes and ideas in small teams',
            'Show off their creatures at the Robot Zoo'
        ],
        whyItMatters: [
            { title: 'Robotics with zero screens', description: 'Full-strength STEM for sites (and parents) who want less screen time, not more. Everything happens in kids\' hands, not on a display.' },
            { title: 'The youngest engineers', description: 'K–3 is usually left out of robotics entirely. Magnetic snap-together cubes put real sensors and motors in the smallest hands, safely.' },
            { title: 'The lightest lift in robotics', description: 'No logins, no apps, no software updates — open the kit and build. Setup and cleanup fit inside the shortest program block.' },
            { title: 'Systems thinking, early', description: 'When a light sensor changes a motor\'s speed, kids are learning cause-and-effect systems — the foundation of engineering — as pure play.' }
        ],
        curriculumArc: [
            { weeks: 'Weeks 1–3', title: 'Sense, Think, Act', description: 'Meet the cubes and what each one does — every kid builds a driving robot in the first session.' },
            { weeks: 'Weeks 4–6', title: 'Robot Behaviors', description: 'Combining sensor and action cubes into behaviors: light-chasers, hand-followers, and flashlight tag.' },
            { weeks: 'Weeks 7–10', title: 'Robot Creatures', description: 'Robots get personalities — and craft-material bodies. Engineering meets art table.' },
            { weeks: 'Weeks 11–14', title: 'Design Challenges', description: 'Challenge cards raise the bar: escape the pen, follow the path, and team relay builds.' },
            { weeks: 'Weeks 15–16', title: 'The Robot Zoo', description: 'Families tour a zoo of student-built robot creatures — each with a habitat, a name, and a demo.', isCapstone: true }
        ],
        staffOutcomes: [
            'Run screen-free robotics sessions for K–3 with zero robotics background',
            'Teach sense-think-act using cube combinations kids can discover themselves',
            'Rotate stations and manage sharing so one classroom kit serves the whole group',
            'Host a Robot Zoo family event'
        ],
        trainingModules: [
            { title: 'Module 1: Cube Bootcamp', description: 'Every cube\'s job, and your first working robots — built in the first hour of training.' },
            { title: 'Module 2: Behavior Recipes', description: 'The combination patterns behind every classic behavior, and how to let kids discover them.' },
            { title: 'Module 3: Little Kids, Real Robots', description: 'Routines, sharing norms, and station rotation that keep K–3 sessions calm and hands-on.' },
            { title: 'Module 4: Challenge Design', description: 'Running design challenges that stretch fast finishers without leaving anyone behind.' },
            { title: 'Module 5: The Robot Zoo', description: 'The family-event playbook: habitats, name cards, and a tour that shows off every builder.' }
        ],
        // TODO(verify): confirm these four numbers before publishing widely
        logistics: {
            sessionLength: '30–45 min',
            totalSessions: '16 weekly sessions',
            groupSize: '8–12 students',
            staffRatio: '1 trained leader per ~8 students'
        },
        faq: [
            { question: 'Is this really 100% screen-free?', answer: 'Yes. Robot behavior comes entirely from which cubes you snap together — no app, tablet, or computer is needed at any point in the semester.' },
            { question: 'How many kits do we need?', answer: 'One classroom kit runs a group of 8–12 using the station rotation covered in training. A second kit adds headroom for larger groups.' },
            { question: 'What if cubes get lost or damaged?', answer: 'The cubes are built for classroom life — magnetic connections, no exposed wires — and individual cubes can be replaced without rebuying the kit.' }
        ]
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
        studentOutcomes: [
            'Build and program 6+ working robots over the semester',
            'Code motors, lights, and sensors with kid-friendly icon-and-word blocks',
            'Solve maze and mission challenges on real challenge mats',
            'Work as build-and-code pairs, rotating roles every session',
            'Troubleshoot hardware — connections, ports, sensor placement — not just code',
            'Compete (and cheer) at the family Mission Showcase'
        ],
        whyItMatters: [
            { title: 'The program parents ask for by name', description: 'LEGO robotics is the most-requested STEM offering in after-school. This is the version your existing staff can actually run.' },
            { title: 'Hands and minds together', description: 'Every session mixes physical building with coding — the combination that holds 8-to-11-year-old attention where screen-only programs lose it.' },
            { title: 'Built to scale across sites', description: 'Same kits, same mats, same scripted sessions at every location. One partner org trained 14 staff and launched robotics at 6 sites in a single cohort.' },
            { title: 'A pipeline, not a one-off', description: 'Graduates feed straight into Robotics II and competition teams — a multi-year STEM identity your program owns.' }
        ],
        curriculumArc: [
            { weeks: 'Weeks 1–3', title: 'Build & Drive', description: 'First builds, first programs — every pair has a robot driving under their own code by week 2.' },
            { weeks: 'Weeks 4–6', title: 'Sense the World', description: 'Sensors enter the picture: robots that stop at lines, react to colors, and make decisions.' },
            { weeks: 'Weeks 7–10', title: 'Mission Mats', description: 'Maze runs and delivery missions on challenge mats, with points on the line and multiple ways to solve each one.' },
            { weeks: 'Weeks 11–14', title: 'Showcase Prep', description: 'Teams choose their missions, refine their robots, and log practice runs — engineering under a friendly deadline.' },
            { weeks: 'Weeks 15–16', title: 'The Mission Showcase', description: 'Timed mission runs in front of families — every team competes, every team scores.', isCapstone: true }
        ],
        staffOutcomes: [
            'Facilitate LEGO robotics builds and block coding with no prior experience',
            'Diagnose the usual suspects: loose cables, wrong ports, dead batteries, misaimed sensors',
            'Run pair roles and kit management so builds survive week to week',
            'Host a Mission Showcase with timed runs and scoring'
        ],
        trainingModules: [
            { title: 'Module 1: Kit Bootcamp', description: 'The hub, the motors, and your first build-and-drive — hands-on from minute one.' },
            { title: 'Module 2: Sensors & Missions', description: 'Teaching sensor-driven programs, and how the mission mats turn concepts into challenges.' },
            { title: 'Module 3: Kit Management', description: 'Sorting, storage, and charging routines that keep 4 kits alive across a full semester.' },
            { title: 'Module 4: Hardware Triage', description: 'The physical bugs code can\'t fix — and the 2-minute checks that solve most of them.' },
            { title: 'Module 5: The Mission Showcase', description: 'Mats, timers, scoring sheets, and the family-event playbook.' }
        ],
        // TODO(verify): confirm these four numbers before publishing widely
        logistics: {
            sessionLength: '45–60 min',
            totalSessions: '16 weekly sessions',
            groupSize: '8–12 students (1 kit per 2–3)',
            staffRatio: '1 trained leader per ~10 students'
        },
        faq: [
            { question: 'How many robotics kits do we need?', answer: 'One kit per 2–3 students — and pairs are actually better than solo builders. A group of 12 runs comfortably on 4–5 kits.' },
            { question: 'Do robots get taken apart every week?', answer: 'The curriculum alternates: early sessions build and tear down, while mission phases keep robots assembled between weeks. Training Module 3 covers storage for both modes.' },
            { question: 'SPIKE Essential or Dash — which should we buy?', answer: 'The curriculum supports both. Your shopping list ranks the options by budget and group size, and the training is delivered on whichever you choose.' }
        ],
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
        studentOutcomes: [
            'Engineer competition-grade robots: gear ratios, drivetrains, and chassis that survive contact',
            'Program autonomous routines using gyro, distance, and color sensors',
            'Develop game strategy — scoring math, task priorities, and alliance play',
            'Iterate under deadline: scrimmage, analyze, rebuild, repeat',
            'Operate as a real team: driver, builder, programmer, strategist',
            'Compete in a full in-house tournament — with a clear path into scholastic leagues'
        ],
        whyItMatters: [
            { title: 'Retention through the middle-school cliff', description: 'Grades 6–8 are where attendance quietly dies. A team identity — with a jersey and a bracket — gives students a reason to keep showing up.' },
            { title: 'The varsity model, pointed at engineering', description: 'Rosters, practices, rivalries, and a championship: the belonging usually reserved for sports, built around building robots.' },
            { title: 'League-ready without league pressure', description: 'The in-house tournament is a complete season on its own. If your site wants more, the training covers exactly how to enter VEX IQ or FIRST league play.' },
            { title: 'Real engineering vocabulary', description: 'Gear ratios, torque, sensor feedback — students leave talking like engineers because they\'ve spent a semester doing engineering.' }
        ],
        curriculumArc: [
            { weeks: 'Weeks 1–3', title: 'Chassis Engineering', description: 'Drivetrains, gearing, and structural bracing — building robots that don\'t fall apart on contact.' },
            { weeks: 'Weeks 4–6', title: 'Autonomous Mode', description: 'Gyro turns, distance sensing, and line detection — robots that score without a driver.' },
            { weeks: 'Weeks 7–10', title: 'Learn the Game', description: 'The season\'s challenge revealed: field setup, scoring analysis, and each team\'s first strategy.' },
            { weeks: 'Weeks 11–14', title: 'Scrimmage Season', description: 'Head-to-head practice matches with engineering time between rounds — the iterate-under-pressure weeks.' },
            { weeks: 'Weeks 15–16', title: 'The Tournament', description: 'A bracketed, alliance-based tournament in front of families — awards included.', isCapstone: true }
        ],
        staffOutcomes: [
            'Coach competition robotics without being the best engineer in the room',
            'Run practices with driver rotations, build stations, and code review',
            'Officiate head-to-head matches: field setup, timing, and scoring',
            'Navigate the scholastic league landscape (VEX IQ, FIRST) if your site wants official competition'
        ],
        trainingModules: [
            { title: 'Module 1: Advanced Build Bootcamp', description: 'Gears, torque, and chassis design — you\'ll build a competition-ready base during training.' },
            { title: 'Module 2: Sensors & Autonomy', description: 'Programming robots that act on their own — and coaching students through the debugging.' },
            { title: 'Module 3: Coach, Don\'t Solve', description: 'The practice structure that keeps students doing the engineering while you run the room.' },
            { title: 'Module 4: Game Day Operations', description: 'Fields, refs, brackets, and match flow — running a tournament that feels big-league.' },
            { title: 'Module 5: The League On-Ramp', description: 'Seasons, fees, and registration for VEX IQ and FIRST — if and when you want to go official.' }
        ],
        // TODO(verify): confirm these four numbers before publishing widely
        logistics: {
            sessionLength: '60–75 min',
            totalSessions: '16 weekly sessions',
            groupSize: '8–12 students (teams of 3–4)',
            staffRatio: '1 trained leader per ~10 students'
        },
        faq: [
            { question: 'Do students need Robotics I first?', answer: 'No — the first weeks rebuild the fundamentals at speed. Robotics I graduates simply hit competition pace sooner.' },
            { question: 'SPIKE Prime or VEX IQ — which should we buy?', answer: 'Both are fully supported. The honest tiebreaker is league ambition: VEX IQ has the most accessible league structure, SPIKE Prime feeds FIRST. Your shopping list covers both paths.' },
            { question: 'What does the tournament require from our site?', answer: 'A gym or cafeteria, a few tables, and the field elements already on your materials list. Module 4 of the training is the complete event playbook.' }
        ]
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
        studentOutcomes: [
            'Program the Agent — an in-game robot — to move, build, and mine on command',
            'Use loops, conditionals, and functions to automate builds too big to make by hand',
            'Level up from block coding to Python (older students) inside the same game',
            'Plan and execute a team build in a shared world',
            'Practice digital citizenship in a moderated multiplayer space',
            'Lead families through their world at the World Tour showcase'
        ],
        whyItMatters: [
            { title: 'Enrollment on autopilot', description: 'Put "Minecraft" on a flyer and the roster fills itself. This program converts that pull into real computer science.' },
            { title: 'They think it\'s Minecraft. It\'s CS.', description: 'The Agent only obeys code. To build the castle faster, students have to learn loops — motivation no worksheet can match.' },
            { title: 'One platform, grades 3–8', description: 'Block coding for 3rd graders and a Python path for 8th graders in the same title — a rare program that flexes across your whole roster.' },
            { title: 'A walled, managed world', description: 'Minecraft Education is the locked-down school edition: no public servers, no strangers, full facilitator controls. The parent safety conversation is an easy one.' }
        ],
        curriculumArc: [
            { weeks: 'Weeks 1–3', title: 'Meet the Agent', description: 'Code Builder basics — students command their Agent through first moves, first mines, and first builds.' },
            { weeks: 'Weeks 4–6', title: 'The Power of Loops', description: 'Walls, towers, and farms built with repetition — ten blocks of code doing a hundred blocks of work.' },
            { weeks: 'Weeks 7–10', title: 'Automation Projects', description: 'Functions and conditionals power auto-farms, bridge builders, and treasure hunts.' },
            { weeks: 'Weeks 11–14', title: 'The Team Build', description: 'Teams plan, divide, and code a shared-world project — collaboration with real constraints.' },
            { weeks: 'Weeks 15–16', title: 'The World Tour', description: 'Families explore the finished worlds in-game, guided by the students who coded them.', isCapstone: true }
        ],
        staffOutcomes: [
            'Host and manage a Minecraft Education classroom world',
            'Use in-game controls — borders, chat settings, teleport, and freeze — to keep sessions on task',
            'Teach Agent coding in blocks, with a Python path for older students',
            'Channel Minecraft energy into finished projects instead of chaos'
        ],
        trainingModules: [
            { title: 'Module 1: Minecraft Education Bootcamp', description: 'Licenses, installation, and hosting your first world — running before training ends.' },
            { title: 'Module 2: Classroom Controls', description: 'The settings and routines that keep 16 players building instead of griefing.' },
            { title: 'Module 3: Coding the Agent', description: 'The block-coding track: movement, loops, and builds, taught the way you\'ll teach it.' },
            { title: 'Module 4: The Python Path', description: 'When and how to move older students into text code inside the same projects.' },
            { title: 'Module 5: The World Tour', description: 'The showcase playbook: guided in-game tours with families at the controls.' }
        ],
        // TODO(verify): confirm these four numbers before publishing widely
        logistics: {
            sessionLength: '45–60 min',
            totalSessions: '16 weekly sessions',
            groupSize: '8–16 students',
            staffRatio: '1 trained leader per ~10 students'
        },
        faq: [
            { question: 'Is this the same Minecraft kids play at home?', answer: 'Same core game, different edition. Minecraft Education adds coding tools and classroom controls, and multiplayer is limited to your own managed world — no public servers.' },
            { question: 'What do the licenses cost?', answer: 'Licenses are per student, per year — typically in the $5–12 range depending on your organization type. The shopping list has current pricing and purchase links.' },
            { question: 'Will they just play instead of coding?', answer: 'Sessions are structured so progress requires code — the Agent does what hand-building can\'t. Training Module 2 covers the controls and routines that keep it that way.' }
        ]
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
        studentOutcomes: [
            'Build working circuits and explain conductivity from hands-on discovery',
            'Turn bananas, playdough, and foil into game controllers and instruments',
            'Test and sort materials by what conducts — real experimental method, disguised as play',
            'Design custom controllers for Scratch games',
            'Prototype an original interactive invention through the full design cycle',
            'Demo it at the hands-on Invention Expo'
        ],
        whyItMatters: [
            { title: 'Electricity you can\'t unlearn', description: 'A kid who has completed a circuit through a banana never forgets how conductivity works. It\'s science-class content at arcade-level engagement.' },
            { title: 'Big wow, small budget', description: 'The kits cost about $50 each and last for years — everything else comes from the grocery and craft aisles. One of the cheapest launches in the catalog.' },
            { title: 'STEM for the art kids', description: 'Instruments, drawing-based controllers, and craft materials pull in students who\'d skip a robotics club — then teach them circuits anyway.' },
            { title: 'Instant family content', description: 'A playdough piano demos in ten seconds and gets filmed every time. The Invention Expo markets your program for you.' }
        ],
        curriculumArc: [
            { weeks: 'Weeks 1–3', title: 'Circuit Discovery', description: 'Closing circuits, testing what conducts — and playing the first banana piano by week 2.' },
            { weeks: 'Weeks 4–6', title: 'Game Controllers', description: 'Foil dance pads and playdough gamepads, wired up to real Scratch games.' },
            { weeks: 'Weeks 7–10', title: 'Instruments & Interactives', description: 'Pianos, drum kits, and pencil-drawn circuits — inventions that make noise and take input.' },
            { weeks: 'Weeks 11–14', title: 'The Invention Project', description: 'Each student designs an original interactive invention: idea, prototype, test, improve.' },
            { weeks: 'Weeks 15–16', title: 'The Invention Expo', description: 'A hands-on family expo where visitors play every single invention.', isCapstone: true }
        ],
        staffOutcomes: [
            'Teach circuits and conductivity with zero science background',
            'Set up and troubleshoot Makey Makey kits (it\'s almost always the ground wire)',
            'Run material stations that keep inventing productive and cleanup fast',
            'Host a hands-on Invention Expo'
        ],
        trainingModules: [
            { title: 'Module 1: Makey Makey Bootcamp', description: 'Your first circuit in five minutes, your first banana piano in fifteen — all live.' },
            { title: 'Module 2: Conductivity 101', description: 'The actual science, explained exactly the way you\'ll explain it to a 3rd grader.' },
            { title: 'Module 3: Stations & Materials', description: 'Cheap sourcing, smart setup, and the cleanup routine that keeps sessions on time.' },
            { title: 'Module 4: Coaching Inventors', description: 'Moving students from following recipes to shipping their own ideas.' },
            { title: 'Module 5: The Invention Expo', description: 'The event playbook for a family expo where everything is playable.' }
        ],
        // TODO(verify): confirm these four numbers before publishing widely
        logistics: {
            sessionLength: '45–60 min',
            totalSessions: '16 weekly sessions',
            groupSize: '8–12 students',
            staffRatio: '1 trained leader per ~10 students'
        },
        faq: [
            { question: 'How many Makey Makey kits do we need?', answer: 'One kit per 2–3 students — invention teams work well. A group of 12 runs comfortably on 4–5 kits.' },
            { question: 'What materials do we have to keep buying?', answer: 'Mostly grocery and craft staples: foil, playdough, fruit, and paper. The kits themselves are reusable for years, so consumables run a few dollars a week.' },
            { question: 'Does it work with Chromebooks?', answer: 'Yes — a Makey Makey acts as a plug-and-play USB keyboard, so it works with anything that runs a browser and Scratch.' }
        ]
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
        studentOutcomes: [
            'Use the full engineering design process: define, brainstorm, prototype, test, improve',
            'Complete a semester of build challenges — towers, racers, catapults, and marble runs',
            'Wire simple circuits: LEDs, coin batteries, and homemade switches inside their builds',
            'Develop real fabrication skills: measuring, scoring, joining, and clean cardboard construction',
            'Invent an original solution to a problem they chose themselves',
            'Pitch and demo it at the Invention Convention'
        ],
        whyItMatters: [
            { title: 'The lowest-cost STEM you can run', description: 'Cardboard, tape, and hot glue. If your budget is close to zero, this is the program — and it gives up nothing on rigor.' },
            { title: 'Screen-free by design', description: 'Pure hands-on making, for sites balancing device time — and for the licensing and parent conversations where "more screens" is a hard sell.' },
            { title: 'Process over product', description: 'The engineering design process transfers to everything — science fair, math, writing. Funders recognize it by name in a grant narrative.' },
            { title: 'Every kid can enter', description: 'No reading level, coding experience, or device skills required. The most accessible program in the catalog is also one of the most demanding.' }
        ],
        curriculumArc: [
            { weeks: 'Weeks 1–3', title: 'Think Like an Engineer', description: 'The design process, learned through rapid challenges: tallest tower, strongest bridge, fastest fix.' },
            { weeks: 'Weeks 4–6', title: 'Machines That Move', description: 'Rubber-band racers, catapults, and marble runs — energy and motion from craft supplies.' },
            { weeks: 'Weeks 7–10', title: 'Light It Up', description: 'LEDs, coin batteries, and foil switches bring builds to life — first circuits, no soldering.' },
            { weeks: 'Weeks 11–14', title: 'The Invention Sprint', description: 'Students pick a real problem, prototype a solution, test it with real users, and iterate.' },
            { weeks: 'Weeks 15–16', title: 'The Invention Convention', description: 'Science-fair-style pitches and live demos for families — every inventor presents.', isCapstone: true }
        ],
        staffOutcomes: [
            'Facilitate the engineering design process without giving away answers',
            'Run a making space: material stations, tool safety, and 15-minute cleanups',
            'Scale every challenge up or down across grades 3–8',
            'Host an Invention Convention pitch-and-demo event'
        ],
        trainingModules: [
            { title: 'Module 1: The Design Process', description: 'You\'ll experience it yourself first — a live build challenge, start to finish.' },
            { title: 'Module 2: The Maker Space on a Cart', description: 'Materials, storage, low-temp glue-gun safety, and sourcing free cardboard forever.' },
            { title: 'Module 3: Questions, Not Answers', description: 'The coaching moves that keep the thinking — and the pride — with the kids.' },
            { title: 'Module 4: Simple Circuits', description: 'LEDs, batteries, and switches, taught in twenty minutes — no electronics background needed.' },
            { title: 'Module 5: The Invention Convention', description: 'The event playbook: pitch format, demo tables, and family judging that celebrates everyone.' }
        ],
        // TODO(verify): confirm these four numbers before publishing widely
        logistics: {
            sessionLength: '45–60 min',
            totalSessions: '16 weekly sessions',
            groupSize: '8–16 students',
            staffRatio: '1 trained leader per ~10 students'
        },
        faq: [
            { question: 'What does a semester of materials really cost?', answer: 'With donated cardboard — every site has a recycling stream — most groups run a full semester for under $150 in tape, glue, LEDs, and batteries.' },
            { question: 'Is hot glue safe for 3rd graders?', answer: 'The curriculum specifies low-temperature glue guns and a taught safety routine. It\'s a skill-building moment, not a hazard — and staff practice the routine in training.' },
            { question: 'Do 3rd and 8th graders really do the same challenges?', answer: 'Same challenges, different constraints. Older students get tighter budgets, taller targets, and added requirements — the training covers exactly how to scale each one.' }
        ]
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
        studentOutcomes: [
            'Explain why triangles beat squares — and use bracing, load paths, and foundations in real builds',
            'Build bridges that hold real weight, tested to failure on purpose',
            'Design towers to survive shake-table earthquakes and fan-driven wind',
            'Measure, record, and compare test results like practicing engineers',
            'Collaborate on a city-scale team build',
            'Run the tests live at the City Build & Stress Test'
        ],
        whyItMatters: [
            { title: 'Failure is the curriculum', description: 'Builds are tested until they break — on purpose. Students learn that failure is data, the exact mindset every STEM field runs on.' },
            { title: 'Screen-free and proud', description: 'A full engineering program with zero devices — an easy yes for sites, licensors, and parents watching screen time.' },
            { title: 'Kits that never expire', description: 'KEVA planks and K\'NEX need no updates, chargers, or licenses. Buy once and run this program for a decade.' },
            { title: 'Spectacle that teaches', description: 'A tower surviving — or spectacularly failing — a shake-table test is the loudest moment of your semester, and it\'s pure physics.' }
        ],
        curriculumArc: [
            { weeks: 'Weeks 1–3', title: 'Forces & Shapes', description: 'Compression, tension, and why triangles win — discovered through fast head-to-head builds.' },
            { weeks: 'Weeks 4–6', title: 'Bridges', description: 'Beam and truss designs, load-tested with real weights until they give — then rebuilt stronger.' },
            { weeks: 'Weeks 7–10', title: 'Towers', description: 'Height versus stability: towers face the fan and the shake table, and the data gets recorded.' },
            { weeks: 'Weeks 11–14', title: 'The City Build', description: 'Teams engineer a whole city district — buildings, bridges, and towers that all have to meet code.' },
            { weeks: 'Weeks 15–16', title: 'City Build & Stress Test', description: 'Families watch the finished city face wind, weight, and the shake table — students run every test.', isCapstone: true }
        ],
        staffOutcomes: [
            'Teach structural concepts — load, tension, bracing — without an engineering degree',
            'Run fair tests: standard weights, wind, and shake-table protocols',
            'Rotate building kits across stations and grade levels',
            'Host a City Build & Stress Test family event'
        ],
        trainingModules: [
            { title: 'Module 1: Structures Bootcamp', description: 'Forces and shapes, hands-on — you\'ll build and break your own bridge during training.' },
            { title: 'Module 2: The Testing Rigs', description: 'Assemble your shake table and load rigs in training — simple builds your site keeps.' },
            { title: 'Module 3: Challenge Progressions', description: 'Bridges to towers to cities — and how each challenge scales from 2nd grade to 8th.' },
            { title: 'Module 4: Engineering Talk', description: 'The questions and vocabulary that turn block play into engineering thinking.' },
            { title: 'Module 5: The Stress Test Event', description: 'The family-event playbook — test stations, student roles, and the dramatic finale.' }
        ],
        // TODO(verify): confirm these four numbers before publishing widely
        logistics: {
            sessionLength: '45–60 min',
            totalSessions: '16 weekly sessions',
            groupSize: '8–16 students',
            staffRatio: '1 trained leader per ~10 students'
        },
        faq: [
            { question: 'What exactly is a shake table?', answer: 'A simple platform that simulates an earthquake — ours is a low-cost build you assemble during training and keep. It\'s the most popular piece of equipment in the program.' },
            { question: 'Which building kit should we buy?', answer: 'KEVA planks, Strawbees, and K\'NEX are all supported — the shopping list ranks them by your grade mix and budget, and the curriculum works with what you choose.' },
            { question: 'Do the materials get used up?', answer: 'No — nothing is consumable. The same planks and connectors run the program year after year, which is why the per-semester cost after launch is essentially zero.' }
        ]
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
        studentOutcomes: [
            'Train real machine-learning models to recognize images, sounds, and poses',
            'Explain how AI learns from examples — and why better examples make it smarter',
            'Break their own models on purpose, find the bias, and fix it with better data',
            'Play unplugged games that model how machines "think" — no devices needed',
            'Connect a trained model to a project that reacts to the world',
            'Run a demo station at the family AI Fair'
        ],
        whyItMatters: [
            { title: 'AI literacy is the new internet safety', description: 'These kids will grow up inside AI systems. Understanding how models learn — and how they fail — is protective knowledge every family wants their kid to have.' },
            { title: 'Kid-safe by design', description: 'Every tool is browser-based with no logins: nothing to sign up for, no accounts to manage, no age-gate problems. Elementary AI, done right.' },
            { title: 'Grant reviewers lean in', description: '"Elementary AI literacy" is one of the strongest phrases you can put in a funding narrative right now — and almost nobody else in after-school offers it.' },
            { title: 'Demystified, not magical', description: 'Students who have trained a model themselves know AI isn\'t magic or scary — it\'s math and examples. That grounded confidence is the whole point.' }
        ],
        curriculumArc: [
            { weeks: 'Weeks 1–3', title: 'What Is AI, Really?', description: 'Unplugged sorting and training games — students play the role of the algorithm before touching a device.' },
            { weeks: 'Weeks 4–6', title: 'Teach the Machine', description: 'First image models in Teachable Machine: rock-paper-scissors detectors and class mascots the computer learns to spot.' },
            { weeks: 'Weeks 7–10', title: 'Sounds & Poses', description: 'Models that hear claps and whistles, and models that read body poses — training data gets creative.' },
            { weeks: 'Weeks 11–14', title: 'When AI Gets It Wrong', description: 'Bias hunting: students break their models, diagnose why, and retrain with better data.' },
            { weeks: 'Weeks 15–16', title: 'The AI Fair', description: 'Families train and test models at student-run stations — the kids are the AI experts in the room.', isCapstone: true }
        ],
        staffOutcomes: [
            'Explain how machine learning works in plain language',
            'Run Teachable Machine and Machine Learning for Kids sessions — all free, no logins',
            'Facilitate unplugged AI games for device-free days',
            'Lead age-appropriate conversations about AI bias and limits'
        ],
        trainingModules: [
            { title: 'Module 1: AI in Plain English', description: 'How models actually learn, explained exactly the way you\'ll teach it — no math degree required.' },
            { title: 'Module 2: Tool Bootcamp', description: 'Train your first image, sound, and pose models live during training.' },
            { title: 'Module 3: Unplugged AI', description: 'The no-device activity bank — sorting games and human-algorithm play for any space.' },
            { title: 'Module 4: Bias & Boundaries', description: 'Teaching what AI gets wrong, honestly, without scaring anyone — plus answers for parent questions.' },
            { title: 'Module 5: The AI Fair', description: 'The event playbook: demo stations where families become the training data.' }
        ],
        // TODO(verify): confirm these four numbers before publishing widely
        logistics: {
            sessionLength: '45–60 min',
            totalSessions: '16 weekly sessions',
            groupSize: '8–16 students',
            staffRatio: '1 trained leader per ~10 students'
        },
        faq: [
            { question: 'Do students need accounts for any of this?', answer: 'No — every tool in the curriculum runs in the browser without a login. There is nothing to sign up for, which is exactly why these tools were chosen for elementary ages.' },
            { question: 'Is this ChatGPT for kids?', answer: 'No — there are no chatbots in this program. Students train small recognition models on examples they create themselves, which is a much better (and safer) window into how AI actually works.' },
            { question: 'What happens to the photos and sounds kids record?', answer: 'Training happens on-device in the browser — samples aren\'t uploaded to an account or stored anywhere. Close the tab and they\'re gone.' }
        ]
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
        studentOutcomes: [
            'Build working apps and games by directing AI tools — describing, testing, and refining',
            'Write prompts that get results: specific, decomposed, and iterated',
            'Debug by conversation — describe the bug precisely, evaluate the fix skeptically',
            'Judge AI output critically instead of accepting the first answer',
            'Learn where AI-assisted building shines — and where real code literacy still matters',
            'Ship a personal capstone app and present it at Demo Day'
        ],
        whyItMatters: [
            { title: 'This is how software gets built now', description: 'AI-assisted development is standard practice in the industry. Teens who learn to direct AI well are learning the actual job skill, not a toy version of it.' },
            { title: 'From consumers to directors', description: 'Teens already use AI daily. This program teaches them to command it — keeping the human in the driver\'s seat is the entire curriculum.' },
            { title: 'Idea to app in weeks', description: 'Students with zero coding background ship working software fast. That speed keeps the hardest audience in after-school — high schoolers — coming back.' },
            { title: 'Age-gating handled for you', description: 'Which platforms allow a 13-year-old? What consent do you need? The training answers what almost no youth org knows — before a parent asks.' }
        ],
        curriculumArc: [
            { weeks: 'Weeks 1–3', title: 'Take the Driver\'s Seat', description: 'How AI builders work, prompt fundamentals, and a first mini-app shipped in week 2.' },
            { weeks: 'Weeks 4–6', title: 'Build & Iterate', description: 'Small apps end-to-end: describe, generate, test, refine — the loop that is the real skill.' },
            { weeks: 'Weeks 7–10', title: 'Debugging by Conversation', description: 'Precise bug reports, reading just enough code to verify, and knowing when the AI is confidently wrong.' },
            { weeks: 'Weeks 11–14', title: 'The Capstone App', description: 'Each student scopes and builds a personal app — and tests it on real users.' },
            { weeks: 'Weeks 15–16', title: 'Demo Day', description: 'Students present live, working apps to families — and explain how they directed the build.', isCapstone: true }
        ],
        staffOutcomes: [
            'Facilitate AI-assisted building sessions without being a programmer',
            'Coach prompting: help a stuck student without touching their keyboard',
            'Set up compliant accounts — age requirements, consent, and site policy',
            'Run a Demo Day where every student ships something live'
        ],
        trainingModules: [
            { title: 'Module 1: Vibe Coding Bootcamp', description: 'You\'ll build your own app with AI during training — the fastest way to understand what students experience.' },
            { title: 'Module 2: Accounts & Age Gates', description: 'The compliance module: which platforms allow which ages, consent forms, and your site policy.' },
            { title: 'Module 3: Facilitation, Not Answers', description: 'Keeping students in the driver\'s seat — the coaching moves that stop AI from doing the thinking.' },
            { title: 'Module 4: Quality Control', description: 'Teaching students to test, question, and verify what AI hands them.' },
            { title: 'Module 5: Demo Day', description: 'The event playbook for a live app showcase that impresses families and funders alike.' }
        ],
        // TODO(verify): confirm these four numbers before publishing widely
        logistics: {
            sessionLength: '45–60 min',
            totalSessions: '16 weekly sessions',
            groupSize: '8–16 students',
            staffRatio: '1 trained leader per ~10 students'
        },
        faq: [
            { question: 'Which AI platforms does the program use?', answer: 'The curriculum is platform-flexible — Claude, Replit, and similar builders all work. The training helps you choose based on your students\' ages and your budget.' },
            { question: 'Isn\'t this just letting the AI do the work?', answer: 'Directing the work is the work: scoping the app, writing precise specs, testing ruthlessly, and iterating. Students can\'t ship a capstone they don\'t understand — the curriculum is built to make that impossible to fake.' },
            { question: 'What does platform access cost?', answer: 'Most supported platforms have free tiers that cover the semester. The training includes a current cost walkthrough so you can budget before you commit.' }
        ]
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
        studentOutcomes: [
            'Compete on a real team with structured practices — not just open play',
            'Build communication and strategy skills, reviewed after every scrimmage',
            'Practice sportsmanship: wins, losses, and handshakes are all coached',
            'Learn healthy gaming habits inside a built-in screen-time framework',
            'Take on roles beyond player: shoutcaster, scorekeeper, and tournament ops',
            'Compete in a season-ending championship in front of families'
        ],
        whyItMatters: [
            { title: 'Reaches the unreached kids', description: 'Esports pulls in students who skip sports, clubs, and everything else you offer. For many sites it\'s the first program with a waitlist.' },
            { title: 'The budget path is real', description: '4–6 Nintendo Switch consoles launch a full program for under $2,500. One partner site did exactly that — and packed the gym for its first tournament.' },
            { title: 'Structure parents get behind', description: 'Screen-time policy, sportsmanship rules, and age-appropriate game selection turn skeptical parents into supporters. One site measured 96% parent approval.' },
            { title: 'A season, not a screen', description: 'Rosters, practices, scrimmages, and a championship give gaming the structure of athletics — belonging, mentorship, and showing up for your team.' }
        ],
        curriculumArc: [
            { weeks: 'Weeks 1–3', title: 'Team Formation', description: 'Interest meetings, skill placement (no cuts), rosters, and team norms — every player finds a seat.' },
            { weeks: 'Weeks 4–6', title: 'Practice Structure', description: 'Warm-ups, drills, and station rotations — with sportsmanship coached from the first scrim.' },
            { weeks: 'Weeks 7–10', title: 'Strategy & Review', description: 'Team communication, match review, and role specialization — players start thinking like a team.' },
            { weeks: 'Weeks 11–14', title: 'Scrimmage Season', description: 'Regular competitive matches, with shoutcasting and scorekeeping roles rotating through the roster.' },
            { weeks: 'Weeks 15–16', title: 'The Championship', description: 'A bracketed in-house tournament with families in the stands — casters, scoreboard, and awards included.', isCapstone: true }
        ],
        staffOutcomes: [
            'Launch a complete esports program: games, gear, rosters, and rules',
            'Select age-appropriate titles — and confidently defend the choices to parents',
            'Run structured practices with drills, rotations, and match review',
            'Host a bracketed tournament, and join a scholastic league if you want more'
        ],
        trainingModules: [
            { title: 'Module 1: The Launch Blueprint', description: 'Game selection by age, the Switch budget path versus the PC path, and room setup.' },
            { title: 'Module 2: Policies That Win Parents', description: 'Screen-time limits, sportsmanship rules, game ratings, and ready-to-send parent communication.' },
            { title: 'Module 3: Practice Like a Team', description: 'The practice format — warm-ups, drills, rotations, and review — that separates a team from a game room.' },
            { title: 'Module 4: Tournament Operations', description: 'Brackets, casting, scorekeeping, and event flow for a championship that fills the gym.' },
            { title: 'Module 5: The League On-Ramp', description: 'Scholastic leagues: seasons, fees, and how to register when your site is ready.' }
        ],
        // TODO(verify): confirm these four numbers before publishing widely
        logistics: {
            sessionLength: '60–90 min practices',
            totalSessions: '16-week season',
            groupSize: '12–24 students (2–4 teams)',
            staffRatio: '1 trained coach per ~12 students'
        },
        faq: [
            { question: 'Do we need gaming PCs?', answer: 'No — the budget path is 4–6 Nintendo Switch consoles, and the training teaches it explicitly. The PC path is covered too, mainly for high-school titles that require it.' },
            { question: 'Which games are appropriate for younger students?', answer: 'Rocket League, Smash, Mario Kart, and Minecraft are the elementary and middle-school staples — all E/E10+ rated. Valorant-tier titles are high-school only, and Module 1 covers the full selection framework.' },
            { question: 'How do we answer screen-time concerns?', answer: 'With the program\'s own structure: practices mix drills, strategy, review, and non-playing roles, so screen time is bounded by design. The policy templates in Module 2 are written to share directly with parents.' }
        ],
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
