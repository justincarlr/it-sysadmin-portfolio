import NavBar from "../components/NavBar";

export default function Skills() {
  return (
    <main className="container">
      <NavBar />

      <section className="card" style={{ padding: 22 }}>
        <h2 className="mono" style={{ marginTop: 0 }}>
          <span style={{ color: "var(--accent)" }}>$</span> skills
        </h2>

        <ul style={{ lineHeight: 1.9, color: "var(--muted)", marginBottom: 0 }}>
          <li><b style={{ color: "var(--text)" }}>Systems:</b> Windows Server, Linux (Ubuntu/CentOS), macOS</li>
          <li><b style={{ color: "var(--text)" }}>Virtualization:</b> VMware ESXi, Proxmox</li>
          <li><b style={{ color: "var(--text)" }}>Networking:</b> TCP/IP, DNS, VPN, Mikrotik Routers/Switches</li>
          <li><b style={{ color: "var(--text)" }}>Security:</b> Firewall rules, LDAP, Passbolt, Cloudflare</li>
          <li><b style={{ color: "var(--text)" }}>Monitoring:</b> Nagios</li>
          <li><b style={{ color: "var(--text)" }}>Automation:</b> Bash scripting</li>
          <li><b style={{ color: "var(--text)" }}>Docs/Tools:</b> BookStack, ERPNext, Redmine, AnyDesk, MobaXterm</li>
        </ul>
      </section>
    </main>
  );
}
