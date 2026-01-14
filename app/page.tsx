import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="container">
      <NavBar />

      <section className="card" style={{ padding: 22 }}>
        <h1 style={{ fontSize: 44, margin: 0 }}>Justin Carl C. Reyes</h1>
        <p style={{ fontSize: 18, marginTop: 10, marginBottom: 10, opacity: 0.9 }}>
          System Administrator (Remote)
        </p>

        <p style={{ color: "var(--muted)", lineHeight: 1.7, margin: 0 }}>
          I am a System Administrator with hands-on experience managing secure,
          high-availability IT environments across on-prem and cloud infrastructure.
          I specialize in virtualization, server migrations, networking, and security-focused
          system operations. I thrive in remote environments with documentation-first habits.
        </p>
      </section>

      <section className="card" style={{ padding: 18, marginTop: 16 }}>
        <h2 className="mono" style={{ marginTop: 0 }}>
          <span style={{ color: "var(--accent)" }}>$</span> remote_readiness
        </h2>
        <ul style={{ lineHeight: 1.9, color: "var(--muted)", marginBottom: 0 }}>
          <li>Documentation-first workflow (BookStack runbooks, SOPs, incident logs)</li>
          <li>Comfortable working independently in distributed teams</li>
          <li>Async communication via Slack, Teams, and ticketing systems</li>
          <li>Remote troubleshooting across systems, networking, and user access</li>
        </ul>
      </section>
    </main>
  );
}
