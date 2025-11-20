import { Course, CourseCategory } from '../types';

export const COURSES: Course[] = [
    {
        id: 'scratch-game-design',
        title: '2D Game Design with Scratch',
        description: 'Turn screen time into creative time. Staff will learn how to teach fundamental coding concepts (loops, variables, conditionals) through the creation of arcade-style games.',
        category: CourseCategory.CODING,
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Beginner Friendly', 'No Hardware Needed', 'Grades 3-5'],
        duration: '4 Hours (Self-Paced)',
        gradeLevel: 'Elementary (3-5)',
        equipment: ['Chromebooks or Laptops', 'Internet Connection'],
        learningOutcomes: [
            'Understand block-based coding fundamentals',
            'Create 3 distinct game types: Chase, Clicker, and Platformer',
            'Debug common student errors',
            'Facilitate a "Game Showcase" event'
        ],
        syllabus: [
            { title: 'Module 1: The Basics', description: 'Sprites, Backdrops, and Motion blocks.' },
            { title: 'Module 2: Logic & Loops', description: 'Making things happen over and over (and only when we want them to).' },
            { title: 'Module 3: Variables', description: 'Keeping score and tracking lives.' },
            { title: 'Module 4: Game Polish', description: 'Sound effects, title screens, and "Game Over" states.' }
        ],
        price: 299
    },
    {
        id: 'lego-spike-prime',
        title: 'Intro to Robotics with LEGO Spike',
        description: 'The perfect entry point for robotics. Staff will master the Spike Prime kit, learning to build and program robots that navigate mazes, lift objects, and react to sensors.',
        category: CourseCategory.ROBOTICS,
        image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Hands-On', 'Hardware Required', 'Grades 4-8'],
        duration: '6 Hours (Live or Recorded)',
        gradeLevel: 'Upper Elementary / Middle',
        equipment: ['LEGO Spike Prime Kits (1 per 2 students)', 'Tablets or Laptops'],
        learningOutcomes: [
            'Build and program a driving base',
            'Use color and distance sensors for autonomous navigation',
            'Teach the Engineering Design Process',
            'Run a "Sumo Bot" competition'
        ],
        syllabus: [
            { title: 'Module 1: Unboxing & Sorting', description: 'Classroom management for 500+ Lego pieces.' },
            { title: 'Module 2: Moving & Turning', description: 'Precise motor control and geometry.' },
            { title: 'Module 3: Sensors', description: 'Making the robot "see" the world.' },
            { title: 'Module 4: The Challenge', description: 'Designing a robot to solve a specific problem.' }
        ],
        price: 499
    },
    {
        id: 'microbit-maker',
        title: 'Physical Computing with Micro:bit',
        description: 'Bridge the digital and physical worlds. Staff will learn to program this tiny computer to create wearable tech, digital pets, and interactive art installations.',
        category: CourseCategory.MAKER,
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Maker', 'Low Cost', 'Grades 4+'],
        duration: '3 Hours',
        gradeLevel: 'Grades 4-8',
        equipment: ['BBC Micro:bits (1 per student)', 'Alligator Clips', 'Craft Supplies'],
        learningOutcomes: [
            'Program LED displays and buttons',
            'Use built-in accelerometers and compasses',
            'Connect external components (servos, LEDs)',
            'Integrate code into cardboard constructions'
        ],
        syllabus: [
            { title: 'Module 1: Hello World', description: 'Scrolling text and basic icons.' },
            { title: 'Module 2: Inputs', description: 'Buttons, shaking, and temperature.' },
            { title: 'Module 3: Radio', description: 'Sending messages between Micro:bits.' },
            { title: 'Module 4: Final Project', description: 'Building a "Pet Rock" or "Step Counter".' }
        ],
        price: 199
    },
    {
        id: 'stop-motion-animation',
        title: 'Stop Motion Animation Studio',
        description: 'Lights, Camera, Action! Empower students to tell their stories one frame at a time. Covers scripting, storyboarding, shooting, and editing.',
        category: CourseCategory.CREATIVE,
        image: 'https://images.unsplash.com/photo-1535016120720-40c6874c3b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Creative', 'Tablets Only', 'Grades K-12'],
        duration: '2 Hours',
        gradeLevel: 'All Ages',
        equipment: ['Tablets with Stop Motion App', 'Tripods/Stands', 'Toys/Clay/Paper'],
        learningOutcomes: [
            'Understand frame rate and persistence of vision',
            'Create smooth animation using "onion skinning"',
            'Add voiceover and sound effects',
            'Host a Film Festival'
        ],
        syllabus: [
            { title: 'Module 1: The Setup', description: 'Lighting, stability, and backgrounds.' },
            { title: 'Module 2: Movement', description: 'Easing in and easing out.' },
            { title: 'Module 3: Audio', description: 'Foley and dialogue.' },
            { title: 'Module 4: Editing', description: 'Putting it all together.' }
        ],
        price: 149
    },
    {
        id: 'ai-educators',
        title: 'Intro to AI for Educators',
        description: 'Our flagship course. Demystify Artificial Intelligence and give your staff the superpowers to save time and personalize learning.',
        category: CourseCategory.AI,
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Professional Development', 'No Hardware', 'All Staff'],
        duration: '5 Hours',
        gradeLevel: 'Adult / Professional',
        equipment: ['Laptops'],
        learningOutcomes: [
            'Understand LLMs and Generative AI',
            'Master "Prompt Engineering"',
            'Create lesson plans and rubrics instantly',
            'Navigate ethics and bias'
        ],
        syllabus: [
            { title: 'Module 1: What is AI?', description: 'Beyond the hype.' },
            { title: 'Module 2: Prompting', description: 'Talking to the machine.' },
            { title: 'Module 3: Planning', description: 'The 10x teacher.' },
            { title: 'Module 4: Policy', description: 'Safe use in schools.' }
        ],
        price: 599
    },
    {
        id: 'python-data',
        title: 'Python for Data Science',
        description: 'For advanced high school programs. Teach students real-world coding skills used by data scientists at Google and Netflix.',
        category: CourseCategory.CODING,
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        tags: ['Advanced', 'High School', 'Career Prep'],
        duration: '10 Hours',
        gradeLevel: 'High School (9-12)',
        equipment: ['Laptops with Python installed'],
        learningOutcomes: [
            'Write clean, efficient Python code',
            'Analyze datasets using Pandas',
            'Visualize data with Matplotlib',
            'Build a final predictive model'
        ],
        syllabus: [
            { title: 'Module 1: Python Syntax', description: 'Variables, lists, and dictionaries.' },
            { title: 'Module 2: Data Analysis', description: 'Working with CSVs and big data.' },
            { title: 'Module 3: Visualization', description: 'Making charts that tell a story.' },
            { title: 'Module 4: Project', description: 'Analyzing real-world climate data.' }
        ],
        price: 399
    }
];
