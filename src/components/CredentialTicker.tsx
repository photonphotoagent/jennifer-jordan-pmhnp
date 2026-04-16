"use client";

const items = [
  "Georgetown University Alumna",
  "PMHNP-BC Board Certified",
  "17+ Years of Clinical Excellence",
  "Trauma-Informed Care",
  "ADHD & Mood Disorder Specialist",
  "Pediatric & Adult Psychiatry",
  "Northern Virginia",
  "Evidence-Based Medicine",
  "Integrative Wellness",
];

const doubled = [...items, ...items];

export default function CredentialTicker() {
  return (
    <div
      className="overflow-hidden py-4 relative"
      style={{
        background: "var(--jj-charcoal)",
        borderTop: "1px solid rgba(249,248,246,0.06)",
        borderBottom: "1px solid rgba(249,248,246,0.06)",
      }}
    >
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center flex-shrink-0"
            style={{ gap: "2.5rem" }}
          >
            <span
              className="text-[0.62rem] tracking-[0.24em] uppercase whitespace-nowrap"
              style={{
                color: i % items.length === 2
                  ? "var(--jj-gold)"
                  : "rgba(249,248,246,0.4)",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
              }}
            >
              {item}
            </span>
            <span
              style={{
                color: "var(--jj-sage)",
                fontSize: "0.35rem",
                opacity: 0.6,
              }}
            >
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
