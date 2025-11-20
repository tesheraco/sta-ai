import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Clock, Users, ChevronRight } from 'lucide-react';
import { Course, CourseCategory } from '../types';
import { COURSES } from '../data/courses';

export const CoursesPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const categories = ['All', ...Object.values(CourseCategory)];

    const filteredCourses = useMemo(() => {
        return COURSES.filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                course.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);



    return (
        <div className="min-h-screen bg-sta-surface">
            {/* Header */}
            <div className="bg-sta-dark text-white py-20 border-b-2 border-black">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        Train Your Staff <br />
                        <span className="text-sta-primary">In-House</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                        Stop overpaying for outside vendors. Our expert-led curriculum empowers your existing team to run world-class STEM programs.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-12 gap-8">

                    {/* Sidebar Filters */}
                    <div className="md:col-span-3 space-y-8">
                        <div className="bg-white p-6 rounded-xl border-2 border-black shadow-hard-sm">
                            <div className="mb-6">
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Search</label>
                                <div className="relative">
                                    <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                                    <input
                                        type="text"
                                        placeholder="Search courses..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 rounded border-2 border-slate-200 focus:border-sta-primary outline-none font-medium text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Category</label>
                                <div className="space-y-2">
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`w-full text-left px-3 py-2 rounded font-bold text-sm transition-all flex items-center justify-between ${selectedCategory === cat
                                                ? 'bg-sta-primary text-white border-2 border-black shadow-sm'
                                                : 'text-slate-600 hover:bg-slate-100'
                                                }`}
                                        >
                                            {cat}
                                            {selectedCategory === cat && <ChevronRight className="w-4 h-4" />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Trust Badge */}
                        <div className="bg-sta-mint p-6 rounded-xl border-2 border-black shadow-hard-sm text-center">
                            <h3 className="font-black text-lg mb-2">Need Custom Training?</h3>
                            <p className="text-sm font-medium mb-4">We can build a bespoke program for your district's specific hardware.</p>
                            <button className="w-full py-2 bg-white border-2 border-black rounded font-bold text-sm hover:bg-sta-dark hover:text-white transition-colors">
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* Course Grid */}
                    <div className="md:col-span-9">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-black text-sta-dark">
                                {filteredCourses.length} Result{filteredCourses.length !== 1 && 's'}
                            </h2>
                            <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                                <Filter className="w-4 h-4" /> Sort by: Recommended
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Featured AI Course - Pinned */}
                            {selectedCategory === 'All' && !searchQuery && (
                                <Link
                                    to="/courses/ai-educators"
                                    className="md:col-span-2 bg-sta-dark text-white rounded-xl border-2 border-black shadow-hard hover:-translate-y-1 hover:shadow-hard-lg transition-all cursor-pointer group overflow-hidden flex flex-col md:flex-row"
                                >
                                    <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                            alt="AI for Educators"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                                        />
                                        <div className="absolute top-4 right-4 bg-sta-primary text-white px-3 py-1 rounded-full border-2 border-black text-xs font-black uppercase tracking-wider shadow-sm">
                                            Flagship
                                        </div>
                                    </div>
                                    <div className="p-8 md:w-1/2 flex flex-col justify-center">
                                        <h3 className="text-3xl font-black mb-4 group-hover:text-sta-primary transition-colors">
                                            Intro to AI for Educators
                                        </h3>
                                        <p className="text-slate-300 font-medium mb-6">
                                            Our most popular course. Join 5,000+ educators learning to tame the AI beast.
                                        </p>
                                        <div className="flex items-center gap-4 text-sm font-bold text-slate-400">
                                            <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 5 Hours</div>
                                            <div className="flex items-center"><Users className="w-4 h-4 mr-2" /> All Staff</div>
                                        </div>
                                    </div>
                                </Link>
                            )}

                            {filteredCourses.filter(c => c.id !== 'ai-educators').map(course => (
                                <Link
                                    key={course.id}
                                    to={`/courses/${course.id}`}
                                    className="bg-white rounded-xl border-2 border-black shadow-hard hover:-translate-y-1 hover:shadow-hard-lg transition-all cursor-pointer group overflow-hidden flex flex-col h-full"
                                >
                                    <div className="h-48 overflow-hidden border-b-2 border-black relative">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full border-2 border-black text-xs font-black uppercase tracking-wider shadow-sm">
                                            {course.category.split(' ')[0]}
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-black text-sta-dark mb-2 group-hover:text-sta-primary transition-colors">
                                            {course.title}
                                        </h3>
                                        <p className="text-slate-600 font-medium mb-6 line-clamp-2 flex-grow">
                                            {course.description}
                                        </p>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center text-sm font-bold text-slate-500">
                                                <Clock className="w-4 h-4 mr-2" /> {course.duration}
                                            </div>
                                            <div className="flex items-center text-sm font-bold text-slate-500">
                                                <Users className="w-4 h-4 mr-2" /> {course.gradeLevel}
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t-2 border-slate-100">
                                            {course.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="px-2 py-1 bg-slate-100 rounded text-xs font-bold text-slate-600 border border-slate-200">
                                                    {tag}
                                                </span>
                                            ))}
                                            {course.tags.length > 2 && (
                                                <span className="px-2 py-1 bg-slate-100 rounded text-xs font-bold text-slate-600 border border-slate-200">
                                                    +{course.tags.length - 2} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
