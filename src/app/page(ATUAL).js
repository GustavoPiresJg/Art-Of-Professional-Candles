"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Home() {// Testimonials carousel (mobile)
const t3Ref = useRef(null);
const [t3Active, setT3Active] = useState(0);



const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const mq = window.matchMedia("(max-width: 900px)");
  const apply = () => setIsMobile(mq.matches);
  apply();

  // Safari fallback
  if (mq.addEventListener) {
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  } else {
    mq.addListener(apply);
    return () => mq.removeListener(apply);
  }
}, []);

const onT3Scroll = () => {
  const el = t3Ref.current;
  if (!el) return;
  const cards = el.querySelectorAll(".t3-card--snap");
  if (!cards.length) return;

  const center = el.scrollLeft + el.clientWidth / 2;
  let best = 0;
  let bestDist = Infinity;

  cards.forEach((card, i) => {
    const c = card.offsetLeft + card.offsetWidth / 2;
    const d = Math.abs(center - c);
    if (d < bestDist) {
      bestDist = d;
      best = i;
    }
  });

  setT3Active(best);
};


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
              <div className="vcols vcols--masked">
                {/* COL A (moves up) */}
                <div className="vcol vcol-up">
                  <div className="vtrack">
                    <IgCard name="Lara T." src="/womanart2.webp"  />
                    <IgCard name="Kate G." src="/womanart3.webp"  />
                    <IgCard name="Emma S." src="/womanart7.webp"  />
                    <IgCard name="Olivia E." src="/womanart.webp"  />

                    {/* duplicate for seamless loop */}
                    <IgCard name="Lara T." src="/womanart2.webp" ariaHidden  />
                    <IgCard name="Kate G." src="/womanart3.webp" ariaHidden  />
                    <IgCard name="Emma S." src="/womanart7.webp" ariaHidden  />
                    <IgCard name="Olivia E." src="/womanart.webp" ariaHidden  />
                  </div>
                </div>

                {/* COL B (moves down) */}
                <div className="vcol vcol-down">
                  <div className="vtrack">
                    <IgCard name="Kate G." src="/womanart3.webp"  />
                    <IgCard name="Olivia E." src="/womanart.webp"  />
                    <IgCard name="Lara T." src="/womanart2.webp"  />
                    <IgCard name="Linda O." src="/womanart6.webp"  />

                    {/* duplicate for seamless loop */}
                    <IgCard name="Kate G." src="/womanart3.webp" ariaHidden  />
                    <IgCard name="Olivia E." src="/womanart.webp" ariaHidden  />
                    <IgCard name="Lara T." src="/womanart2.webp" ariaHidden  />
                    <IgCard name="Linda O." src="/womanart6.webp" ariaHidden  />
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

      {/* TESTIMONIALS (ANTIGOS - NÃO MEXE) */}
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
                <div className="benefit-txt">SUPPORT</div>
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

      {/* NOVA SEÇÃO DEPOIMENTOS (DEPOIS DO INCLUDED) */}
      <section className="testimonials2" aria-label="Happy students testimonials">
        <div className="container">
          <h2 className="testimonials2-title">
            <span className="testimonials2-top">Don&apos;t Just Take Our Word for It.</span>
            <span className="testimonials2-sub">Hear What Happy Students Are Saying!</span>
          </h2>

          <TestimonialsShowcase />
        </div>
      </section>



      {/* AVISO (DATE AUTO) */}
      <section className="note" aria-label="Important note">
        <div className="container">
          <AlertNote />
        </div>
      </section>

      {/* OFFER CARD (computer.webp + live people) */}
      <section className="offer" aria-label="Offer and secure checkout">
        <div className="container">
          <OfferCard />
        </div>
      </section>

{/* FINAL SCREEN (DEPOIS DO OFFER) */}
<section className="closing" aria-label="Final message">
  <div className="container">
    <div className="closing-inner">
      <h2 className="closing-title">
        Starting a Profitable Candle
        Business Has Never Been
        Easier!
      </h2>

      <p className="closing-text">No more guesswork or expensive trial-and-error!</p>

      <p className="closing-text">
        With our step-by-step course, you&apos;ll learn how to create beautiful, handmade candles and build a
        profitable business all from the comfort of your home.
      </p>

      <p className="closing-text">
        Enjoy the freedom and flexibility of being your own boss, without breaking the bank.
      </p>
    </div>
  </div>
