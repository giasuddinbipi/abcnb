function BaseIcon({ children, size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const Moon = (props) => <BaseIcon {...props}><path d="M20 15.2A8 8 0 0 1 8.8 4a7 7 0 1 0 11.2 11.2Z" /></BaseIcon>;
export const Sun = (props) => <BaseIcon {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></BaseIcon>;
export const Menu = (props) => <BaseIcon {...props}><path d="M4 7h16M4 12h16M4 17h16"/></BaseIcon>;
export const X = (props) => <BaseIcon {...props}><path d="m6 6 12 12M18 6 6 18"/></BaseIcon>;
export const ArrowRight = (props) => <BaseIcon {...props}><path d="M5 12h14M14 7l5 5-5 5"/></BaseIcon>;
export const Mail = (props) => <BaseIcon {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></BaseIcon>;
export const MapPin = (props) => <BaseIcon {...props}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></BaseIcon>;
export const ExternalLink = (props) => <BaseIcon {...props}><path d="M14 5h5v5M19 5l-9 9"/><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></BaseIcon>;
export const Boxes = (props) => <BaseIcon {...props}><path d="m12 3 7 4-7 4-7-4 7-4Z"/><path d="m5 7v8l7 4 7-4V7M12 11v8"/></BaseIcon>;
export const Leaf = (props) => <BaseIcon {...props}><path d="M20 4C12 4 5 8 5 14c0 3 2 5 5 5 6 0 10-7 10-15Z"/><path d="M5 20c2-5 6-8 11-10"/></BaseIcon>;
export const Shirt = (props) => <BaseIcon {...props}><path d="m8 4-4 2-2 5 4 2v7h12v-7l4-2-2-5-4-2a4 4 0 0 1-8 0Z"/></BaseIcon>;
export const BadgeCheck = (props) => <BaseIcon {...props}><path d="m12 3 2 2 3-.3.8 2.9 2.5 1.5-1.4 2.6 1.4 2.6-2.5 1.5-.8 2.9-3-.3-2 2-2-2-3 .3-.8-2.9-2.5-1.5 1.4-2.6L3.7 9 6.2 7.5 7 4.6l3 .3 2-2Z"/><path d="m9 12 2 2 4-4"/></BaseIcon>;
export const Factory = (props) => <BaseIcon {...props}><path d="M3 21V9l6 3V8l6 4V5l6 3v13H3Z"/><path d="M7 17h2M12 17h2M17 17h2"/></BaseIcon>;
export const Globe2 = (props) => <BaseIcon {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></BaseIcon>;
export const PackageCheck = (props) => <BaseIcon {...props}><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="M4 7v10l8 4 8-4V7M12 11v4"/><path d="m14 16 1.5 1.5L19 14"/></BaseIcon>;
export const ShieldCheck = (props) => <BaseIcon {...props}><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></BaseIcon>;
export const BarChart3 = (props) => <BaseIcon {...props}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></BaseIcon>;
export const BriefcaseBusiness = (props) => <BaseIcon {...props}><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M8 7V5h8v2M3 12h18M10 12v2h4v-2"/></BaseIcon>;
export const Handshake = (props) => <BaseIcon {...props}><path d="m8 11 3-3a2 2 0 0 1 3 0l2 2"/><path d="m3 12 4-4 3 3M21 12l-4-4-3 3"/><path d="m8 15 2 2a2 2 0 0 0 3 0l4-4"/></BaseIcon>;
export const SearchCheck = (props) => <BaseIcon {...props}><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5M8 10l1.5 1.5L12 9"/></BaseIcon>;
export const Layers3 = (props) => <BaseIcon {...props}><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4M4 17l8 4 8-4"/></BaseIcon>;
export const Tags = (props) => <BaseIcon {...props}><path d="M3 5v6l8 8 8-8-6-6H3Z"/><circle cx="8" cy="10" r="1"/></BaseIcon>;
export const Clock3 = (props) => <BaseIcon {...props}><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></BaseIcon>;
export const Gauge = (props) => <BaseIcon {...props}><path d="M4 18a8 8 0 1 1 16 0"/><path d="m12 14 4-4M7 18h10"/></BaseIcon>;
export const UsersRound = (props) => <BaseIcon {...props}><circle cx="9" cy="8" r="3"/><path d="M3 20c0-4 2-6 6-6s6 2 6 6"/><circle cx="17" cy="9" r="2"/><path d="M15 15c3 0 5 1.5 5 5"/></BaseIcon>;
export const BatteryCharging = (props) => <BaseIcon {...props}><rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 10v4M11 9l-2 4h3l-2 4"/></BaseIcon>;
export const Droplets = (props) => <BaseIcon {...props}><path d="M9 3S4 9 4 13a5 5 0 0 0 10 0c0-4-5-10-5-10ZM17 8s-3 4-3 6a3 3 0 1 0 6 0c0-2-3-6-3-6Z"/></BaseIcon>;
export const HeartHandshake = (props) => <BaseIcon {...props}><path d="M12 20s-8-4.5-8-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-6 10-6 10Z"/><path d="m8 13 2 2 4-4"/></BaseIcon>;
export const Recycle = (props) => <BaseIcon {...props}><path d="m9 5 3-3 3 3M12 2v5M18 9l4 1-1 4M22 10l-5 3M6 15l-1 4-4-1M5 19l3-5"/></BaseIcon>;
export const Sparkles = (props) => <BaseIcon {...props}><path d="m12 3 1.4 3.6L17 8l-3.6 1.4L12 13l-1.4-3.6L7 8l3.6-1.4L12 3ZM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14ZM19 14l.7 1.8L21.5 17l-1.8.7L19 19.5l-.7-1.8L16.5 17l1.8-.7L19 14Z"/></BaseIcon>;
export const Waves = (props) => <BaseIcon {...props}><path d="M3 8c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 2 2M3 14c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 2 2"/></BaseIcon>;
