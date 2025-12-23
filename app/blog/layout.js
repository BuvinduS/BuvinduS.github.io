import { Outfit, Ovo } from "next/font/google";
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Blog | Buvindu Suraweera",
  description: "Blog of Buvindu Suraweera",
  icons: {
    icon: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
    shortcut: "/favicon_io/android-chrome",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden min-h-screen bg-gradient-to-br from-gray-700 to-gray-100`}
      >
        {/* Wraps the custom styling of the blog in a seprate div so that react doesn't complain about hydration mismatches */}
        <div className="min-h-screen bg-gray-800">{children}</div>
      </body>
    </html>
  );
}
