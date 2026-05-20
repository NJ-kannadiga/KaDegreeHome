// components/ui/ProgramCard.tsx
import React from "react";

type ProgramCardProps = {
  id: string;
  title: string;
  degree: string; // "BCA", "MCA", "BSc", "MSc", "CSE", "Research", "Non-IT", etc.
  year: string;   // "1st", "2nd", "Final", "Any"
  short: string;
  seats: { total: number; filled: number };
  fee?: string;
  badge?: string; // "Skill-Up" | "Placement" | "AI" | "Transition"
  filled?: boolean;
  onViewDetails?: (id: string) => void;
  onEnroll?: (id: string) => void;
};

export function ProgramCard({
  id,
  title,
  degree,
  year,
  short,
  seats,
  fee,
  badge,
  filled = false,
  onViewDetails,
  onEnroll,
}: ProgramCardProps) {
  const remaining = Math.max(0, seats.total - seats.filled);
  const pct = Math.round((seats.filled / seats.total) * 100);

  return (
    <div className="rounded-lg border bg-white shadow-sm p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                {degree} • {year}
              </span>
              {badge && (
                <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                  {badge}
                </span>
              )}
              {filled && (
                <span className="text-xs px-2 py-1 rounded-full bg-red-50 text-red-700">
                  Filled
                </span>
              )}
            </div>

            <h3 className="mt-3 text-lg font-semibold font-serif leading-tight">{title}</h3>
          </div>

          <div className="text-right text-sm">
            {fee ? <div className="font-medium">{fee}</div> : null}
            <div className="mt-2 text-muted-foreground">
              {seats.filled}/{seats.total} filled
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-foreground/80">{short}</p>

        {/* progress */}
        <div className="mt-4">
          <div className="h-2 w-full rounded bg-slate-100 overflow-hidden">
            <div
              className={`h-full ${remaining <= 1 && !filled ? "bg-red-500" : "bg-primary"}`}
              style={{ width: `${pct}%` }}
            />
          </div>
          {filled ? (
            <div className="mt-2 text-xs text-red-600 font-medium">Batch Filled</div>
          ) : remaining <= 1 ? (
            <div className="mt-2 text-xs text-red-600 font-medium">Only {remaining} seat left — hurry!</div>
          ) : (
            <div className="mt-2 text-xs text-muted-foreground">{remaining} seats left</div>
          )}
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => onViewDetails?.(id)}
          className="flex-1 rounded border px-3 py-2 text-sm font-medium hover:bg-muted/5"
        >
          View Course Details
        </button>

        <button
          onClick={() => onEnroll?.(id)}
          disabled={filled}
          className={`flex-1 rounded px-3 py-2 text-sm font-medium ${
            filled ? "bg-muted/20 text-muted-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90"
          }`}
        >
          Inquiry
        </button>
      </div>
    </div>
  );
}
