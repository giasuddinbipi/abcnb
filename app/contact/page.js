import { ExternalLink, Mail, MapPin } from "../../components/Icons";
import PageHero from "../../components/PageHero";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Tell us what you are looking to source."
        text="Reach abcNB for stock availability, wholesale requirements, fresh/direct order enquiries and regional business opportunities."
      />

      <section className="section">
        <div className="container contact-page-grid">
          <div className="card contact-detail-card">
            <div className="contact-detail-icon"><Mail /></div>
            <span>Email</span>
            <a href="mailto:info@abcnb.com">info@abcnb.com</a>
            <a href="mailto:atikur@abcnb.com">atikur@abcnb.com</a>
          </div>
          <div className="card contact-detail-card">
            <div className="contact-detail-icon"><MapPin /></div>
            <span>Office</span>
            <p>1/C, Level 5, Road 2, Sector 3, Uttara, Dhaka-1230</p>
            <a href="/about#location">View map <ExternalLink size={15} /></a>
          </div>
          <div className="card contact-detail-card">
            <div className="contact-detail-icon"><ExternalLink /></div>
            <span>Website</span>
            <a href="https://abcnb.com" target="_blank" rel="noreferrer">abcnb.com</a>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container card inquiry-card">
          <div>
            <div className="eyebrow">ENQUIRY CHECKLIST</div>
            <h2 className="section-title">For a faster response, include:</h2>
          </div>
          <div className="inquiry-list">
            <span>Product / category</span>
            <span>Required quantity</span>
            <span>Target price / buying basis</span>
            <span>Destination market</span>
            <span>Required timeline</span>
            <span>Any compliance requirement</span>
          </div>
          <a className="button button-primary" href="mailto:info@abcnb.com?subject=Garment%20Sourcing%20Enquiry">Email your enquiry</a>
        </div>
      </section>
    </>
  );
}
