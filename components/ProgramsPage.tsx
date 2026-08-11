import React, { useMemo } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Search, Clock3, Monitor, Package, ShieldCheck, GraduationCap } from 'lucide-react';
import { ProgramPillar, GradeBand, GRADE_BANDS } from '../types';
import { PROGRAMS, PILLAR_ORDER, PILLAR_SLUGS } from '../data/programs';
import { PILLAR_VISUALS } from '../data/pillars';

/** Grade bands contain an en dash, which URL-encodes badly — swap it for a plain hyphen. */
const bandToSlug = (band: GradeBand) => band.replace('–', '-');
const slugToBand = (slug: string) => GRADE_BANDS.find(b => bandToSlug(b) === slug);

interface ProgramsPageProps {
    /** Set by the pillar-filtered routes (/programs/ai etc.); absent on plain /programs. */
    pillar?: ProgramPillar;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ pillar: routePillar }) => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    // The URL is the source of truth for every filter.
    const selectedPillar: ProgramPillar | 'All' = routePillar ?? 'All';
    const searchQuery = searchParams.get('q') ?? '';
    const screenFreeOnly = searchParams.get('screenFree') === '1';
    const selectedBands = (searchParams.get('grades')?.split(',') ?? [])
        .map(slugToBand)
        .filter((b): b is GradeBand => Boolean(b));

    /** Merge a patch into the current query string; a null value drops the param. */
    const updateParams = (patch: Record<string, string | null>) => {
        const next = new URLSearchParams(searchParams);
        Object.entries(patch).forEach(([key, value]) => {
            if (value) next.set(key, value);
            else next.delete(key);
        });
        // Filters are view state, not navigation steps — keep them out of the history stack.
        setSearchParams(next, { replace: true });
    };

    const goToPillar = (next: ProgramPillar | 'All') => {
        const path = next === 'All' ? '/programs' : `/programs/${PILLAR_SLUGS[next]}`;
        const query = searchParams.toString();
        navigate(query ? `${path}?${query}` : path, { replace: true });
    };

    const toggleBand = (band: GradeBand) => {
        const next = selectedBands.includes(band)
            ? selectedBands.filter(b => b !== band)
            : [...selectedBands, band];
        updateParams({ grades: next.length ? next.map(bandToSlug).join(',') : null });
    };

    const filteredPrograms = useMemo(() => {
        const q = searchQuery.toLowerCase();
        return PROGRAMS.filter(program => {
            const matchesSearch =
                program.title.toLowerCase().includes(q) ||
                program.description.toLowerCase().includes(q) ||
                program.materials.toLowerCase().includes(q) ||
                program.tags.some(t => t.toLowerCase().includes(q));
            const matchesPillar = selectedPillar === 'All' || program.pillar === selectedPillar;
            const matchesBands = selectedBands.length === 0 || selectedBands.some(b => program.gradeBands.includes(b));
            const matchesScreenFree = !screenFreeOnly || program.screenFree;
            return matchesSearch && matchesPillar && matchesBands && matchesScreenFree;
        });
    }, [searchQuery, selectedPillar, selectedBands, screenFreeOnly]);

    const pillarCount = (pillar: ProgramPillar) => PROGRAMS.filter(c => c.pillar === pillar).length;

    return (
        <div className="min-h-screen bg-sta-surface">
            {/* Header */}
            <div className="bg-sta-dark text-white py-16 border-b-2 border-black">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        The Program Library
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium">
                        Turnkey STEM, AI, and Esports programs your existing staff can run — complete with training, curriculum, and a shopping list. Built for after-school sites, community organizations, and schools.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-8">
                        {PILLAR_ORDER.map(pillar => (
                            <button
                                key={pillar}
                                onClick={() => goToPillar(selectedPillar === pillar ? 'All' : pillar)}
                                className={`px-5 py-2 rounded-full border-2 border-black font-bold text-sm transition-all ${selectedPillar === pillar
                                    ? `${PILLAR_VISUALS[pillar].badge} shadow-hard-sm`
                                    : 'bg-white text-sta-dark hover:bg-slate-100'
                                    }`}
                            >
                                {pillar} · {pillarCount(pillar)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-12 gap-8">

                    {/* Sidebar Filters */}
                    <div className="md:col-span-3 space-y-6">
                        <div className="bg-white p-6 rounded-xl border-2 border-black shadow-hard-sm">
                            <div className="mb-6">
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Search</label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Robotics, Minecraft, VR..."
                                        value={searchQuery}
                                        onChange={(e) => updateParams({ q: e.target.value || null })}
                                        className="w-full pl-10 pr-4 py-2 rounded border-2 border-slate-200 focus:border-sta-primary outline-none font-medium text-sm"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Program Area</label>
                                <div className="space-y-2">
                                    {(['All', ...PILLAR_ORDER] as const).map(pillar => (
                                        <button
                                            key={pillar}
                                            onClick={() => goToPillar(pillar as ProgramPillar | 'All')}
                                            className={`w-full text-left px-3 py-2 rounded font-bold text-sm transition-all flex items-center justify-between ${selectedPillar === pillar
                                                ? 'bg-sta-cta text-white border-2 border-black'
                                                : 'text-slate-600 hover:bg-slate-100 border-2 border-transparent'
                                                }`}
                                        >
                                            {pillar === 'All' ? 'All Programs' : pillar}
                                            <span className={`text-xs ${selectedPillar === pillar ? 'text-slate-300' : 'text-slate-400'}`}>
                                                {pillar === 'All' ? PROGRAMS.length : pillarCount(pillar as ProgramPillar)}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Grade Level</label>
                                <div className="flex flex-wrap gap-2">
                                    {GRADE_BANDS.map(band => (
                                        <button
                                            key={band}
                                            onClick={() => toggleBand(band)}
                                            className={`px-3 py-1.5 rounded-full border-2 font-bold text-xs transition-all ${selectedBands.includes(band)
                                                ? 'bg-sta-primary text-white border-black shadow-sm'
                                                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                                                }`}
                                        >
                                            {band}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="flex items-center gap-3 cursor-pointer select-none">
                                    <input
                                        type="checkbox"
                                        checked={screenFreeOnly}
                                        onChange={(e) => updateParams({ screenFree: e.target.checked ? '1' : null })}
                                        className="w-4 h-4 accent-sta-primary"
                                    />
                                    <span className="font-bold text-sm text-slate-700">Screen-free only</span>
                                </label>
                                <p className="text-xs text-slate-400 font-medium mt-1 ml-7">No student devices required</p>
                            </div>
                        </div>

                        {/* Custom Training */}
                        <div className="bg-sta-mint p-6 rounded-xl border-2 border-black shadow-hard-sm text-center">
                            <h3 className="font-black text-lg mb-2">Not sure where to start?</h3>
                            <p className="text-sm font-medium mb-4">We'll match programs to your space, budget, and staff in a 20-minute call.</p>
                            <a
                                href="https://calendly.com/sta-ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-2 bg-white border-2 border-black rounded font-bold text-sm hover:bg-sta-cta hover:text-white transition-colors"
                            >
                                Book a Consult
                            </a>
                        </div>
                    </div>

                    {/* Program Grid */}
                    <div className="md:col-span-9">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-black text-sta-dark">
                                {filteredPrograms.length} Program{filteredPrograms.length !== 1 && 's'}
                            </h2>
                            {(selectedPillar !== 'All' || selectedBands.length > 0 || screenFreeOnly || searchQuery) && (
                                <button
                                    onClick={() => navigate('/programs', { replace: true })}
                                    className="text-sm font-bold text-sta-primary hover:underline"
                                >
                                    Clear filters
                                </button>
                            )}
                        </div>

                        {filteredPrograms.length === 0 && (
                            <div className="bg-white border-2 border-black rounded-xl p-12 text-center shadow-hard-sm">
                                <p className="text-xl font-black text-sta-dark mb-2">No programs match those filters.</p>
                                <p className="text-slate-500 font-medium">Try widening the grade range or clearing the search.</p>
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-6">
                            {filteredPrograms.map(program => (
                                <Link
                                    key={program.id}
                                    to={`/programs/${program.id}`}
                                    className="bg-white rounded-xl border-2 border-black shadow-hard hover:-translate-y-1 hover:shadow-hard-lg transition-all cursor-pointer group overflow-hidden flex flex-col h-full"
                                >
                                    <div className="h-44 overflow-hidden border-b-2 border-black relative">
                                        {program.image ? (
                                            <img
                                                src={program.image}
                                                alt={program.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            // No photo yet — fall back to the pillar band rather than a broken image.
                                            <div className={`w-full h-full bg-dot-pattern flex items-center justify-center ${PILLAR_VISUALS[program.pillar].color}`}>
                                                <div className="w-16 h-16 bg-white rounded-full border-2 border-black flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                                    {React.createElement(PILLAR_VISUALS[program.pillar].icon, {
                                                        className: 'w-8 h-8 text-black',
                                                        strokeWidth: 2.5,
                                                    })}
                                                </div>
                                            </div>
                                        )}
                                        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border-2 border-black text-xs font-black uppercase tracking-wider shadow-sm ${PILLAR_VISUALS[program.pillar].badge}`}>
                                            {program.pillar}
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-black text-sta-dark mb-2 group-hover:text-sta-primary transition-colors">
                                            {program.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm font-medium mb-5 line-clamp-3 flex-grow">
                                            {program.description}
                                        </p>

                                        <div className="space-y-2 mt-auto text-sm font-medium text-slate-500">
                                            <div className="flex items-start">
                                                <GraduationCap className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                                                <span className="line-clamp-1">{program.grades}</span>
                                            </div>
                                            <div className="flex items-start">
                                                <Monitor className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                                                <span className="line-clamp-1">{program.devices === 'None' ? 'No devices needed' : program.devices}</span>
                                            </div>
                                            <div className="flex items-start">
                                                <Package className="w-4 h-4 mr-2 mt-0.5 shrink-0" />
                                                <span className="line-clamp-1">{program.materials}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Responsible AI note — only relevant while browsing the AI pillar */}
                        {selectedPillar === ProgramPillar.AI && filteredPrograms.length > 0 && (
                            <div className="mt-10 bg-sta-dark text-white border-2 border-black rounded-xl p-8 shadow-hard-sm flex flex-col md:flex-row items-start md:items-center gap-6">
                                <div className="w-14 h-14 bg-sta-mint/15 rounded-full border-2 border-black flex items-center justify-center shrink-0">
                                    <ShieldCheck className="w-7 h-7 text-sta-mint" />
                                </div>
                                <div>
                                    <h3 className="font-black text-sm uppercase tracking-wider mb-2">Age-Safe AI</h3>
                                    <p className="text-sm font-medium text-slate-300">
                                        Most consumer AI tools require users to be 13+. Every AI program includes age-gating and supervision training so your staff knows exactly which tools each grade can use — and how.
                                    </p>
                                </div>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </div>
    );
};
