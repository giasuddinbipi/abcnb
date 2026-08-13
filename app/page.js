import Link from "next/link";
import { ArrowRight, BadgeCheck, Factory, Globe2, Leaf, PackageCheck, ShieldCheck } from "../components/Icons";
import HeroSlider from "../components/HeroSlider";
import ContactCard from "../components/ContactCard";
import { niches, stockServices } from "../data/site";

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="stats-band">
        <div className="container stats-grid">
          <div><strong>24+</strong><span>years of industry experience</span></div>
          <div><strong>1.2M</strong><span>pcs annual capacity</span></div>
          <div><strong>5,000</strong><span>pcs stated MOQ</span></div>
          <div><strong>Worldwide</strong><span>shipping orientation</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container split-layout">
          <div>
            <div className="eyebrow">WHO WE ARE</div>
            <h2 className="section-title">A sourcing partner for ready stock and direct orders.</h2>
            <p className="section-lead">
              abcNB operates in the global readymade garments stock lot business across international brands and categories, while actively seeking opportunities in new markets.
            </p>
            <p className="muted-copy">
              The company positions reliability, transparency, professionalism and in-house quality assurance as central to its ready-stock approach.
            </p>
            <Link href="/about" className="text-link">Learn about abcNB <ArrowRight size={17} /></Link>
          </div>
          <div className="feature-stack">
            <div className="feature-card"><PackageCheck /><div><h3>Ready-stock sourcing</h3><p>Stock lots, cancellation, excess, overrun, mix lots and wholesale.</p></div></div>
            <div className="feature-card"><Factory /><div><h3>Fresh / direct order support</h3><p>Backward-linkage connections and coordination with aligned factories.</p></div></div>
            <div className="feature-card"><ShieldCheck /><div><h3>Quality minded</h3><p>A structured focus on quality assurance beyond standard export practice.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow">READY STOCK</div>
              <h2 className="section-title">Flexible sourcing formats.</h2>
            </div>
            <Link href="/products" className="button button-secondary">View Products <ArrowRight size={17} /></Link>
          </div>
          <div className="pill-grid">
            {stockServices.map((item) => <div className="pill-card" key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow">NICHE CAPABILITY</div>
              <h2 className="section-title">From essentials to specialised categories.</h2>
            </div>
          </div>
          <div className="tag-cloud">
            {niches.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container three-up">
          <div className="dark-feature"><Globe2 /><h3>Why Bangladesh</h3><p>Bangladesh is presented as a trusted global apparel sourcing hub with broad international market access.</p></div>
          <div className="dark-feature"><BadgeCheck /><h3>Commercial strengths</h3><p>Backward linkage, versatility, competitive price, quality, workforce and commitment are core strengths.</p></div>
          <div className="dark-feature"><Leaf /><h3>Responsible sourcing</h3><p>Energy, water, materials, packaging, social compliance and carbon initiatives can form part of the sourcing programme.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ContactCard />
        </div>
      </section>
    </>
  );
}
