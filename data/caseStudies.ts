import { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Site Director, After-School Program',
    location: 'Brooklyn, NY',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    quote: "None of my staff had ever written a line of code. Eight weeks later they were running a Scratch arcade night with 60 families in the room.",
    fullStory: `We'd been quoted $180 per session by an outside STEM vendor — for one hour, one day a week. It wasn't sustainable, and when their instructor left mid-semester, the program just stopped.

    STA flipped the model. Instead of renting an instructor, they trained my existing group leaders to run Game Builders themselves. The facilitation guides are written for people with zero coding background — every session is scripted, every common student error has a troubleshooting note.

    Our first Arcade Showcase drew more families than any event we'd run all year. Now STEM is something we own, not something we book.`,
    metrics: [
      { label: 'Sites Launched', value: '1' },
      { label: 'Staff Trained', value: '2' },
      { label: 'Vendor Cost Saved', value: '$5.4k/yr' }
    ]
  },
  {
    id: '2',
    name: 'Marcus Thompson',
    role: 'Program Director, Youth Development Org',
    location: 'Oakland, CA',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    quote: "We rolled out robotics across six sites with the staff we already had. The training scaled — that's the part no vendor could ever offer us.",
    fullStory: `Running programs across multiple sites means every new offering has to work without me standing in the room. Outside vendors could never scale past one or two locations, and quality varied wildly.

    With STA we trained 14 site staff on Robotics I in a single cohort — mixed live sessions and self-paced modules that fit around program hours. Every site got the same curriculum, the same challenge mats, the same shopping list.

    The unexpected win: staff retention. Our group leaders now have a real, resume-worthy skill, and two of them have taken over as our internal robotics leads. People stay when they're growing.`,
    metrics: [
      { label: 'Sites Launched', value: '6' },
      { label: 'Staff Trained', value: '14' },
      { label: 'Vendor Cost Saved', value: '$32k/yr' }
    ]
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Enrichment Coordinator, K–8 School',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    quote: "The esports launch training paid for itself before the first practice. Six Switch consoles instead of a PC lab — and a 40-student waitlist.",
    fullStory: `Parents had been asking about esports for two years, but every quote we got started with a $25,000 gaming PC lab. It was dead on arrival with our budget.

    STA's Launch Your Esports Program training showed us the budget path: six Nintendo Switch consoles, age-appropriate game selection, and a real practice structure with sportsmanship and screen-time policies parents actually appreciated.

    We launched with Rocket League and Smash for our middle schoolers. Within a month we had a waitlist, and our first in-house tournament packed the gym. The screen-time policy doc alone won over every skeptical parent.`,
    metrics: [
      { label: 'Sites Launched', value: '1' },
      { label: 'Staff Trained', value: '4' },
      { label: 'Vendor Cost Saved', value: '$22.5k' }
    ]
  }
];
