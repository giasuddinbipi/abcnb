"use client";

import Link from "next/link";
import { ArrowRight, Boxes, Leaf, Shirt } from "./Icons";
import { useEffect, useState } from "react";

const slides = [
  {
    kicker: "READY STOCK • WORLDWIDE",
    title: "Garment stock lots built for fast-moving markets.",
    text: "Stock lots, cancellation, excess, overrun, mix lots and wholesale sourcing across woven, non-woven, denim and synthetic categories.",
    metric: "Global",
    metricLabel: "shipping reach",
    icon: Boxes,
    className: "slide-stock",
    href: "/products",
    cta: "Explore stock services",
  },
  {
    kicker: "FRESH / DIRECT ORDERS",
    title: "From buyer brief to Bangladesh FOB production.",
    text: "Connected backward-linkage facilities, coordinated factory sourcing and practical support across costing, production and market requirements.",
    metric: "1.2M",
    metricLabel: "pcs annual capacity",
    icon: Shirt,
    className: "slide-fresh",
    href: "/capabilities",
    cta: "View capabilities",
  },
  {
    kicker: "RESPONSIBLE SOURCING",
    title: "Quality, compliance and sustainability in the supply chain.",
    text: "Projects can cover energy efficiency, water, recycling, preferred materials, packaging, social compliance and carbon initiatives where applicable.",
    metric: "360°",
    metricLabel: "sourcing perspective",
    icon: Leaf,
    className: "slide-sustain",
    href: "/sustainability",
    cta: "Our sustainability focus",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[index];
  const Icon = slide.icon;

  return (
    <section className={`hero-slider ${slide.className}`} aria-roledescription="carousel">
      <div className="hero-decoration hero-decoration-one" />
      <div className="hero-decoration hero-decoration-two" />
      <div className="container hero-content">
        <div className="hero-copy">
          <div className="eyebrow light-eyebrow">{slide.kicker}</div>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          <div className="hero-actions">
            <Link className="button button-light" href={slide.href}>
              {slide.cta} <ArrowRight size={18} />
            </Link>
            <Link className="button button-ghost-light" href="/about">About abcNB</Link>
          </div>
        </div>
        <div className="hero-metric-card">
          <div className="hero-icon"><Icon size={32} /></div>
          <strong>{slide.metric}</strong>
          <span>{slide.metricLabel}</span>
        </div>
      </div>
      <div className="container slider-dots" aria-label="Slider controls">
        {slides.map((item, itemIndex) => (
          <button
            type="button"
            key={item.title}
            aria-label={`Show slide ${itemIndex + 1}`}
            aria-current={index === itemIndex ? "true" : undefined}
            className={index === itemIndex ? "slider-dot active" : "slider-dot"}
            onClick={() => setIndex(itemIndex)}
          />
        ))}
      </div>
    </section>
  );
}
