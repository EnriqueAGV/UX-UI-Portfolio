"use client";

import Image from "next/image";
import { useState } from "react";
import type { Shot as ShotType } from "@/content/projects";

// A screenshot in a neutral frame. If the file isn't in /public yet, shows the path
// it expects instead of a broken image, so missing assets are obvious in preview.
export function Shot({
  shot,
  className = "",
  sizes = "(max-width: 820px) 100vw, 50vw",
  priority = false,
}: {
  shot: ShotType;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [missing, setMissing] = useState(false);
  return (
    <div className={`shot-frame ${className}`}>
      {missing ? (
        <div className="shot-missing" role="img" aria-label={shot.alt}>
          Image coming soon
          <code>public{shot.src}</code>
        </div>
      ) : (
        <Image
          src={encodeURI(shot.src)}
          alt={shot.alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectFit: "contain" }}
          onError={() => setMissing(true)}
        />
      )}
    </div>
  );
}
