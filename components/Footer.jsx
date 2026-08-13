import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo">
            <Image src="/logo.jpg" alt="abcNB" width={170} height={110} />
          </div>
          <p className="footer-copy">
            Global readymade garment stock lots, wholesale sourcing and fresh/direct order support from Bangladesh.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <div className="footer-links">
            <Link href="/about">About Us</Link>
            <Link href="/products">Products</Link>
            <Link href="/capabilities">Capabilities</Link>
            <Link href="/sustainability">Sustainability</Link>
          </div>
        </div>

        <div>
          <h3>Contact</h3>
          <div className="footer-contact">
            <a href="mailto:info@abcnb.com"><Mail size={17} /> info@abcnb.com</a>
            <a href="mailto:atikur@abcnb.com"><Mail size={17} /> atikur@abcnb.com</a>
            <span><MapPin size={17} /> 1/C, Level 5, Road 2, Sector 3, Uttara, Dhaka-1230</span>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} abcNB. All rights reserved.</span>
        <span>A Brand Called No Brand</span>
      </div>
    </footer>
  );
}
