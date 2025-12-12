import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Buvindu Suraweera | Computer Science and Engineering Undergraduate",
  description:
    "Portfolio of Buvindu Suraweera - showcasing web development projects, achievements, and certifications.",
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
        {children}
      </body>
    </html>
  );
}
