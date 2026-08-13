import { Mail, MapPin } from "./Icons";

export default function ContactCard() {
  return (
    <div className="contact-panel card">
      <div>
        <span className="mini-label">CONTACT</span>
        <h2>Start a sourcing conversation.</h2>
        <p>Share your required category, quantity, target market and buying requirement.</p>
      </div>
      <div className="contact-lines">
        <a href="mailto:info@abcnb.com"><Mail size={18} /> info@abcnb.com</a>
        <a href="mailto:atikur@abcnb.com"><Mail size={18} /> atikur@abcnb.com</a>
        <span><MapPin size={18} /> 1/C, Level 5, Road 2, Sector 3, Uttara, Dhaka-1230</span>
      </div>
    </div>
  );
}
