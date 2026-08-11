import { Cpu, FlaskConical, Gamepad2, LucideIcon } from 'lucide-react';
import { ProgramPillar } from '../types';

export interface PillarVisual {
    icon: LucideIcon;
    /** Solid fill, for header bands. */
    color: string;
    /** Fill + readable text, for badges and chips. */
    badge: string;
    /** Translucent fill, for highlight chips on white. */
    tint: string;
    /** Text colour readable on white — amber-400 fails contrast, so Esports uses amber-600. */
    textColor: string;
}

/**
 * Single source of truth for pillar colour and iconography. Previously duplicated
 * across Landing, ProgramsPage, and ProgramDetail.
 */
export const PILLAR_VISUALS: Record<ProgramPillar, PillarVisual> = {
    [ProgramPillar.STEM]: {
        icon: FlaskConical,
        color: 'bg-sta-primary',
        badge: 'bg-sta-primary text-white',
        tint: 'bg-sta-primary/10',
        textColor: 'text-sta-primary',
    },
    [ProgramPillar.AI]: {
        icon: Cpu,
        color: 'bg-sta-secondary',
        badge: 'bg-sta-secondary text-white',
        tint: 'bg-sta-secondary/10',
        textColor: 'text-sta-secondary',
    },
    [ProgramPillar.ESPORTS]: {
        icon: Gamepad2,
        color: 'bg-sta-accent',
        badge: 'bg-sta-accent text-black',
        tint: 'bg-sta-accent/20',
        textColor: 'text-amber-600',
    },
};
