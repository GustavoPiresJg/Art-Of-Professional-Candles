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
          {/* Approved image */}
          <div style={styles.heroWrap}>
            <img
              src="/APPROVED.webp"
              alt="Purchase approved successfully"
              loading="eager"
              style={styles.heroImg}
            />
          </div>

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
            Don’t forget to check your spam, junk, or promotions folder, because some emails may end up there by mistake.
          </p>

          <p style={styles.p}>
            If you have any questions or access issues, email our support:
          </p>

          <p style={{ ...styles.p, marginTop: 6 }}>
            <a href={`mailto:${SUPPORT_EMAIL}`} style={styles.supportLink}>
              {SUPPORT_EMAIL}
            </a>
          </p>

          <p style={{ ...styles.p, marginTop: 10 }}>
            We’ll reply as soon as possible and help you with anything you need.
          </p>

          <p style={{ ...styles.p, marginTop: 10 }}>
            See you inside the members area let’s get started!
          </p>

          {/* Dotted box + CTA button */}
          <div style={styles.dottedBox}>
            <p style={styles.dottedText}>
              If you want to access your members area directly, click the button below.
            </p>

            <a href={MEMBERS_AREA_URL} style={styles.cta}>
              <span aria-hidden="true" style={styles.ctaCheck}>
                ✓
              </span>
              Click here to access the members area now!
            </a>
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
      'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
  },

  strip: {
    width: "100%",
    background: "#16a34a",
    color: "#fff",
    textAlign: "center",
    padding: "12px 12px",
    fontSize: 14,
    fontWeight: 800,
  },

  shell: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "18px 12px 44px",
  },

  card: {
    width: "100%",
    maxWidth: 560,
    background: "#eef0f2",
    borderRadius: 18,
    boxShadow: "0 18px 45px rgba(0,0,0,0.08)",
    padding: "18px 16px 20px",
  },

  heroWrap: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "4px 6px 14px",
  },

  heroImg: {
    width: "100%",
    maxWidth: 360,
    height: "auto",
    display: "block",
    borderRadius: 14,
    background: "#ffffff",
  },

  title: {
    margin: "0 6px 10px",
    textAlign: "center",
    fontSize: 22,
    lineHeight: 1.15,
    fontWeight: 900,
    letterSpacing: "-0.2px",
    color: "#111827",
  },

  p: {
    margin: "10px 6px 0",
    fontSize: 14,
    lineHeight: 1.6,
    color: "rgba(17,24,39,0.78)",
    textAlign: "left",
  },

  supportLink: {
    color: "#16a34a",
    fontWeight: 900,
    textDecoration: "underline",
    wordBreak: "break-word",
  },

  dottedBox: {
    marginTop: 18,
    border: "2px dashed rgba(22,163,74,0.55)",
    borderRadius: 14,
    padding: "14px 12px",
    background: "rgba(255,255,255,0.55)",
  },

  dottedText: {
    margin: 0,
    textAlign: "center",
    fontSize: 13,
    lineHeight: 1.45,
    color: "rgba(17,24,39,0.80)",
  },

  cta: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 12,
    background: "#bbf7d0",
    color: "#14532d",
    textDecoration: "none",
    fontWeight: 900,
    borderRadius: 12,
    padding: "14px 12px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.06)",
    textAlign: "center",
  },

  ctaCheck: {
    width: 18,
    height: 18,
    borderRadius: 5,
    background: "#22c55e",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 12,
    lineHeight: 1,
    flex: "0 0 auto",
  },
};
