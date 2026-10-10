import Image from "next/image";

// A phone or browser frame around one screenshot.
export function Device({
  frame,
  src,
  alt,
  url,
  sizes,
  priority = false,
}: {
  frame: "phone" | "browser";
  src: string;
  alt: string;
  url?: string;
  sizes: string;
  priority?: boolean;
}) {
  if (frame === "phone") {
    return (
      <div className="phone">
        <div className="notch" aria-hidden="true" />
        <div className="scr">
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
        </div>
      </div>
    );
  }
  return (
    <div className="browser">
      <div className="bar" aria-hidden="true">
        <span className="d" />
        <span className="d" />
        <span className="d" />
        {url && <span className="url">{url}</span>}
      </div>
      <div className="shot">
        <Image src={src} alt={alt} width={1600} height={860} sizes={sizes} priority={priority} />
      </div>
    </div>
  );
}
