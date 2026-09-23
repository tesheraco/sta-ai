import { CaseStudy, ProgramPillar } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'newark-board-of-education',
    organization: 'Newark Board of Education',
    topic: 'Esports',
    pillar: ProgramPillar.ESPORTS,
    gradeLevel: 'High School',
    organizationType: 'Public School District',
    location: 'Newark, NJ',
    logo: '/logos/newark_logo_gray.svg',
    summary: 'We worked with 3 high schools to start their inaugural esports program.',
    overview: 'We helped Newark Board of Education introduce the district\'s first official high school esports program, launching teams at three schools: Technology High School, East Side High School, and Newark School of Data Science & Information Technology.',
    challenge: 'Esports had never been an official high school activity in Newark. The program needed a game to build around, and each school needed equipment, purchasing support, and IT setup. The coaches stepping up to lead the new teams had minimal or no esports experience.',
    approach: [
      { title: 'Start with one game', description: 'All three schools launched with Rocket League, so every team practiced and competed in the same game.' },
      { title: 'Equipment, purchasing, and IT', description: 'We helped each site decide on its equipment, a setup of six gaming desktops, then assisted with purchasing and IT.' },
      { title: 'Coach training', description: 'We held training for the coaches from every school, each of whom came in with minimal or no esports experience.' },
      { title: 'The Super Cup', description: 'The first season culminated in a Super Cup, where the schools played each other in person at an event attended and watched by the entire community, including on a live stream.' }
    ],
    outcomes: [
      'Launched the district\'s first official high school esports program',
      'Fielded teams at three high schools in the first season',
      'Prepared coaches new to esports to lead their teams through a full season',
      'Closed the season with a Super Cup played in person and streamed live'
    ]
  },
  {
    id: 'grand-street-settlement',
    organization: 'Grand Street Settlement',
    topic: 'LEGO Robotics',
    pillar: ProgramPillar.STEM,
    gradeLevel: 'Grades K–8',
    organizationType: 'Community-Based Organization',
    location: 'New York, NY',
    logo: '/logos/gs_logo.svg',
    summary: 'We trained 150+ staff across their various school and community sites in Manhattan and Brooklyn.',
    overview: 'Grand Street Settlement is a New York City community organization serving school and community sites throughout Manhattan and Brooklyn. Over three years, we have worked with more than 150 of their staff, focusing each year on topics tied to their annual themes and goals, including coding, VR, robotics, and esports.',
    challenge: 'Grand Street runs hundreds of hours of after school programming every week, so the staff working directly with students are always in need of practical, effective STEM programs. Their focus also shifts from year to year, so the training has to keep pace with new themes and goals.',
    approach: [
      { title: 'A new focus each year', description: 'Each year we build the training around Grand Street\'s themes and goals, including topics like coding, VR, robotics, and esports.' },
      { title: 'Training at headquarters', description: 'We train staff in person at Grand Street\'s headquarters at 80 Pitt Street, in sessions that run several hours.' },
      { title: 'Online curriculum and materials', description: 'We created online platforms with the curriculum, so every staff member knows exactly what to do in the classroom. We also help with purchasing materials.' },
      { title: 'The Discovery Fair', description: 'Every year, Grand Street holds a Discovery Fair where each site and class shows its projects from the year. We help prepare for the event.' }
    ],
    outcomes: [
      'Worked with more than 150 staff over three years',
      'Covered coding, VR, robotics, and esports, following Grand Street\'s yearly themes',
      'Gave every staff member an online curriculum to follow in the classroom',
      'Helped prepare the annual Discovery Fair, where every site and class shows its work'
    ]
  },
  {
    id: 'phipps-neighborhoods',
    organization: 'Phipps Neighborhoods',
    topic: 'Sports & STEM',
    pillar: ProgramPillar.STEM,
    gradeLevel: 'Grades K–5',
    organizationType: 'Community-Based Organization',
    location: 'Bronx, NY',
    logo: '/logos/phipps.svg',
    summary: 'We trained 80+ group leaders to run a summer STEM program built around sports and the outdoors.',
    overview: 'We trained more than 80 group leaders at Phipps Neighborhoods to run STEM over the summer. The featured program was Structures & Skyscrapers, our structural engineering program, which we combined with a sports and outdoors curriculum since the summer ran outside.',
    challenge: 'The summer program ran outdoors, so a standard classroom STEM curriculum would not fit. Group leaders needed activities that worked outside, built real math and engineering skills, and kept students engaged for the whole summer.',
    approach: [
      { title: 'Group leader training', description: 'We led a large training for more than 80 group leaders, held in person and focused on summer STEM.' },
      { title: 'Engineering meets sports', description: 'Structures & Skyscrapers, our structural engineering program, was the centerpiece. Because the summer ran outdoors, we combined it with a sports and outdoors curriculum.' },
      { title: 'Sports as experiments', description: 'Students ran experiments like tracking their heartbeats, measuring frisbee distance, and recording dribble frequency, learning math and statistics skills along the way.' },
      { title: 'Challenges all summer', description: 'We built a series of engineering challenges that kept students engaged all summer long.' }
    ],
    outcomes: [
      'Trained more than 80 group leaders in person for summer STEM',
      'Paired structural engineering with a sports and outdoors curriculum',
      'Turned heartbeats, frisbee throws, and dribbling into math and statistics practice',
      'Kept students engaged all summer with engineering challenges'
    ]
  }
];
