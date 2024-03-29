import type { Metadata } from "next";
import { Inter, Crimson_Text ,Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const bricolageGrotesque = Bricolage_Grotesque({ weight: "400", subsets: ["latin"] });
const crimson = Crimson_Text({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${bricolageGrotesque.className} ${crimson.className} bg-background`}>{children}</body>
    </html>
  );
}
