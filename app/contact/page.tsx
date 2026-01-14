import NavBar from "../components/NavBar";

export default function Contact() {
  return (
    <main className="container">
      <NavBar />

      <section className="card" style={{ padding: 22 }}>
        <h2 className="mono" style={{ marginTop: 0 }}>
          <span style={{ color: "var(--accent)" }}>$</span> contact
        </h2>

        <div style={{ color: "var(--muted)", lineHeight: 1.9 }}>
          <p style={{ marginTop: 0 }}>
            Email: <a href="mailto:justincarlr@gmail.com">justincarlr@gmail.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="https://linkedin.com/in/jstncrlreyes" target="_blank" rel="noreferrer">
              linkedin.com/in/jstncrlreyes
            </a>
          </p>
          <p>
            WhatsApp: <a href="https://wa.me/639524704720" target="_blank" rel="noreferrer">+63 952 470 4720</a>
          </p>
        </div>

        <p className="mono" style={{ marginTop: 16, opacity: 0.9 }}>
          Available for Remote System Administrator roles • GMT+8
        </p>
      </section>
    </main>
  );
}
