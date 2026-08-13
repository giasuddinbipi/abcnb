"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "./Icons";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const nav = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Products", "/products"],
  ["Capabilities", "/capabilities"],
  ["Sustainability", "/sustainability"],
  ["Contact", "/contact"],
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="abcNB home" onClick={() => setOpen(false)}>
          <span className="brand-logo-wrap">
            <Image src="/logo.jpg" alt="abcNB — A Brand Called No Brand" width={138} height={92} priority />
          </span>
        </Link>

        <nav className={open ? "main-nav open" : "main-nav"} aria-label="Primary navigation">
          {nav.map(([label, href]) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={active ? "nav-link active" : "nav-link"}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          {/* <Link href="mailto:info@abcnb.com" className="button button-primary nav-cta" onClick={() => setOpen(false)}>
            Get a Quote
          </Link> */}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <button
            className="icon-button menu-button"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
