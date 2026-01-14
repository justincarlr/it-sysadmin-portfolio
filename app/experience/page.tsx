import NavBar from "../components/NavBar";

export default function Experience() {
  return (
    <main className="container">
      <NavBar />

      <section className="card" style={{ padding: 22 }}>
        <h2 className="mono" style={{ marginTop: 0 }}>
          <span style={{ color: "var(--accent)" }}>$</span> experience
        </h2>

        <h3 style={{ marginBottom: 6 }}>IT Administrator — Titus Global-Tech Inc.</h3>
        <p className="mono" style={{ marginTop: 0, color: "var(--muted)" }}>
          2024 – Present | Remote / Clark City, Philippines
        </p>
        <ul style={{ color: "var(--muted)", lineHeight: 1.9 }}>
          <li>Managed VMware ESXi and Proxmox virtualization platforms and production systems.</li>
          <li>Provided OS-level troubleshooting and escalation handling (Windows & Linux).</li>
          <li>Maintained system documentation and incident records in BookStack.</li>
          <li>Supported software deployments, updates, and security initiatives.</li>
          <li>Configured and maintained Mikrotik devices and basic firewall settings as needed.</li>
        </ul>

        <h3 style={{ marginBottom: 6, marginTop: 18 }}>
          Junior IT Systems Administrator — Z Getcare Systems Inc.
        </h3>
        <p className="mono" style={{ marginTop: 0, color: "var(--muted)" }}>
          2024 | Clark City, Philippines
        </p>
        <ul style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 0 }}>
          <li>Monitored live systems using Nagios and responded to alerts.</li>
          <li>Performed backups, storage checks, routine maintenance, and cleanups.</li>
          <li>Assisted DBAs with SQL operations, data dumps, and maintenance tasks.</li>
          <li>Created Bash scripts to automate admin tasks and improve efficiency.</li>
          <li>Managed user access and maintained access documentation.</li>
        </ul>
      </section>
    </main>
  );
}