</section>

      

{/* OUR COURSE vs. ALTERNATIVES (Support.webp) */}
{/* OUR COURSE vs. ALTERNATIVES */}
<section className="compare" aria-label="Our Course vs Alternatives">
  <div className="container">
    <h2 className="compare-title">
      <span className="compare-pink">Our Course</span> vs. Alternatives
    </h2>

    {/* DESKTOP/TABLET: imagem pronta */}
    <div className="compare-media compare-media--desktop" aria-hidden="true">
      <img className="compare-img" src="/Support.webp" alt="" />
    </div>

    {/* MOBILE: versão feita por código (mais legível e "espremida") */}
    <div className="compare-mobile compare-media--mobile" aria-hidden="true">
      <div className="compare-grid">
        <div className="compare-col compare-col--labels">
          <div className="compare-cap compare-cap--labels" />
          <div className="compare-row compare-row--l">Step-by-Step Guidance</div>
          <div className="compare-row compare-row--l">Beginner Friendly</div>
          <div className="compare-row compare-row--l">Lifetime Access</div>
          <div className="compare-row compare-row--l">Support</div>
          <div className="compare-row compare-row--l">Risk-Free Guarantee</div>
        </div>

        <div className="compare-col compare-col--ours">
          <div className="compare-cap compare-cap--ours">
            <img className="compare-books" src="/books.webp" alt="" />
          </div>
          <div className="compare-row compare-row--c"><span className="compare-ic compare-ic--ok">✓</span></div>
          <div className="compare-row compare-row--c"><span className="compare-ic compare-ic--ok">✓</span></div>
          <div className="compare-row compare-row--c"><span className="compare-ic compare-ic--ok">✓</span></div>
          <div className="compare-row compare-row--c"><span className="compare-ic compare-ic--ok">✓</span></div>
          <div className="compare-row compare-row--c"><span className="compare-ic compare-ic--ok">✓</span></div>
        </div>

        <div className="compare-col compare-col--others">
          <div className="compare-cap compare-cap--others">COMPETITORS</div>
          <div className="compare-row compare-row--c"><span className="compare-ic compare-ic--no">×</span></div>
          <div className="compare-row compare-row--c"><span className="compare-ic compare-ic--no">×</span></div>
          <div className="compare-row compare-row--c"><span className="compare-ic compare-ic--no">×</span></div>
          <div className="compare-row compare-row--c"><span className="compare-ic compare-ic--no">×</span></div>
          <div className="compare-row compare-row--c"><span className="compare-ic compare-ic--no">×</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

      
      
{/* SAVE TIME SECTION (NEW - FINAL) */}
<section className="savet" aria-label="Save time and money">
  <div className="container">
    <div className="savet-grid">
      <div className="savet-left">
        <h2 className="savet-title">
          SAVE TIME.<br />
          SAVE EFFORT.<br />
          SAVE $$$
        </h2>
      </div>

      <div className="savet-right">
        <div className="savet-lines" aria-hidden="true">
          <div className="savet-line">
            <span className="savet-label">Influencer Course</span>
            <span className="savet-dots" />
            <span className="savet-val">$150</span>
          </div>
          <div className="savet-line">
            <span className="savet-label">In-Person Workshops</span>
            <span className="savet-dots" />
            <span className="savet-val">$1200</span>
          </div>
          <div className="savet-line">
            <span className="savet-label">YouTube Tutorials</span>
            <span className="savet-dots" />
            <span className="savet-val">Endless Hours</span>
          </div>
        </div>

        <div className="savet-box">
          <div className="savet-boxTop">
            <span className="savet-boxPink">Our Course</span>
            <span className="savet-boxDots" />
            <span className="savet-boxPink">Just $17</span>
          </div>
          <div className="savet-boxSub">Lifetime Access, No Recurring Payments</div>
        </div>
      </div>
<a className="savet-cta savet-cta--mobile" href="#enroll">
  I WANT CANDLE SUCCESS NOW <span className="savet-arrow">→</span>
</a>

    </div>
  </div>
</section>

