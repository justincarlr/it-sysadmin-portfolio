import NavBar from "../../components/NavBar";
import { projects } from "../../data/projects";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  const { incident } = project;

  return (
    <main className="container">
      <NavBar />

      <section className="card" style={{ padding: 22 }}>
        <h1 style={{ marginTop: 0 }}>{project.title}</h1>
        <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{project.summary}</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
          {project.tags.map((t) => (
            <span key={t} className="badge">
              {t}
            </span>
          ))}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "18px 0" }} />

        <h2 className="mono" style={{ marginTop: 0 }}>
          <span style={{ color: "var(--accent)" }}>$</span> incident_report
        </h2>

        <div style={{ display: "grid", gap: 14 }}>
          <div className="card" style={{ padding: 16, boxShadow: "none" }}>
            <h3 className="mono" style={{ marginTop: 0 }}>Situation</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{incident.situation}</p>
          </div>

          <div className="card" style={{ padding: 16, boxShadow: "none" }}>
            <h3 className="mono" style={{ marginTop: 0 }}>Impact</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{incident.impact}</p>
          </div>

          <div className="card" style={{ padding: 16, boxShadow: "none" }}>
            <h3 className="mono" style={{ marginTop: 0 }}>Actions Taken</h3>
            <ul style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 0 }}>
              {incident.actions.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>

          <div className="card" style={{ padding: 16, boxShadow: "none" }}>
            <h3 className="mono" style={{ marginTop: 0 }}>Tools / Stack</h3>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {incident.tools.map((t) => (
                <span key={t} className="badge">{t}</span>
              ))}
            </div>
          </div>

          <div className="card" style={{ padding: 16, boxShadow: "none" }}>
            <h3 className="mono" style={{ marginTop: 0 }}>Result</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: 0 }}>
              {incident.result}
            </p>
          </div>

          {incident.notes?.length ? (
            <div className="card" style={{ padding: 16, boxShadow: "none" }}>
              <h3 className="mono" style={{ marginTop: 0 }}>Notes</h3>
              <ul style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 0 }}>
                {incident.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
