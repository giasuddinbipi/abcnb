import { BatteryCharging, Droplets, HeartHandshake, Leaf, PackageCheck, Recycle, ShieldCheck, Sparkles, Waves } from "../../components/Icons";
import PageHero from "../../components/PageHero";
import ContactCard from "../../components/ContactCard";
import { sustainability } from "../../data/site";

export const metadata = { title: "Sustainability" };

const icons = [BatteryCharging, Droplets, Recycle, Leaf, Waves, PackageCheck, HeartHandshake, ShieldCheck, Sparkles];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="SUSTAINABILITY"
        title="Responsible sourcing projects across the apparel value chain."
        text="The company profile outlines practical sustainability areas that can be incorporated where applicable, from resource efficiency and materials to compliance and carbon measurement."
      />

      <section className="section">
        <div className="container sustainability-grid">
          {sustainability.map(([title, text], index) => {
            const Icon = icons[index];
            return (
              <div className="card sustain-card" key={title}>
                <div className="sustain-icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container card responsible-card">
          <div>
            <div className="eyebrow">RESPONSIBLE APPROACH</div>
            <h2 className="section-title">Designed to support buyer-specific compliance requirements.</h2>
            <p className="muted-copy">Several projects and certifications in the profile are explicitly described as applicable depending on the sourcing programme, factory and buyer requirement.</p>
          </div>
          <Leaf size={72} />
        </div>
      </section>

      <section className="section">
        <div className="container"><ContactCard /></div>
      </section>
    </>
  );
}
