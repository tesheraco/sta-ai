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
            <Route path="/courses/:id" element={<CourseDetail />} />
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
