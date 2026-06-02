import type { Metadata } from "next";
import { Caveat, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import SiteHeader from "@/components/marketing/SiteHeader";
import RevealEffects from "@/components/marketing/RevealEffects";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Jour J — Automatisez les célébrations d'équipe à Paris",
  description:
    "Jour J aide les équipes RH à automatiser les anniversaires et anniversaires de travail des collaborateurs : règles, validation manager, préférences alimentaires, pâtisseries partenaires et livraison à Paris.",
  icons: ["/assets/jour_j_calendar_icon.svg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} ${caveat.variable}`}
    >
      <body>
        <SiteHeader />
        <main>{children}</main>
        <RevealEffects />
      </body>
    </html>
  );
}
