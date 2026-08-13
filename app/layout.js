import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    default: "abcNB | Readymade Garments Sourcing from Bangladesh",
    template: "%s | abcNB",
  },
  description: "abcNB — global readymade garment stock lots, wholesale and fresh/direct order sourcing from Bangladesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
