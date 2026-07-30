# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

STA (AI for Educators) is a React-based single-page application that provides AI-powered tools for educators. The primary feature is an AI lesson plan generator powered by Google's Gemini API. The app is built as a marketing/landing page with an interactive toolkit demo.

## Development Commands

### Setup
```bash
npm install
```

Set the `GEMINI_API_KEY` environment variable in `.env.local`:
```
GEMINI_API_KEY=your_api_key_here
```

### Running the App
```bash
npm run dev          # Start development server on port 3000
npm run build        # Build for production
npm run preview      # Preview production build
```

## Architecture

### View State Management
The app uses a simple enum-based view state system (no router). The main App component manages navigation between four views:
- `LANDING` - Marketing homepage with hero, curriculum, case studies, pricing
- `TOOLKIT` - Interactive demo of the AI lesson plan generator
- `COURSE_DETAILS` - Course information page
- `SCHEDULE` - Cohort scheduling page

View state is managed via React `useState` and passed down as props. To add a new view, update the `ViewState` enum in `types.ts` and add the conditional rendering in `App.tsx`.

### Component Structure
- **App.tsx** - Root component, manages view state
- **components/** - All UI components organized by feature:
  - `Landing.tsx` - Main landing page with multiple sections
  - `ToolkitPage.tsx` / `ToolkitDemo.tsx` - AI lesson plan generator
  - `CourseDetails.tsx` / `SchedulePage.tsx` - Course info pages
  - `CaseStudyModal.tsx` - Modal for success stories
  - `CohortTicket.tsx` - Pricing ticket component
  - `Navbar.tsx` / `Footer.tsx` - Layout components

### Services Layer
`services/geminiService.ts` is the only service file and handles all AI generation:
- **generateLessonPlan()** - Uses Gemini 2.5 Flash with structured JSON output (schema validation)
- Other functions (generateQuiz, generateRubric, etc.) are currently **mocked** and return placeholder data with simulated delays

### Type Definitions
All TypeScript interfaces are centralized in `types.ts`:
- `ViewState` - Navigation enum
- `LessonPlan` - Structured lesson plan schema matching Gemini response
- `CourseDate`, `CaseStudy` - Data models for marketing content

### Styling System
Uses Tailwind CSS (loaded via CDN in `index.html`) with custom STA color palette:
- **sta-primary** (#4f46e5) - Indigo for CTAs
- **sta-secondary** (#db2777) - Pink accents
- **sta-accent** (#fbbf24) - Amber/yellow highlights
- **sta-mint** (#34d399) - Success/positive
- **sta-dark** (#1e293b) - Text/backgrounds
- Custom box shadows: `shadow-hard`, `shadow-hard-sm`, `shadow-hard-lg` for bold, flat design aesthetic

Custom background patterns defined in `index.html`: `.bg-dot-pattern` and `.bg-paper-texture`

### Environment Variables
The Vite config (`vite.config.ts`) loads environment variables and exposes them:
- `GEMINI_API_KEY` from `.env.local` becomes `process.env.API_KEY` in the app
- This is the only required environment variable

## Important Implementation Notes

### Gemini API Integration
- Uses `@google/genai` package (v1.30.0)
- Model: `gemini-2.5-flash`
- Output format: Structured JSON with schema validation using `responseMimeType` and `responseSchema`
- The schema in `generateLessonPlan()` must match the `LessonPlan` TypeScript interface

When adding new AI generation features:
1. Define the TypeScript interface in `types.ts`
2. Create the corresponding schema object using `Type` from `@google/genai`
3. Add the function to `geminiService.ts` following the pattern of `generateLessonPlan()`

### Component Patterns
- All components use functional React with hooks
- Components receive `setView` prop to enable navigation
- Heavy use of Tailwind utility classes for styling
- Interactive elements use hard shadow effects that translate on hover/active states

### Data Flow
- Static data (case studies, curriculum info) is defined as constants within components
- Dynamic data (AI-generated content) flows from geminiService → component state → rendered output
- No global state management or context providers - all state is local to components

## Tech Stack Summary
- **React 19.2.0** - UI library
- **TypeScript 5.8.2** - Type safety
- **Vite 6.2.0** - Build tool and dev server
- **Tailwind CSS** (CDN) - Utility-first styling
- **Google Gemini API** - AI text generation
- **Lucide React** - Icon library
