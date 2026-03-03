// src/app/membership/page.js

export const metadata = {
  title: "Membership — Purchase Approved",
};

const SUPPORT_EMAIL = "candlepreneurcare@gmail.com";
const COMPANY_NAME = "";

export default function MembershipPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#f6f7f8",
        color: "#0b0b0c",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
      }}
    >
      {/* Success strip */}
      <div
        role="status"
        aria-live="polite"
        style={{
          width: "100%",
          background: "#0a9a3c",
          color: "#fff",
          textAlign: "center",
          padding: "10px 12px",
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: "0.1px",
        }}
      >

      </div>

      <section
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "18px 12px 40px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 520,
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: "0 18px 45px rgba(0,0,0,0.10)",
          }}
        >
          <div
            style={{
              padding: "18px 18px 10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#fff",
            }}
          >
            <img
              src="/APPROVED.webp"
              alt="Purchase approved successfully"
              loading="eager"
              style={{
                width: "100%",
                maxWidth: 360,
                height: "auto",
                display: "block",
                borderRadius: 12,
              }}
            />
          </div>

          <h1
            style={{
              margin: "8px 18px 0",
              textAlign: "center",
              fontSize: 18,
              lineHeight: 1.2,
              fontWeight: 900,
              letterSpacing: "0.2px",
            }}
          >
            🎉 CONGRATULATIONS ON YOUR PURCHASE!
          </h1>

          <p
            style={{
              margin: "10px 22px 0",
              textAlign: "center",
              fontSize: 14,
              lineHeight: 1.55,
              color: "rgba(0,0,0,0.72)",
            }}
          >
            Your purchase has been successfully approved!
          </p>

          <p
            style={{
              margin: "10px 22px 0",
              textAlign: "center",
              fontSize: 14,
              lineHeight: 1.55,
              color: "rgba(0,0,0,0.72)",
            }}
          >
            You will now receive an email with the subject <b>“Purchase Approved”</b> in your main inbox, spam or
            promotions folder. Please follow the instructions in that email.
          </p>

          <div
            aria-hidden="true"
            style={{
              height: 1,
              background: "rgba(0,0,0,0.08)",
              margin: "16px 22px 0",
            }}
          />

          <p
            style={{
              margin: "14px 22px 0",
              textAlign: "center",
              fontSize: 14,
              lineHeight: 1.55,
              color: "rgba(0,0,0,0.72)",
            }}
          >
            Need help or didn’t receive the email?
            <br />
            Contact our support at{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              style={{
                color: "#0b57d0",
                textDecoration: "underline",
                wordBreak: "break-word",
              }}
            >
              {SUPPORT_EMAIL}
            </a>
          </p>

          <p
            style={{
              margin: "14px 18px 18px",
              textAlign: "center",
              fontSize: 12,
              color: "rgba(0,0,0,0.45)",
              fontWeight: 600,
              letterSpacing: "0.2px",
            }}
          >
            {COMPANY_NAME}
          </p>
        </div>
      </section>

      {/* Desktop spacing tweaks (still fine on mobile) */}
      <style>{`
        @media (min-width: 900px) {
          main > section { padding: 34px 16px 60px !important; }
          main > div[role="status"] { font-size: 15px !important; padding: 12px 16px !important; }
        }
      `}</style>
    </main>
  );
}