{/* TESTIMONIALS (FINAL) */}
<section className="t3" aria-label="More testimonials">
  <div className="container">
    <div className="t3-grid t3-grid--desktop" aria-hidden="true">
      <div className="t3-card">
        <div className="t3-media" aria-hidden="true">
          <img className="t3-img" src="/womanart.webp" alt="" />
        </div>
        <div className="t3-body">
          <img className="t3-stars" src="/star.webp" alt="5 star rating" />
          <p className="t3-text">
            “I've always been concerned about the environment, and this course taught me how to make eco-friendly candles with natural ingredients. The lessons on using soy wax and essential oils were exactly what I was looking for. Now, I make sustainable candles that I feel good about using and selling. This course is a must for anyone interested in green living!”
          </p>
        </div>
        <div className="t3-foot">
          <span className="t3-name">Manda K.</span>
          <span className="t3-verified">
            <span className="t3-badge" aria-hidden="true">✔</span>
            Verified Buyer
          </span>
        </div>
      </div>

      <div className="t3-card">
        <div className="t3-media" aria-hidden="true">
          <img className="t3-img" src="/notebook.webp" alt="" />
        </div>
        <div className="t3-body">
          <img className="t3-stars" src="/star.webp" alt="5 star rating" />
          <p className="t3-text">
            “After retiring, I was looking for something creative to fill my time, and this candle-making course has been a blessing. The lessons are detailed and easy to follow, and I love that I can go at my own pace. I've even started selling my candles at local craft fairs, which has given me a new sense of purpose.”
          </p>
        </div>
        <div className="t3-foot">
          <span className="t3-name">Jane H.</span>
          <span className="t3-verified">
            <span className="t3-badge" aria-hidden="true">✔</span>
            Verified Buyer
          </span>
        </div>
      </div>

      <div className="t3-card">
        <div className="t3-media" aria-hidden="true">
          <img className="t3-img" src="/certificated.webp" alt="" />
        </div>
        <div className="t3-body">
          <img className="t3-stars" src="/star.webp" alt="5 star rating" />
          <p className="t3-text">
            “As an artist, I'm always looking for new mediums to explore. This candle-making course has been a fantastic addition to my skill set. The advanced techniques, like color-changing candles and high-relief details, have allowed me to create truly unique pieces. It's opened up a whole new world of creativity for me!”
          </p>
        </div>
        <div className="t3-foot">
          <span className="t3-name">Christina W.</span>
          <span className="t3-verified">
            <span className="t3-badge" aria-hidden="true">✔</span>
            Verified Buyer
          </span>
        </div>
      </div>
    </div>

    {/* MOBILE: carousel */}
    <div className="t3-carousel t3-grid--mobile">
      <div className="t3-track" ref={t3Ref} onScroll={onT3Scroll}>
        <div className="t3-card t3-card--snap">
          <div className="t3-media" aria-hidden="true">
            <img className="t3-img" src="/womanart.webp" alt="" />
          </div>
          <div className="t3-body">
            <img className="t3-stars" src="/star.webp" alt="5 star rating" />
            <p className="t3-text">
              “I've always been concerned about the environment, and this course taught me how to make eco-friendly candles with natural ingredients. The lessons on using soy wax and essential oils were exactly what I was looking for. Now, I make sustainable candles that I feel good about using and selling. This course is a must for anyone interested in green living!”
            </p>
          </div>
          <div className="t3-foot">
            <span className="t3-name">Manda K.</span>
            <span className="t3-verified">
              <span className="t3-badge" aria-hidden="true">✔</span>
              Verified Buyer
            </span>
          </div>
        </div>

        <div className="t3-card t3-card--snap">
          <div className="t3-media" aria-hidden="true">
            <img className="t3-img" src="/notebook.webp" alt="" />
          </div>
          <div className="t3-body">
            <img className="t3-stars" src="/star.webp" alt="5 star rating" />
            <p className="t3-text">
              “After retiring, I was looking for something creative to fill my time, and this candle-making course has been a blessing. The lessons are detailed and easy to follow, and I love that I can go at my own pace. I've even started selling my candles at local craft fairs, which has given me a new sense of purpose.”
            </p>
          </div>
          <div className="t3-foot">
            <span className="t3-name">Jane H.</span>
            <span className="t3-verified">
              <span className="t3-badge" aria-hidden="true">✔</span>
              Verified Buyer
            </span>
          </div>
        </div>

        <div className="t3-card t3-card--snap">
          <div className="t3-media" aria-hidden="true">
            <img className="t3-img" src="/certificated.webp" alt="" />
          </div>
          <div className="t3-body">
            <img className="t3-stars" src="/star.webp" alt="5 star rating" />
            <p className="t3-text">
              “As an artist, I'm always looking for new mediums to explore. This candle-making course has been a fantastic addition to my skill set. The advanced techniques, like color-changing candles and high-relief details, have allowed me to create truly unique pieces. It's opened up a whole new world of creativity for me!”
            </p>
          </div>
          <div className="t3-foot">
            <span className="t3-name">Christina W.</span>
            <span className="t3-verified">
              <span className="t3-badge" aria-hidden="true">✔</span>
              Verified Buyer
            </span>
          </div>
        </div>
      </div>

      <div className="t3-dots" aria-hidden="true">
        <span className={"t3-dot" + (t3Active === 0 ? " is-active" : "")} />
        <span className={"t3-dot" + (t3Active === 1 ? " is-active" : "")} />
        <span className={"t3-dot" + (t3Active === 2 ? " is-active" : "")} />
      </div>
    </div>
  </div>
