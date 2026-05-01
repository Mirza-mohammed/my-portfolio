import React from "react";

const SectionHeading = ({ eyebrow, title, description, align = "left" }) => {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300 mb-3">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-50 leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-zinc-400 leading-relaxed">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
