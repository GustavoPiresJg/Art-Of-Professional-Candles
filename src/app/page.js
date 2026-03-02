"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Home() {
  return (
    <>
      {/* MOTHERS DAY TOP BANNER (NÃO STICKY) */}
      <div className="mday-banner" aria-label="Mothers Day banner">
        <Image
          src="/mothers-day.webp"
          alt="Mothers Day is live now"
          fill
          priority
          sizes="100vw"
          className="mday-img"
        />
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-left">
            <div className="rating-line">4.89 out of 5 based on 10,000+ Reviews</div>

            <h1 className="hero-title">
              Create &amp; Sell Candles from Home No Experience? No Problem!
            </h1>

            {/* CAROUSEL */}
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

      {/* SPACER */}
      <div className="section-gap" />

      {/* TESTIMONIALS */}
      <section className="testimonials" aria-label="Student testimonials">
        <div className="container">
          <h2 className="testimonials-title">Here&apos;s What Our Students Are Saying...</h2>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* SPACER */}
      <div className="section-gap" />

      {/* 6 REASONS */}
      <section className="reasons" aria-label="6 reasons">
        <div className="container">
          <h2 className="reasons-title">
            <span className="reasons-title-pink">6 Reason</span> Why This Course <br className="reasons-br" />
            Is Perfect for You
          </h2>

          <ReasonsCarousel />

          <div className="reasons-cta-wrap">
            <a className="cta reasons-cta" href="#enroll">
              YES! Enroll NOW <span className="cta-arrow">→</span>
            </a>

            <img className="cards-img" src="/cards.webp" alt="Accepted payment methods" />
          </div>
        </div>
      </section>

      {/* OUR PROMISE */}
      <section className="promise" aria-label="Our Promise">
        <div className="promise-top">
          <div className="container">
            <h2 className="promise-title">Our Promise</h2>

            <div className="promise-grid">
              <div className="promise-col">
                <h3 className="promise-sub">Say Goodbye to Financial Stress</h3>

                <ul className="promise-list">
                  <li>
                    <span className="p-bold">No More Guesswork:</span> Follow our proven, step-by-step system to create and sell beautiful candles.
                  </li>
                  <li>
                    <span className="p-bold">No More Time Wasted:</span> Work on your own schedule and spend more time with your family.
                  </li>
                  <li>
                    <span className="p-bold">No More Fear of Failure:</span> Use ready-to-go templates and simple instructions that keep you on track.
                  </li>
                </ul>
              </div>

              <div className="promise-center" aria-hidden="true">
                <img className="promise-book" src="/CANDLEPRENEUR-ACCELERATOR.webp" alt="" />
              </div>

              <div className="promise-col">
                <h3 className="promise-sub">Meet the Candle-Making Course Designed for You!</h3>

                <ul className="promise-list">
                  <li>
                    Our course is designed to simplify your journey and help you turn your passion for candles into a thriving business.
                  </li>
                  <li>
                    With easy-to-follow lessons, expert guidance, and proven templates, you’ll be creating and selling candles in no time!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="promise-bottom">
          <div className="container">
            <div className="benefits">
              <div className="benefit">
                <img className="benefit-ico" src="/Beginner-Friendly.webp" alt="Beginner-Friendly" />
                <div className="benefit-txt">BEGINNER-<br />FRIENDLY</div>
              </div>

              <div className="benefit">
                <img className="benefit-ico" src="/Step-by-Step.webp" alt="Step-by-Step" />
                <div className="benefit-txt">STEP-BY-STEP<br />FORMAT</div>
              </div>

              <div className="benefit">
                <img className="benefit-ico" src="/Lifetime-Access.webp" alt="Lifetime Access" />
                <div className="benefit-txt">LIFETIME<br />ACCESS</div>
              </div>

              <div className="benefit">
                <img className="benefit-ico" src="/Risk-free.webp" alt="Risk-Free Guarantee" />
                <div className="benefit-txt">RISK-FREE<br />GUARANTEE</div>
              </div>

              <div className="benefit">
                <img className="benefit-ico" src="/Supportive-Community.webp" alt="Supportive Community" />
                <div className="benefit-txt">SUPPORTIVE<br />COMMUNITY</div>
              </div>

              <div className="benefit">
                <img className="benefit-ico" src="/Affordable.webp" alt="Affordable Start" />
                <div className="benefit-txt">AFFORDABLE<br />START</div>
              </div>
            </div>

            <div className="promise-proof">
              <div className="promise-rating">
                <strong>4.89</strong> out of 5 based
              </div>
              <div className="promise-customers">10,000+ Satisfied Customers</div>
            </div>

            <div className="promise-cta-wrap">
              <a className="cta promise-cta" href="#enroll">
                YES! Enroll NOW <span className="cta-arrow">→</span>
              </a>

              <img className="cards-img" src="/cards.webp" alt="Accepted payment methods" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="included" aria-label="What's Included bonuses">
        <div className="container">
          <h2 className="included-title">
            What&apos;s Included? Unlock <br className="included-br" />
            Over $97 Worth of Bonuses Today Only!
          </h2>

          <IncludedCarousel />

          <div className="included-cta-wrap">
            <a className="cta included-cta" href="#enroll">
              YES! Enroll NOW <span className="cta-arrow">→</span>
            </a>

            <img className="cards-img included-cards" src="/cards.webp" alt="Accepted payment methods" />
          </div>
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
          "“This course gave me a real plan instead of just motivation. Having proven templates and clear instructions made me feel prepared to take action and treat my candle business seriously from day one”",
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