</section>




      
      {/* GUARANTEE */}
<section className="guar" aria-label="7 day money back guarantee">
  <div className="container">
    <div className="guar-card">
      <div className="guar-left" aria-hidden="true">
        <img className="guar-badge" src="/guarantee.webp" alt="" />
      </div>

      <div className="guar-right">
        <h3 className="guar-title">Customer Satisfaction Is Our #1 Priority!</h3>

        <p className="guar-text">
          We make sure you’re happy with your purchase. You’ll love the course, but in case you don’t, you can
          simply <strong>return it within 7 days</strong>, and we’ll give you a <strong>full refund</strong> no
          questions asked. It’s that simple!
        </p>
      </div>
    </div>
  </div>
</section>

{/* FAQ (FINAL) */}
<FaqSection isMobile={isMobile} />

      <div id="enroll" style={{ height: 1 }} />
    </>
  );
}


function FaqSection({ isMobile }) {
  const items = [
    {
      q: "Why is so Affordable?",
      a: "The course usually costs $97, which many successful students have found to be a great value. However, to gather more success stories and testimonials, it’s currently available for just $17. This limited-time offer is your chance to enhance your candle-making skills without breaking the bank. Once enough testimonials are collected, the price will return to $97. Don't miss out!.",
    },
    {
      q: "How does the course work?",
      a: "The course is in PDF (ebook) format, once purchased you can download it and watch it whenever you want and from wherever you want, either on your phone or your computer",
    },
    {
      q: "How do I get the certificates?",
      a: "After you finish the Candlepreneur Accelerator Course, email candlepreneurcare@gmail.com confirming you completed the course, and we will send your completion certificate.",
    },
    {
      q: "How can I access my ebook?",
      a: "After you make the purchase, your access to the course will be sent to the email address you registered when you purchased the course. You will create your access password and directly access the course, allowing you to participate and access all the materials included.",
    },
    {
      q: "Will you also help me after the course?",
      a: "Yes, you can write to us anytime at our support email candlepreneurcare@gmail.com, our experts are always available.",
    },
    {
      q: "Is it safe to buy this course?",
      a: "Yes, we work with one of the largest and most reliable online course platforms in the USA. The purchase is 100% secure and protected by SSL.",
    },
    {
      q: "Are there any guarantees for this course?",
      a: "That is, if within 7 days, for whatever reason, you feel that the course is not good, that it has not met your expectations, or that it has not recouped your investment",
    },
  ];
  const [open, setOpen] = useState([]);

  useEffect(() => {
    // When switching between desktop/mobile, keep everything closed by default.
    setOpen([]);
  }, [isMobile]);

  const isOpen = (idx) => open.includes(idx);


  const toggle = (idx) => {
    setOpen((prev) => {
      const currentlyOpen = prev.includes(idx);
      if (isMobile) return currentlyOpen ? [] : [idx];
      // desktop: multi-open
      if (currentlyOpen) return prev.filter((i) => i !== idx);
      return [...prev, idx];
    });
  };

  return (
    <section className="faq" aria-label="Frequently asked questions">
      <div className="container">
        <h2 className="faq-title">Any questions? Let us answer them</h2>

        <div className="faq-list">
          {items.map((item, idx) => (
            <div className={"faq-item" + (isOpen(idx) ? " is-open" : "")} key={item.q}>
              <button
                type="button"
                className="faq-q"
                aria-expanded={isOpen(idx)}
                onClick={() => toggle(idx)}
              >
                <span className="faq-qText">{item.q}</span>
                <span className="faq-chev" aria-hidden="true" />
              </button>

              <div className="faq-a">
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function IgCard({ name, src, ariaHidden = false }) {
  return (
    <div className="ig-card" aria-hidden={ariaHidden ? "true" : undefined}>
      <div className="ig-top">
        <div className="ig-avatar" aria-hidden="true" />
        <div className="ig-name">{name}</div>
        <div className="ig-dots" aria-hidden="true">⋮</div>
      </div>

      <div className="ig-photo">
        <img className="ig-img" src={src} alt="" loading="lazy" />
      </div>

      <div className="ig-bottom" aria-hidden="true">
        <span className="ig-btn" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.8 4.6c-1.6-1.6-4.1-1.6-5.7 0L12 7.7 8.9 4.6c-1.6-1.6-4.1-1.6-5.7 0-1.6 1.6-1.6 4.1 0 5.7L12 19.1l8.8-8.8c1.6-1.6 1.6-4.1 0-5.7z"/>
          </svg>
        </span>

        <span className="ig-btn" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>
          </svg>
        </span>

        <span className="ig-btn" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 2 11 13"/>
            <path d="M22 2 15 22 11 13 2 9 22 2z"/>
          </svg>
        </span>
      </div>
    </div>
  );
}


/* =========================
   TESTIMONIALS (ANTIGOS - CAROUSEL)
========================= */
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
          "“This course gave me a real plan instead of just motivation. Having proven templates and clear instructions made it so easy to start taking action.”",
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

/* =========================
   NEW TESTIMONIALS (3 on PC, swipe on mobile)
========================= */
function TestimonialsShowcase() {
  const items = useMemo(
    () => [
      {
        key: "julia",
        name: "Julia T.",
        img: "/Julia-t.webp",
        text:
          "“As a full-time mom, I needed something flexible that I could do from home. The Handmade Candle Making Course was perfect. The step-by-step lessons were so easy to follow, even with my hectic schedule. Now, I’m not only creating beautiful candles but also selling them at local markets. It’s given me the financial independence I’ve always wanted!”",
      },
      {
        key: "brenda",
        name: "Brenda L.",
        img: "/Bendra-l.webp",
        text:
          "“I started this course because I wanted a new hobby, but it quickly turned into something I’m truly passionate about. The techniques taught are so professional that my friends can’t believe I made these candles myself! The course even helped me understand how to market my creations online. I couldn’t be happier!”",
      },
      {
        key: "olivia",
        name: "Olivia G.",
        img: "/Olivia-g.webp",
        text:
          "“I was in a creative rut when I stumbled upon this candle-making course. It reignited my love for crafting. The course is well-structured, and I learned so many new techniques that I had never even considered before. Now, my home is filled with beautiful, aromatic candles that I made myself. It’s been a truly inspiring journey!”",
      },
    ],
    []
  );

  return (
    <div className="t2">
      <div className="t2-grid" aria-label="Student testimonials">
        {items.map((t) => (
          <article className={`t2-card ${t.key}`} key={t.key}>
            <div className="t2-media" aria-hidden="true">
              <Image
                src={t.img}
                alt={t.name}
                fill
                sizes="(max-width: 900px) 88vw, 360px"
                className="t2-img"
                priority={t.key === "julia"}
              />
            </div>

            <div className="t2-body">
              <div className="t2-stars" aria-label="5 star rating">
                {"★★★★★"}
              </div>

              <p className="t2-text">{t.text}</p>

              <div className="t2-foot">
                <span className="t2-name">{t.name}</span>

                <span className="t2-verified">
                  <span className="t2-badge" aria-hidden="true">
                    ✔
                  </span>
                  Verified Buyer
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function AlertNote() {
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const d = new Date();
    const formatted = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(d);

    setDateStr(formatted);
  }, []);

  return (
    <div className="note-card">
      <img className="note-ico" src="/alert.webp" alt="" aria-hidden="true" />

      <div className="note-head">
        <span className="note-label">Note:</span>{" "}
        <span className="note-date">{dateStr || " "}</span>
      </div>

      <div className="note-text">
        <p>
          Because of the high demand, we regret to inform you that{" "}
          <strong>once our current spots are filled we can&apos;t maintain this special discount offer.</strong>
        </p>

        <p>
          We also must inform you that{" "}
          <span className="note-pink">the product is unavailable</span>{" "}
          for purchase on other platforms.
        </p>
      </div>
    </div>
  );
}

/* =========================
   OFFER CARD (NEW)
========================= */
function OfferCard() {
  const [people, setPeople] = useState(211);

  useEffect(() => {
    const min = 210;
    const max = 230;

    const id = setInterval(() => {
      setPeople((prev) => {
        const dir = Math.random() > 0.5 ? 1 : -1;
        const step = 1 + Math.floor(Math.random() * 3); // 1..3
        let next = prev + dir * step;
        if (next < min) next = min;
        if (next > max) next = max;
        return next;
      });
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="offer-card">
      <div className="offer-media" aria-hidden="true">
        <img className="offer-media-img" src="/computer.webp" alt="" />
      </div>

      {/* Mini testimonial (DESKTOP: abaixo da imagem) */}
      <div className="offer-mini offer-mini--desktop">
        <div className="offer-miniCard">
          <div className="offer-miniPhotoWrap" aria-hidden="true">
            <img className="offer-miniPhoto" src="/woman.webp" alt="" />
          </div>

          <div className="offer-miniRight">
            <img className="offer-miniStarsImg" src="/star.webp" alt="5 star rating" />

            <div className="offer-miniTitle">Regained My Confidence!</div>

            <p className="offer-miniText">
              “I was skeptical at first, but this course has completely exceeded my expectations! It’s so easy to
              follow, and I’ve already made my first sale. I finally feel confident in my ability to run my own
              business!”
            </p>

            <div className="offer-miniFoot">
              <span className="offer-miniName">Alysha H.</span>

              <span className="offer-miniVerified">
                <span className="offer-miniBadge" aria-hidden="true">
                  ✔
                </span>
                Verified Buyer
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="offer-body">
        <div className="offer-head">
          <div className="offer-titleRow">
            <div className="offer-title">ART OF PROFESSIONAL CANDLES</div>
            <div className="offer-pill">Almost gone</div>
          </div>

          <div className="offer-reviewsRow">
            <img className="offer-starsImg" src="/star.webp" alt="5 star rating" />
            <div className="offer-reviewsTxt">10,084 Reviews</div>
          </div>

          <div className="offer-live" aria-label="People currently looking">
            <span className="offer-dot" aria-hidden="true" />
            <span>
              <strong>{people}</strong> people are currently looking at this
            </span>
          </div>
        </div>

        <div className="offer-content">
          <div className="offer-subTitle">Act now and you will receive:</div>

          <ul className="offer-list">
            <li>
              <img className="offer-checkImg" src="/check.webp" alt="" aria-hidden="true" />
              <span>
                Art of Professional Candles <span className="offer-pink">($49 Value)</span>
              </span>
            </li>

            <li>
              <img className="offer-checkImg" src="/check.webp" alt="" aria-hidden="true" />
              <span>
                Build Your Candle Business From Scratch <span className="offer-pink">($19 Value)</span>
              </span>
            </li>

            <li>
              <img className="offer-checkImg" src="/check.webp" alt="" aria-hidden="true" />
              <span>
                Complete Guide to Molded Candles <span className="offer-pink">($15 Value)</span>
              </span>
            </li>

            <li>
              <img className="offer-checkImg" src="/check.webp" alt="" aria-hidden="true" />
              <span>
                Essential Guide to Aromatherapy Candles <span className="offer-pink">($15 Value)</span>
              </span>
            </li>

            <li>
              <img className="offer-checkImg" src="/check.webp" alt="" aria-hidden="true" />
              <span>
                Soy Candle Making Essentials <span className="offer-pink">($10 Value)</span>
              </span>
            </li>

            <li>
              <img className="offer-checkImg" src="/check.webp" alt="" aria-hidden="true" />
              <span>Candlepreneur Accelerator Course Certificate</span>
            </li>
          </ul>

          <div className="offer-price">
            <div className="offer-total">
              Total Value: <span className="offer-strike">$108</span>
            </div>
            <div className="offer-today">
              Today Only: <span className="offer-green">$17</span>
            </div>
          </div>

          <a className="offer-cta" href="#enroll">
            GO TO SECURE CHECKOUT <span className="offer-arrow">→</span>
          </a>

          <div className="offer-risk">Try it RISK-FREE for 7 days.</div>
        </div>

        {/* Mini testimonial (MOBILE: mantém no final) */}
        <div className="offer-mini offer-mini--mobile">
          <div className="offer-miniCard">
            <div className="offer-miniPhotoWrap" aria-hidden="true">
              <img className="offer-miniPhoto" src="/woman.webp" alt="" />
            </div>

            <div className="offer-miniRight">
              <img className="offer-miniStarsImg" src="/star.webp" alt="5 star rating" />

              <div className="offer-miniTitle">Regained My Confidence!</div>

              <p className="offer-miniText">
                “I was skeptical at first, but this course has completely exceeded my expectations! It’s so easy to
                follow, and I’ve already made my first sale. I finally feel confident in my ability to run my own
                business!”
              </p>

              <div className="offer-miniFoot">
                <span className="offer-miniName">Alysha H.</span>

                <span className="offer-miniVerified">
                  <span className="offer-miniBadge" aria-hidden="true">
                    ✔
                  </span>
                  Verified Buyer
                </span>
              </div>
            </div>
          </div>
        </div>
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
        text: "No experience is needed! Our course breaks everything down into simple, easy-to-follow steps.",
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
        text: "Try it risk-free for 7 days. If  you’re not satisfied, we’ll give you a full refund no questions asked.",
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
          "Create premium aromatherapy candles with fragrance blending tips and simple, professional methods.",
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

  const [isDesktop, setIsDesktop] = useState(true);
  const [activePage, setActivePage] = useState(0);

  const perViewDesktop = 3;
  const pagesCount = isDesktop ? Math.max(1, items.length - perViewDesktop + 1) : items.length;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const apply = () => setIsDesktop(mq.matches);
    apply();

    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

    const getClosestIndexToLeft = () => {
      const children = Array.from(el.children);
      if (!children.length) return 0;

      const left = el.scrollLeft;
      let bestIndex = 0;
      let bestDist = Infinity;

      children.forEach((child, idx) => {
        const dist = Math.abs(child.offsetLeft - left);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = idx;
        }
      });

      return bestIndex;
    };

    const getClosestIndexToCenter = () => {
      const children = Array.from(el.children);
      if (!children.length) return 0;

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

      return bestIndex;
    };

    const onScroll = () => {
      if (isDesktop) {
        const idx = getClosestIndexToLeft();
        const page = clamp(idx, 0, pagesCount - 1);
        setActivePage(page);
      } else {
        const idx = getClosestIndexToCenter();
        setActivePage(idx);
      }
    };

    const onWheel = (e) => {
      if (!isDesktop) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    let isDown = false;
    let startX = 0;
    let startLeft = 0;

    const onDown = (e) => {
      if (!isDesktop) return;
      isDown = true;
      startX = e.clientX;
      startLeft = el.scrollLeft;
      el.classList.add("is-dragging");
      el.setPointerCapture?.(e.pointerId);
    };

    const onMove = (e) => {
      if (!isDesktop) return;
      if (!isDown) return;
      const dx = e.clientX - startX;
      el.scrollLeft = startLeft - dx;
    };

    const onUp = () => {
      if (!isDesktop) return;
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
  }, [isDesktop, pagesCount]);

  const goTo = (pageIndex) => {
    const el = trackRef.current;
    if (!el) return;

    if (isDesktop) {
      const child = el.children[pageIndex];
      if (!child) return;
      el.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    } else {
      const child = el.children[pageIndex];
      if (!child) return;
      el.scrollTo({
        left: child.offsetLeft - (el.clientWidth - child.clientWidth) / 2,
        behavior: "smooth",
      });
    }
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
        {Array.from({ length: pagesCount }).map((_, i) => (
          <button
            key={i}
            type="button"
            className={`inc-dot ${activePage === i ? "is-active" : ""}`}
            aria-label={`Go to bonus page ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
