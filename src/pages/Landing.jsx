import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroScene from "../components/HeroScene";
import FeatureCard from "../components/FeatureCard";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in sections
      gsap.utils.toArray(".section").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Parallax the hero canvas on scroll
      gsap.to(".hero-canvas", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="landing">
      <header className="nav">
        <div className="logo">Credify</div>
        <nav>
          <a href="#features">Features</a>
          <a href="#verify">Verification</a>
          <a href="#employers">Employers</a>
          <a href="#cta" className="cta">
            Try Demo
          </a>
        </nav>
      </header>

      <section className="hero" ref={heroRef}>
        <div className="hero-text">
          <h1>Micro-Credential Aggregator</h1>
          <p>
            Unify, verify, and showcase your skills in one trusted profile
            aligned with NSQF.
          </p>
          <div className="hero-actions">
            <a href="#cta" className="btn primary">
              Get Early Access
            </a>
            <a href="#features" className="btn">
              Learn More
            </a>
          </div>
        </div>
        <HeroScene />
      </section>

      <section id="features" className="section grid">
        <FeatureCard
          title="Unified Profile"
          desc="Aggregate certificates from universities, edtech, and training bodies."
          icon="🗂️"
        />
        <FeatureCard
          title="Trusted Verification"
          desc="DigiLocker, Skill India Digital, and blockchain proofs for instant trust."
          icon="✅"
          accent="#2dd4bf"
        />
        <FeatureCard
          title="Stackable Pathways"
          desc="Map micro-credentials to NSQF levels and career journeys."
          icon="🧩"
          accent="#6ee7ff"
        />
      </section>

      <section id="verify" className="section split">
        <div>
          <h2>Verify in Seconds</h2>
          <p>
            Share a secure link or QR. Employers and institutions validate
            instantly with cryptographic signatures and issuer attestation.
          </p>
          <ul className="bullets">
            <li>One-click verification page</li>
            <li>DigiLocker + Skill India Digital ready</li>
            <li>Optional blockchain proof anchor</li>
          </ul>
        </div>
        <div className="verify-mock">
          <div className="badge-ring">
            <div className="badge-core">NSQF Lv. 5</div>
          </div>
          <div className="qr-card">
            <div className="qr-box" />
            <div className="qr-meta">
              <strong>Credential</strong>
              <span>Issued: NCVET Recognized</span>
              <span>ID: CRD-24-0912</span>
            </div>
          </div>
        </div>
      </section>

      <section id="employers" className="section split">
        <div>
          <h2>Employer Portal</h2>
          <p>
            Search candidates by verified skills, export reports, and streamline
            hiring.
          </p>
          <div className="filter-pills">
            <button className="pill">NSQF 4+</button>
            <button className="pill">Python</button>
            <button className="pill">Cybersecurity</button>
            <button className="pill">Last 6 mo.</button>
          </div>
        </div>
        <div className="employer-list">
          <div className="candidate">
            <div>
              <strong>Priya S.</strong>
              <span>Data Analysis • NSQF 5</span>
            </div>
            <button className="btn small">View</button>
          </div>
          <div className="candidate">
            <div>
              <strong>Arjun K.</strong>
              <span>Cybersecurity • NSQF 6</span>
            </div>
            <button className="btn small">View</button>
          </div>
          <div className="candidate">
            <div>
              <strong>Anita R.</strong>
              <span>Frontend Dev • NSQF 5</span>
            </div>
            <button className="btn small">View</button>
          </div>
        </div>
      </section>

      <section id="cta" className="section center">
        <h2>Showcase your skills with Credify</h2>
        <p>Add a couple of certificates and see your 3D badge come alive.</p>
        <button className="btn primary">Open Demo</button>
      </section>

      <footer className="footer">
        NCVET-aligned • Privacy-first • Scalable
      </footer>
    </div>
  );
}