function ReasonsCarousel() {
  const items = useMemo(
    () => [
      {
        n: "1",
        title: "Fast & Profitable Results",
        text:
          "Start earning in just weeks with our proven step-by-step system. Many students see their first sale within 30 days!",
      },
      {
        n: "2",
        title: "Beginner-Friendly",
        text:
          "No experience is needed! Our course breaks everything down into simple, easy-to-follow steps.",
      },
      {
        n: "3",
        title: "Low Startup Costs",
        text:
          "With just a few affordable materials, you can start your candle business from home no huge investments are required.",
      },
      {
        n: "4",
        title: "Online Course-Learn Anywhere, Anytime",
        text:
          "Access the course on your phone, tablet, or computer. Learn at your own pace, whether you're at home, on the go, or during your free time.",
      },
      {
        n: "5",
        title: "Lifetime Access",
        text:
          "Rewatch the lessons anytime you want. Keep your training and resources available whenever you need a refresher.",
      },
      {
        n: "6",
        title: "Risk-Free Guarantee",
        text:
          "Try it risk-free for 7 days. If  you’re not satisfied, we’ll give you a full refund no questions asked.",
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
    <div className="r-wrap">
      <div className="r-track" ref={trackRef}>
        {items.map((it) => (
          <div className="r-slide" key={it.n}>
            <div className="r-card">
              <div className="r-cap">
                <div className="r-num">{it.n}</div>
              </div>

              <div className="r-body">
                <div className="r-title">{it.title}</div>
                <p className="r-text">{it.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="r-dots" aria-label="reasons pagination">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`r-dot ${active === i ? "is-active" : ""}`}
            aria-label={`Go to reason ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

function IncludedCarousel() {
  const items = useMemo(
    () => [
      {
        key: "soy",
        type: "ebook",
        img: "/soy-wax.webp",
        title: "Soy Candle Making Essentials (Ebook)",
        text:
          "Learn the essentials of soy candles, including wax selection, wick pairing, and clean-burning techniques.",
      },
      {
        key: "aroma",
        type: "ebook",
        img: "/aromatheraphy.webp",
        title: "Essential Guide to Aromatherapy Candles (Ebook)",
        text:
          "Create premium aromatherapy candles with fragr ance blending tips and simple, professional methods.",
      },
      {
        key: "biz",
        type: "ebook",
        img: "/building-your-candle.webp",
        title: "Build Your Candle Business From Scratch (Ebook)",
        text:
          "Turn your candle-making hobby into a real business with guidance on pricing, marketing, and sales.",
      },
      {
        key: "mold",
        type: "ebook",
        img: "/complete-guilde.webp",
        title: "Complete Guide to Molded Candles (Ebook)",
        text:
          "Discover how to make stunning molded candles with step-by-step methods and practical tips.",
      },
      {
        key: "pro",
        type: "ebook",
        img: "/art-of-professional.webp",
        title: "Art of Professional Candles (Ebook)",
        text:
          "Level up your craft with advanced finishing, aesthetics, and techniques that make candles look premium.",
      },
      {
        key: "tips",
        type: "info",
        title: "Bonus Tips & Execution Guides",
        text:
          "Get extra tips, execution checklists, and quick fixes to avoid common mistakes and speed up your results.",
      },
      {
        key: "cert",
        type: "info",
        img: "/certificate.webp",
        title: "Certificate After You Finish The Course",
        text:
          "After completing Candlepreneur Accelerator, you’ll unlock your official course certificate to showcase your progress.",
      },
    ],
    []
  );

  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // 1) Scroll normal (para dots)
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

    // 2) Wheel vertical -> scroll horizontal (PC)
    const onWheel = (e) => {
      // trackpad horizontal: deixa passar
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    // 3) Drag com mouse
    let isDown = false;
    let startX = 0;
    let startLeft = 0;

    const onDown = (e) => {
      isDown = true;
      startX = e.clientX;
      startLeft = el.scrollLeft;
      el.classList.add("is-dragging");
      el.setPointerCapture?.(e.pointerId);
    };

    const onMove = (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      el.scrollLeft = startLeft - dx;
    };

    const onUp = () => {
      isDown = false;
      el.classList.remove("is-dragging");
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
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
    <div className="inc-wrap">
      <div className="inc-track" ref={trackRef}>
        {items.map((it) => (
          <div className="inc-slide" key={it.key}>
            <div className="inc-card">
              <div className="inc-media" aria-hidden="true">
                {it.type === "ebook" ? (
                  <>
                    <div className="inc-badge" aria-hidden="true">
                      <div className="inc-badge-ico" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                          <path
                            d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                            stroke="white"
                            strokeWidth="2"
                          />
                          <path
                            d="M9 7h6M9 11h8M9 15h8"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div className="inc-badge-txt">E-BOOK</div>
                    </div>

                    <Image
                      src={it.img}
                      alt={it.title}
                      fill
                      sizes="(max-width: 900px) 86vw, 360px"
                      className="inc-img"
                    />
                  </>
                ) : it.img ? (
                  <Image
                    src={it.img}
                    alt={it.title}
                    fill
                    sizes="(max-width: 900px) 86vw, 360px"
                    className="inc-img"
                  />
                ) : (
                  <div className="inc-iconBox">
                    <div className="inc-bigIcon" aria-hidden="true">
                      <svg viewBox="0 0 64 64" width="90" height="90" fill="none">
                        <path
                          d="M20 10h24a6 6 0 0 1 6 6v34a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4V16a6 6 0 0 1 6-6Z"
                          fill="#ffffff"
                          stroke="#c96a45"
                          strokeWidth="4"
                        />
                        <path
                          d="M26 18h12M24 28h16M24 36h16M24 44h12"
                          stroke="#8a8a8a"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                        <path
                          d="M30 6h4a4 4 0 0 1 4 4v4H26v-4a4 4 0 0 1 4-4Z"
                          fill="#6b7a89"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              <div className="inc-body">
                <div className="inc-h">{it.title}</div>
                <p className="inc-p">{it.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="inc-dots" aria-label="included pagination">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`inc-dot ${active === i ? "is-active" : ""}`}
            aria-label={`Go to bonus ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}