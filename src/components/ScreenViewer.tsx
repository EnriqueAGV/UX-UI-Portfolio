"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Decision, Screen } from "@/content/projects";
import { Device } from "./Device";

// Walk through every screen of a project. Decision cards below jump to the screen they're about.
export function ScreenViewer({
  title,
  frame,
  url,
  screens,
  decisions,
}: {
  title: string;
  frame: "phone" | "browser";
  url?: string;
  screens: Screen[];
  decisions: Decision[];
}) {
  const [idx, setIdx] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const filmRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const screen = screens[idx];

  const go = (i: number) => setIdx((i + screens.length) % screens.length);

  // Keep the active thumbnail in view.
  useEffect(() => {
    const film = filmRef.current;
    const thumb = film?.children[idx] as HTMLElement | undefined;
    if (film && thumb) {
      film.scrollTo({ left: thumb.offsetLeft - film.clientWidth / 2 + thumb.clientWidth / 2, behavior: "smooth" });
    }
  }, [idx]);

  const jump = (i: number) => {
    go(i);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    stageRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
  };

  return (
    <>
      <section className="viewer" aria-label={`${title} screens`}>
        <div
          ref={stageRef}
          className={`stage${frame === "browser" ? " wide" : ""}`}
          tabIndex={0}
          aria-label={`${title} screens. Use the left and right arrow keys to move between screens.`}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") (go(idx + 1), e.preventDefault());
            if (e.key === "ArrowLeft") (go(idx - 1), e.preventDefault());
          }}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 45) go(idx + (dx < 0 ? 1 : -1));
            touchX.current = null;
          }}
        >
          <div className="device">
            <Device
              key={screen.src}
              frame={frame}
              url={url}
              src={screen.src}
              alt={`${screen.n}: ${screen.t}`}
              sizes={frame === "phone" ? "340px" : "(max-width: 900px) 100vw, 900px"}
              priority={idx === 0}
            />
          </div>
          <div className="viewer-info" aria-live="polite">
            <p className="n">{screen.n}</p>
            <h3>{screen.t}</h3>
            <p>{screen.d}</p>
            <div className="viewer-arrows">
              <button type="button" className="screen-nav" onClick={() => go(idx - 1)} aria-label="Previous screen">
                <span aria-hidden="true">←</span>
              </button>
              <span className="count">
                {idx + 1} / {screens.length}
              </span>
              <button type="button" className="screen-nav" onClick={() => go(idx + 1)} aria-label="Next screen">
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
        <div className={`film${frame === "browser" ? " wide" : ""}`} ref={filmRef} aria-label="All screens">
          {screens.map((s, i) => (
            <button
              type="button"
              key={s.src}
              className="thumb"
              aria-label={`${s.n}: ${s.t}`}
              aria-current={i === idx ? "true" : undefined}
              onClick={() => go(i)}
            >
              <Image src={s.src} alt="" width={frame === "phone" ? 52 : 112} height={frame === "phone" ? 112 : 68} sizes="112px" />
            </button>
          ))}
        </div>
      </section>

      <section className="cs-block" aria-labelledby="decisions-title">
        <div className="sec-h">
          <h2 id="decisions-title">Design decisions</h2>
          <span className="note">Each card opens the screen it's about.</span>
        </div>
        <div className="dgrid">
          {decisions.map((d, i) => (
            <button type="button" className="dcard" key={d.t} onClick={() => jump(d.screen)}>
              <span className="n">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <em>{screens[d.screen].n.split("· ")[1]} ↗</em>
              </span>
              <h3>{d.t}</h3>
              <p>{d.d}</p>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
