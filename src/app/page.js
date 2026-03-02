"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Home() {
  return (
    <>
      {/* TOP STRIP */}
      <div className="top-strip">
        <div className="container">
          <p>MOTHERS DAY IS LIVE NOW</p>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          {/* LEFT now contains everything so mobile order is correct */}
          <div className="hero-left">
            <div className="rating-line">4.89 out of 5 based on 10,000+ Reviews</div>

            <h1 className="hero-title">
              Create &amp; Sell Candles from Home No Experience? No Problem!
            </h1>

            {/* CAROUSEL (must be here to sit between title and text on mobile) */}
            <div className="hero-right" aria-label="Student results carousel">
              <div className="vcols">
                {/* COL A (moves up) */}
                <div className="vcol vcol-up">
                  <div className="vtrack">
                    <IgCard name="Lara T." />
                    <IgCard name="Kate G." />
                    <IgCard name="Emma S." />
                    <IgCard name="Olivia E." />

                    {/* duplicate for seamless loop */}
                    <IgCard name="Lara T." ariaHidden />
                    <IgCard name="Kate G." ariaHidden />
                    <IgCard name="Emma S." ariaHidden />
                    <IgCard name="Olivia E." ariaHidden />
                  </div>
                </div>

                {/* COL B (moves down) */}
                <div className="vcol vcol-down">
                  <div className="vtrack">
                    <IgCard name="Kate G." />
                    <IgCard name="Olivia E." />
                    <IgCard name="Lara T." />
                    <IgCard name="Linda O." />

                    {/* duplicate for seamless loop */}
                    <IgCard name="Kate G." ariaHidden />
                    <IgCard name="Olivia E." ariaHidden />
                    <IgCard name="Lara T." ariaHidden />
                    <IgCard name="Linda O." ariaHidden />
                  </div>
                </div>
              </div>

              <p className="carousel-note">(placeholders — depois você troca pelas imagens reais)</p>
            </div>

            {/* TEXT + CTA */}
            <div className="hero-copy">
              <p className="hero-text">
                With our step-by-step candle-making course, you&apos;ll learn how to create
                beautiful, handmade candles and turn your passion into a profitable business.
                Join thousands of women who&apos;ve already transformed their lives earning
                2,000, 3,000 or even $5,000 a month all from the comfort of their homes.
              </p>

              <a className="cta" href="#enroll">
                YES! Enroll NOW <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SPACER so it doesn't stick */}
      <div className="section-gap" />

      {/* TESTIMONIALS */}
      <section className="testimonials" aria-label="Student testimonials">
        <div className="container">
          <h2 className="testimonials-title">Here&apos;s What Our Students Are Saying...</h2>

          <TestimonialsCarousel />
        </div>
      </section>

      <div id="enroll" style={{ height: 1 }} />
    </>
  );
}

function IgCard({ name, ariaHidden = false }) {
  return (
    <div className="ig-card" aria-hidden={ariaHidden ? "true" : undefined}>
      <div className="ig-top">
        <div className="ig-avatar" />
        <div className="ig-name">{name}</div>
        <div className="ig-dots">⋮</div>
      </div>

      <div className="ig-photo placeholder">Photo</div>

      <div className="ig-bottom">
        <span className="ig-like">♥</span>
        <span className="ig-ico">💬</span>
        <span className="ig-ico">✈</span>
      </div>
    </div>
  );
}

function TestimonialsCarousel() {
  const items = useMemo(
    () => [
      {
        name: "Sarah",
        img: "/sarah.webp",
        text:
          "“I went from zero to $2,000 in my first month! This course gave me the confidence and tools to start my candle business. Now, I’m working from home and spending more time with my family. Thank you!”",
      },
      {
        name: "Linda",
        img: "/linda.webp",
        text:
          "“I never thought I could run my own business, but this course made it so easy. The step-by-step videos and templates are worth every penny. I’m so glad I took the leap!”",
      },
      {
        name: "Emily",
        img: "/emily.webp",
        text:
          "“The private Facebook group is a game-changer. I’ve learned so much from the community and feel supported every step of the way. If you’re thinking about starting a candle business, this is the place to start!”",
      },
    ],
    []
  );

  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const children = Array.from(el.children);
      if (!children.length) return;

      const center = el.scrollLeft + el.clientWidth / 2;

      let bestIndex = 0;
      let bestDist = Infinity;

      children.forEach((child, idx) => {
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const dist = Math.abs(childCenter - center);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = idx;
        }
      });

      setActive(bestIndex);
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.children[i];
    if (!child) return;
    el.scrollTo({
      left: child.offsetLeft - (el.clientWidth - child.clientWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <div className="t-wrap">
      <div className="t-track" ref={trackRef}>
        {items.map((t) => (
          <div className="t-slide" key={t.name}>
            <div className="t-card">
              {/* FOTO REAL */}
              <div className="t-photo" aria-hidden="true">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  sizes="(max-width: 900px) 88px, 88px"
                  className="t-photo-img"
                  priority={t.name === "Sarah"}
                />
              </div>

              <div className="t-meta">
                <span className="t-name">{t.name}</span>
                <span className="t-check" aria-hidden="true">
                  ✔
                </span>
                <span className="t-verified">Verified Buyer</span>
              </div>

              <div className="t-stars" aria-label="5 star rating">
                {"★★★★★"}
              </div>

              <p className="t-text">{t.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS: desktop hidden via CSS, mobile shows */}
      <div className="t-dots" aria-label="testimonial pagination">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`t-dot ${active === i ? "is-active" : ""}`}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}