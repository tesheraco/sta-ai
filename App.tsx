import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Landing } from './components/Landing';
import { ToolkitPage } from './components/ToolkitPage';
import { SchedulePage } from './components/SchedulePage';
import { CoursesPage } from './components/CoursesPage';
import { CourseDetail } from './components/CourseDetail';
import { About } from './components/About';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { PILLAR_SLUGS } from './data/courses';
import { CoursePillar } from './types';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans text-slate-900">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/toolkit" element={<ToolkitPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            {/* Pillar-filtered library views. Static segments outrank /courses/:id below. */}
            <Route path={`/courses/${PILLAR_SLUGS[CoursePillar.STEM]}`} element={<CoursesPage pillar={CoursePillar.STEM} />} />
            <Route path={`/courses/${PILLAR_SLUGS[CoursePillar.AI]}`} element={<CoursesPage pillar={CoursePillar.AI} />} />
            <Route path={`/courses/${PILLAR_SLUGS[CoursePillar.ESPORTS]}`} element={<CoursesPage pillar={CoursePillar.ESPORTS} />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
