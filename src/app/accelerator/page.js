"use client";

import { useCallback, useRef } from "react";
import Script from "next/script";

export default function AcceleratorPage() {
  const hotmartMountedRef = useRef(false);

  const mountHotmart = useCallback(() => {
    if (hotmartMountedRef.current) return;

    try {
      const el = document.getElementById("hotmart-sales-funnel");
      if (!el) return;

      // Hotmart Elements mounts after script load
      if (window.checkoutElements) {
        window.checkoutElements.init("salesFunnel").mount("#hotmart-sales-funnel");
        hotmartMountedRef.current = true;
      }
    } catch (e) {}
  }, []);

  return (
    <main className="page">
      {/* VTurb perf marker */}
      <Script id="vturb-perf" strategy="beforeInteractive">
        {`!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`}
      </Script>

      {/* VTurb Player */}
      <Script
        src="https://scripts.converteai.net/b6983c31-9e45-4de6-9678-d272c2ce100c/players/69a62aca4c54c72e8c7afc6c/v4/player.js"
        strategy="afterInteractive"
      />

      {/* Hotmart Checkout Elements */}
      <Script
        src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
        strategy="afterInteractive"
        onLoad={mountHotmart}
      />

      {/* TOP BAR */}
      <section className="topbar">
        <div className="topbar-inner">
          <h1>Do not close this page</h1>
          <p>
            <b>Important:</b> Do not click “Back” or close this page. Watch the video below to confirm your purchase.
          </p>
        </div>
      </section>

      <section className="content">
        {/* HERO */}
        <div className="hero">
          <div className="heroInner">
      

            <h2 className="headline">
              Accelerate Your Results and Turn Your Candle Skills Into a $5,000/Month Business From Home.
            </h2>

            <p className="subhead">
              Watch This Short Presentation to Discover the Step-by-Step Candlepreneur Accelerator System That Shows You
              Exactly How to Build, Brand, and Sell Profitable Candles — Even If You’re Starting From Scratch.
            </p>

            <div className="reviews">
              <div className="stars" aria-label="5 star rating">
                <img src="/star.webp" alt="5 stars" className="starsImg" />
              </div>

              <div className="reviewLine">
                <b>4.89</b> out of 5 based on <b>10,000+</b> Reviews
              </div>

              <div className="trustLine">13,412+ students trust My proven method</div>
            </div>
          </div>
        </div>

        {/* VIDEO */}
        <div className="panel">
          <div className="videoWrap">
            <vturb-smartplayer
              id="vid-69a62aca4c54c72e8c7afc6c"
              style={{ display: "block", margin: "0 auto", width: "100%" }}
            ></vturb-smartplayer>
          </div>
        </div>

        {/* CHECKOUT */}
        <div className="panel checkoutPanel">
          <div className="checkoutCard">
            <div id="hotmart-sales-funnel" className="funnel" />
          </div>
        </div>
      </section>

      <style jsx global>{`
        /* Kill sideways drag (structural fix, not JS blocking) */
        html,
        body {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }
      `}</style>

      <style jsx>{`
        .page {
          background: #ffffff;
          color: #0b0b0c;
          min-height: 100vh;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji,
            Segoe UI Emoji;

          /* extra safety for mobile */
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        /* =========================
           TOP BAR
        ========================= */
        .topbar {
          background: #ff3d9a;
          color: #fff;
          padding: 22px 16px;
          text-align: center;
        }
        .topbar-inner {
          max-width: 980px;
          margin: 0 auto;
        }
        .topbar h1 {
          margin: 0 0 6px;
          font-size: 26px;
          font-weight: 900;
          letter-spacing: -0.2px;
        }
        .topbar p {
          margin: 0;
          font-size: 16px;
          line-height: 1.35;
          opacity: 0.95;
        }

        /* =========================
           LAYOUT
        ========================= */
        .content {
          padding: 18px 16px 44px;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        .hero {
          max-width: 980px;
          margin: 0 auto 14px;
        }

        .heroInner {
          text-align: center;
          padding: 6px 0 6px;
        }

        .waitWrap {
          display: flex;
          justify-content: center;
          margin: 6px 0 12px;
          width: 100%;
        }

        .waitImg {
          width: 100%;
          max-width: 980px;
          height: auto;
          display: block;
        }

        .headline {
          margin: 10px auto 10px;
          font-size: clamp(28px, 5.4vw, 54px);
          line-height: 1.05;
          font-weight: 900;
          letter-spacing: -0.6px;
          max-width: 980px;
        }

        .subhead {
          margin: 0 auto 14px;
          font-size: clamp(14px, 2.2vw, 18px);
          line-height: 1.45;
          color: rgba(0, 0, 0, 0.75);
          max-width: 920px;
        }

        .reviews {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          margin: 10px 0 8px;
        }

        .stars {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .starsImg {
          width: 140px;
          height: auto;
          display: block;
          max-width: 100%;
        }

        .reviewLine {
          font-size: 15px;
          color: rgba(0, 0, 0, 0.75);
        }

        .trustLine {
          font-size: 16px;
          font-weight: 700;
          color: rgba(0, 0, 0, 0.85);
          margin-top: 2px;
        }

        /* =========================
           PANELS
        ========================= */
        .panel {
          max-width: 980px;
          margin: 0 auto 18px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 0px;
          background: #fff;
          overflow: hidden; /* prevents inside stuff from creating sideways scroll */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        }

        .videoWrap {
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        vturb-smartplayer {
          width: 100% !important;
          display: block !important;
          border-radius: 0 !important;
          max-width: 100% !important;
        }

        .checkoutPanel {
          margin-top: 6px;
        }

        .checkoutCard {
          background: #fff;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        .funnel {
          padding: 14px;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        /* Hotmart sometimes injects fixed-width iframes/divs */
        .funnel :global(iframe),
        .funnel :global(div),
        .funnel :global(section) {
          max-width: 100% !important;
        }

        /* =========================
           MOBILE
        ========================= */
        @media (max-width: 768px) {
          .content {
            padding: 10px 10px 38px;
          }

          .topbar {
            padding: 18px 14px;
          }

          .topbar h1 {
            font-size: 22px;
          }

          .topbar p {
            font-size: 14px;
          }

          .reviewLine {
            font-size: 14px;
            text-align: center;
          }

          .trustLine {
            font-size: 15px;
            text-align: center;
          }

          /* remove the old negative margins: they were the main cause of sideways drag */
          .panel {
            border-left: 0;
            border-right: 0;
          }
        }

        @media (min-width: 900px) {
          .topbar {
            padding: 28px 16px;
          }
          .topbar h1 {
            font-size: 30px;
          }
        }
      `}</style>
    </main>
  );
}
