import React from 'react';

/** Label/value row for the "At a Glance" sidebar cards on detail pages. */
export const GlanceRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <li className="flex justify-between gap-4">
        <span className="text-slate-400 font-bold shrink-0">{label}</span>
        <span className="text-right">{value}</span>
    </li>
);
