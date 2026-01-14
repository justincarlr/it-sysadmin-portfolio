import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="badge mono"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 10px",
        borderRadius: 999,
      }}
    >
      {children}
    </span>
  );
}

export default function NavBar() {
  return (
    <nav style={{ marginBottom: 22 }}>
      {/* Fake terminal header */}
      <div
        className="mono"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
          marginBottom: 12,
          opacity: 0.9,
        }}
      >
        <div>
          <span style={{ color: "var(--accent)" }}>justin</span>
          <span style={{ opacity: 0.75 }}>@</span>
          <span style={{ color: "var(--accent)" }}>infra</span>
          <span style={{ opacity: 0.75 }}>:</span>
          <span style={{ opacity: 0.9 }}>~</span>
          <span style={{ color: "var(--accent)" }}>$</span>{" "}
          <span style={{ opacity: 0.8 }}>portfolio</span>
          <span className="terminal-cursor">▮</span>

        </div>

        <div
            className="mono"
            style={{
            marginBottom: 14,
            color: "var(--muted)",
            fontSize: 13,
            lineHeight: 1.6,
        }}
>
        <div>
            <span style={{ color: "var(--accent)" }}>whoami</span> →{" "}
            <span style={{ opacity: 0.7 }}>→</span>{" "}
            <span style={{ opacity: 0.9 }}>System Administrator (Remote)</span>
        </div>
            <div style={{ opacity: 0.85 }}>
            focus → virtualization • migrations • security • monitoring • documentation
        </div>
</div>


        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <Badge>GMT+8 • PH</Badge>
          <Badge>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
              }}
            />
            available remote
          </Badge>
          <ThemeToggle />
        </div>
      </div>

      {/* Navigation links + resume */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }} className="mono">
          <Link href="/">home</Link>
          <Link href="/experience">experience</Link>
          <Link href="/projects">projects</Link>
          <Link href="/security">security</Link>
          <Link href="/skills">skills</Link>
          <Link href="/contact">contact</Link>
        </div>

        <a
          href="/Justin-Carl-Reyes-Resume.pdf"
          download
          className="badge mono"
          style={{ fontWeight: 700 }}
        >
          download resume
        </a>
      </div>
    </nav>
  );
}
