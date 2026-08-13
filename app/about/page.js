import { BarChart3, BriefcaseBusiness, Factory, Globe2, Handshake, SearchCheck } from "../../components/Icons";
import PageHero from "../../components/PageHero";
import ContactCard from "../../components/ContactCard";
import { strengths } from "../../data/site";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        title="Global garment sourcing with Bangladesh at the core."
        text="abcNB works across global readymade garment stock lots and fresh/direct order opportunities, with an emphasis on reliability, transparency, professionalism and quality."
      />

      <section className="section">
        <div className="container split-layout">
          <div>
            <div className="eyebrow">OUR PROFILE</div>
            <h2 className="section-title">A practical, market-aware sourcing approach.</h2>
            <p className="section-lead">abcNB ships worldwide and is actively seeking opportunities to expand into new markets.</p>
            <p className="muted-copy">
              The business profile highlights more than 24 years of industry experience, strong connections with backward-linkage facilities, close factory coordination, and experience in business analysis, forecasting, business modelling, pricing strategies and identifying new market opportunities.
            </p>
          </div>
          <div className="icon-grid two-col">
            <div className="card icon-card"><BriefcaseBusiness /><h3>Industry experience</h3><p>Commercial garment knowledge built through long-term industry involvement.</p></div>
            <div className="card icon-card"><Factory /><h3>Factory coordination</h3><p>Close links with factories and backward-linkage facilities.</p></div>
            <div className="card icon-card"><BarChart3 /><h3>Commercial analysis</h3><p>Forecasting, modelling, pricing and market-opportunity thinking.</p></div>
            <div className="card icon-card"><SearchCheck /><h3>Quality focus</h3><p>In-house quality assurance is part of the stated ready-stock commitment.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split-layout reverse-mobile">
          <div className="card bangladesh-card">
            <Globe2 size={36} />
            <div className="eyebrow">WHY BANGLADESH?</div>
            <h2>Built around a globally recognised apparel sourcing ecosystem.</h2>
            <p>Bangladesh is described in the company profile as a trusted apparel sourcing hub, with readymade garments imported by more than 150 countries.</p>
          </div>
          <div>
            <div className="eyebrow">OUR STRENGTH</div>
            <h2 className="section-title">Capabilities that support dependable supply.</h2>
            <div className="strength-list">
              {strengths.map((item) => <span key={item}><Handshake size={16} /> {item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="location">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="eyebrow">VISIT US</div>
              <h2 className="section-title">Uttara, Dhaka</h2>
              <p className="muted-copy">1/C, Level 5, Road 2, Sector 3, Uttara, Dhaka-1230</p>
            </div>
          </div>
          <div className="map-frame">
            <iframe
              title="abcNB office location"
              src="https://www.google.com/maps?q=1%2FC%2C%20Level%205%2C%20Road%202%2C%20Sector%203%2C%20Uttara%2C%20Dhaka-1230&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container"><ContactCard /></div>
      </section>
    </>
  );
}
