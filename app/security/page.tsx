import NavBar from "../components/NavBar";

export default function Security() {
  return (
    <main className="container">
      <NavBar />

      <section className="card" style={{ padding: 22 }}>
        <h2 className="mono" style={{ marginTop: 0 }}>
          <span style={{ color: "var(--accent)" }}>$</span> security_practices
        </h2>

        <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
          Security is part of my daily operations as a System Administrator—focused on access control,
          credential safety, system hardening, and safe change management.
        </p>

        <div style={{ display: "grid", gap: 14, marginTop: 14 }}>
          <div className="card" style={{ padding: 16, boxShadow: "none" }}>
            <h3 className="mono" style={{ marginTop: 0 }}>Access & Identity</h3>
            <ul style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 0 }}>
              <li>Centralized authentication via LDAP where applicable</li>
              <li>Least privilege habits and access documentation</li>
              <li>Change tracking for user access updates</li>
            </ul>
          </div>

          <div className="card" style={{ padding: 16, boxShadow: "none" }}>
            <h3 className="mono" style={{ marginTop: 0 }}>Credential Management</h3>
            <ul style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 0 }}>
              <li>Implemented Passbolt for secure credential storage</li>
              <li>Reduced credential sharing risk through centralized vault usage</li>
            </ul>
          </div>

          <div className="card" style={{ padding: 16, boxShadow: "none" }}>
            <h3 className="mono" style={{ marginTop: 0 }}>Hardening & Monitoring</h3>
            <ul style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 0 }}>
              <li>Security-first troubleshooting for Windows & Linux systems</li>
              <li>Log review and vulnerability-oriented checks during incidents</li>
              <li>Monitoring via Nagios and operational alert response</li>
            </ul>
          </div>

          <div className="card" style={{ padding: 16, boxShadow: "none" }}>
            <h3 className="mono" style={{ marginTop: 0 }}>DNS & Email Security</h3>
            <ul style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 0 }}>
              <li>Cloudflare DNS/CDN/DDoS configuration for protection and performance</li>
              <li>SPF/DKIM/MX validation for reliable email delivery</li>
            </ul>
          </div>

          <div className="card" style={{ padding: 16, boxShadow: "none" }}>
            <h3 className="mono" style={{ marginTop: 0 }}>Documentation & Change Control</h3>
            <ul style={{ color: "var(--muted)", lineHeight: 1.9, marginBottom: 0 }}>
              <li>Documentation-first approach using BookStack (SOPs, runbooks)</li>
              <li>Incident reporting and root-cause notes to prevent repeats</li>
              <li>Ticketing discipline with ERPNext/Redmine where applicable</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
