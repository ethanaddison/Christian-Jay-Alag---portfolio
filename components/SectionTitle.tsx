import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>//</span> {eyebrow}
      </p>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}
