
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

      if (window.checkoutElements) {
        window.checkoutElements.init("salesFunnel").mount("#hotmart-sales-funnel");
        hotmartMountedRef.current = true;
      }
    } catch (e) {}
  }, []);

  return (
    <main className="page">
      <Script id="vturb-perf" strategy="beforeInteractive">
        {`!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`}
      </Script>

      <Script
        src="https://scripts.converteai.net/b6983c31-9e45-4de6-9678-d272c2ce100c/players/69a62aca4c54c72e8c7afc6c/v4/player.js"
        strategy="afterInteractive"
      />

      <Script
        src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
        strategy="afterInteractive"
        onLoad={mountHotmart}
      />

      <section className="topbar">
        <div className="topbar-inner">
          <h1>Do not close this page</h1>
          <p>
            <b>Important:</b> Do not click “Back” or close this page. Watch the video below to confirm your purchase.
          </p>
        </div>
      </section>

      <section className="content">
        <div className="hero">
          <div className="heroInner">

            {/* WAIT IMAGE */}
            <div className="waitWrap">
              <img src="/WAIT!.webp" alt="Wait important message" className="waitImg"/>
            </div>

          </div>
        </div>

        <div className="panel">
          <div className="videoWrap">
            <vturb-smartplayer
              id="vid-69a62aca4c54c72e8c7afc6c"
              style={{ display: "block", margin: "0 auto", width: "100%" }}
            ></vturb-smartplayer>
          </div>
        </div>

        <div className="panel checkoutPanel">
          <div className="checkoutCard">
            <div id="hotmart-sales-funnel" className="funnel" />
          </div>
        </div>
      </section>

      <style jsx global>{`
        html,body{
          width:100%;
          max-width:100%;
          overflow-x:hidden;
        }
      `}</style>

      <style jsx>{`
        .page{
          background:#ffffff;
          min-height:100vh;
          width:100%;
          overflow-x:hidden;
        }

        .topbar{
          background:#ff3d9a;
          color:#fff;
          padding:22px 16px;
          text-align:center;
        }

        .topbar-inner{
          max-width:980px;
          margin:0 auto;
        }

        .topbar h1{
          margin:0 0 6px;
          font-size:26px;
          font-weight:900;
        }

        .topbar p{
          margin:0;
          font-size:16px;
        }

        .content{
          padding:18px 16px 44px;
          width:100%;
        }

        .hero{
          max-width:980px;
          margin:0 auto 14px;
        }

        .heroInner{
          text-align:center;
        }

        .waitWrap{
          display:flex;
          justify-content:center;
          margin:10px 0 18px;
          width:100%;
        }

        .waitImg{
          width:100%;
          max-width:980px;
          height:auto;
          display:block;
        }

        .panel{
          max-width:980px;
          margin:0 auto 18px;
          border:1px solid rgba(0,0,0,0.1);
          background:#fff;
          overflow:hidden;
          box-shadow:0 10px 30px rgba(0,0,0,0.06);
        }

        .videoWrap{
          width:100%;
          overflow:hidden;
        }

        vturb-smartplayer{
          width:100%!important;
          display:block!important;
        }

        .checkoutCard{
          width:100%;
        }

        .funnel{
          padding:14px;
          width:100%;
        }

        @media(max-width:768px){

          .topbar{
            padding:18px 14px;
          }

          .topbar h1{
            font-size:22px;
          }

          .topbar p{
            font-size:14px;
          }

          .waitImg{
            width:100%;
            max-width:100%;
          }

        }
      `}</style>
    </main>
  );
}
