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
      }}
    >
      {children}
    </span>
  );
}

export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 16,
        marginBottom: 28,
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

        <a
          href="/Justin-Carl-Reyes-Resume.pdf"
          download
          className="badge"
          style={{ fontWeight: 600 }}
        >
          download resume
        </a>
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
    </nav>
  );
}
