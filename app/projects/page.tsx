import NavBar from "../components/NavBar";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="container">
      <NavBar />

      <section className="card" style={{ padding: 22 }}>
        <h2 className="mono" style={{ marginTop: 0 }}>
          <span style={{ color: "var(--accent)" }}>$</span> projects
        </h2>

        <div className="projects-list" style={{ display: "grid", gap: 14, marginTop: 14 }}>
          {projects.map((p) => (
            <article key={p.slug} className="card" style={{ padding: 16 }}>
              <h3 style={{ marginTop: 0, marginBottom: 8, color: "var(--text)" }}>
                {p.title}
              </h3>

              <p style={{ marginTop: 0, color: "var(--muted)", lineHeight: 1.6 }}>
                {p.summary}
              </p>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {p.tags.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
