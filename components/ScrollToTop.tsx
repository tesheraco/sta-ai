import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/** /programs and its pillar-filtered variants are one page — switching between them is a filter, not navigation. */
const isProgramLibrary = (pathname: string) => /^\/programs(\/(stem|ai|esports))?$/.test(pathname);

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    const previous = previousPathname.current;
    previousPathname.current = pathname;

    // Don't yank the page to the top when the user just changed the pillar filter.
    if (isProgramLibrary(previous) && isProgramLibrary(pathname)) return;

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
