import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Landing } from './components/Landing';
import { ToolkitPage } from './components/ToolkitPage';
import { CourseDetails } from './components/CourseDetails';
import { SchedulePage } from './components/SchedulePage';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setView] = useState<ViewState>(ViewState.LANDING);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900">
      <Navbar currentView={currentView} setView={setView} />

      <main className="flex-grow">
        {currentView === ViewState.LANDING ? (
          <Landing setView={setView} />
        ) : currentView === ViewState.TOOLKIT ? (
          <ToolkitPage />
        ) : currentView === ViewState.COURSE_DETAILS ? (
          <CourseDetails setView={setView} />
        ) : (
          <SchedulePage setView={setView} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
