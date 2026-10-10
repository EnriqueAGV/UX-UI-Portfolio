// "Design" vs "AI-assisted" notes: what Enrique did, and where AI helped.
export function Attribution({ design, ai }: { design: string; ai?: string }) {
  return (
    <div className={`attrib${ai ? "" : " single"}`}>
      <div className="att human">
        <span className="chiplab">My design work</span>
        <p>{design}</p>
      </div>
      {ai && (
        <div className="att ai">
          <span className="chiplab">AI-assisted</span>
          <p>{ai}</p>
        </div>
      )}
    </div>
  );
}
