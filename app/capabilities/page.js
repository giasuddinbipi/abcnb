import { Clock3, Factory, Gauge, UsersRound } from "../../components/Icons";
import PageHero from "../../components/PageHero";
import ContactCard from "../../components/ContactCard";
import { genders, niches } from "../../data/site";

export const metadata = { title: "Capabilities" };

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="CAPABILITIES"
        title="Commercial capacity for diverse apparel programmes."
        text="Core lead-time, capacity, MOQ, gender and niche capabilities from the abcNB company profile."
      />

      <section className="section">
        <div className="container icon-grid four-col">
          <div className="card metric-card"><Clock3 /><span>Local fabrics</span><strong>75–90 days</strong></div>
          <div className="card metric-card"><Clock3 /><span>Imported fabrics</span><strong>90–120 days</strong></div>
          <div className="card metric-card"><Factory /><span>Annual capacity</span><strong>1.2M pcs</strong><small>based on outsourced aligned factories</small></div>
          <div className="card metric-card"><Gauge /><span>MOQ / MCQ</span><strong>5,000 / 3,000</strong><small>pieces</small></div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split-layout">
          <div>
            <div className="eyebrow">GENDER CAPABILITY</div>
            <h2 className="section-title">Serving broad consumer segments.</h2>
            <div className="large-chip-grid">
              {genders.map((item) => <span key={item}><UsersRound size={18} /> {item}</span>)}
            </div>
          </div>
          <div>
            <div className="eyebrow">NICHE CAPABILITY</div>
            <h2 className="section-title">A versatile sourcing mix.</h2>
            <div className="tag-cloud compact">
              {niches.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card qr-card">
          <div>
            <div className="eyebrow">QR MODEL FOR REGIONAL BUSINESS</div>
            <h2>Quick Response</h2>
            <p>A supply-chain model designed to respond quickly to regional market demand.</p>
          </div>
          <div className="qr-mark">QR</div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container"><ContactCard /></div>
      </section>
    </>
  );
}
