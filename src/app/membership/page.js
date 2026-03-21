// src/app/membership/page.js
// Mobile-first, Server Component (no "use client"), no styled-jsx, no extra logos.

export const metadata = {
  title: "Membership Access Released",
};

const SUPPORT_EMAIL = "candlepreneurcare@gmail.com";
const MEMBERS_AREA_URL = "https://www.xmembers.app/candlepreneur";

export default function MembershipPage() {
  return (
    <main style={styles.page}>
      {/* Top success bar */}
      <div role="status" aria-live="polite" style={styles.strip}>
        Your purchase was completed successfully!
      </div>

      <section style={styles.shell}>
        <div style={styles.card}>

          <h1 style={styles.title}>🎁&nbsp; Welcome! &nbsp;🎁</h1>

          <p style={styles.p}>Your access has been released!</p>

          <p style={styles.p}>
            The next step is to check the inbox of the email you used for your purchase.
          </p>

          <p style={styles.p}>
            You will receive an email with the subject:
            <br />
            <b>&quot;Purchase Approved&quot;</b>
          </p>

          <p style={styles.p}>
            Don&apos;t forget to check your spam, junk, or promotions folder, because
            some emails may end up there by mistake.
          </p>

          <p style={styles.p}>
            If you have any questions or access issues, email our support:
          </p>

          <p style={{ ...styles.p, marginTop: 4 }}>
            <a href={`mailto:${SUPPORT_EMAIL}`} style={styles.supportLink}>
              {SUPPORT_EMAIL}
            </a>
          </p>

          <p style={{ ...styles.p, marginTop: 10 }}>
            We&apos;ll reply as soon as possible and help you with anything you need.
          </p>

          <p style={{ ...styles.p, marginTop: 10 }}>
            See you inside the members area, let&apos;s get started!
          </p>

          {/* Dotted box + CTA button */}
          <div style={styles.dottedBox}>
            <p style={styles.dottedText}>
              If you want to access your members area directly, click the button below.
            </p>

            <a href={MEMBERS_AREA_URL} style={styles.cta}>
              <span aria-hidden="true" style={styles.ctaCheck}>✓</span>
              Click here to access the members area now!
            </a>

            {/* Chargeback notice — below button, subdued */}
            <p style={styles.chargeNote}>
              To avoid confusion, the charge will appear on your statement as{" "}
              <span style={styles.chargeCode}>PROCONTENTCOOK</span>. If you don&apos;t
              recognize it, please contact us before requesting a chargeback our support
              team will assist you quickly:{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} style={styles.chargeLink}>
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Desktop polish without affecting mobile */}
      <style>{`
        @media (min-width: 900px){
          main > section { padding: 34px 16px 70px !important; }
        }
      `}</style>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    background: "#f3f4f6",
    color: "#111827",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },

  strip: {
    width: "100%",
    background: "#16a34a",
    color: "#fff",
    textAlign: "center",
    padding: "11px 12px",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.1px",
  },

  shell: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "20px 12px 48px",
  },

  card: {
    width: "100%",
    maxWidth: 560,
    background: "#ffffff",
    borderRadius: 20,
    boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
    padding: "24px 20px 24px",
  },

  title: {
    margin: "0 0 16px",
    textAlign: "center",
    fontSize: 24,
    lineHeight: 1.2,
    fontWeight: 800,
    letterSpacing: "-0.3px",
    color: "#111827",
  },

  p: {
    margin: "0 0 10px",
    fontSize: 15,
    lineHeight: 1.65,
    color: "#374151",
    textAlign: "left",
  },

  supportLink: {
    color: "#16a34a",
    fontWeight: 700,
    textDecoration: "none",
    borderBottom: "1.5px solid #16a34a",
    wordBreak: "break-word",
    fontSize: 15,
  },

  dottedBox: {
    marginTop: 20,
    border: "2px dashed rgba(22,163,74,0.45)",
    borderRadius: 16,
    padding: "16px 14px",
    background: "#f0fdf4",
  },

  dottedText: {
    margin: "0 0 10px",
    textAlign: "center",
    fontSize: 13.5,
    lineHeight: 1.5,
    color: "#4b5563",
  },

  cta: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    background: "#22c55e",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 800,
    borderRadius: 12,
    padding: "15px 14px",
    fontSize: 15,
    boxShadow: "0 4px 14px rgba(34,197,94,0.35)",
    letterSpacing: "0.1px",
  },

  ctaCheck: {
    width: 20,
    height: 20,
    borderRadius: 6,
    background: "rgba(255,255,255,0.25)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 13,
    fontWeight: 900,
    lineHeight: 1,
    flex: "0 0 auto",
  },

  // Chargeback notice — subdued, below button
  chargeNote: {
    margin: "14px 0 0",
    fontSize: 11.5,
    lineHeight: 1.6,
    color: "#9ca3af",
    textAlign: "center",
  },

  chargeCode: {
    fontWeight: 700,
    color: "#6b7280",
  },

  chargeLink: {
    color: "#6b7280",
    fontWeight: 600,
    textDecoration: "underline",
    wordBreak: "break-word",
  },
};
