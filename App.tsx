import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Landing } from './components/Landing';
import { ToolkitPage } from './components/ToolkitPage';
import { SchedulePage } from './components/SchedulePage';
import { ProgramsPage } from './components/ProgramsPage';
import { ProgramDetail } from './components/ProgramDetail';
import { About } from './components/About';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { PricingPage } from './components/PricingPage';
import { PILLAR_SLUGS } from './data/programs';
import { ProgramPillar } from './types';

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
            <Route path="/programs" element={<ProgramsPage />} />
            {/* Pillar-filtered library views. Static segments outrank /programs/:id below. */}
            <Route path={`/programs/${PILLAR_SLUGS[ProgramPillar.STEM]}`} element={<ProgramsPage pillar={ProgramPillar.STEM} />} />
            <Route path={`/programs/${PILLAR_SLUGS[ProgramPillar.AI]}`} element={<ProgramsPage pillar={ProgramPillar.AI} />} />
            <Route path={`/programs/${PILLAR_SLUGS[ProgramPillar.ESPORTS]}`} element={<ProgramsPage pillar={ProgramPillar.ESPORTS} />} />
            <Route path="/programs/:id" element={<ProgramDetail />} />
            <Route path="/pricing" element={<PricingPage />} />
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
