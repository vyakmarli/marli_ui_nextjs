import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Sans } from 'next/font/google';
import StyledComponentsRegistry from "@/lib/registry";
import "./global.css";
import { color } from "@/tokens";


const font_body = localFont({
  src: [
    { path: "../Monocraft Nerd Font/Monocraft Nerd Font-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../Monocraft Nerd Font/Monocraft Nerd Font-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../Monocraft Nerd Font/Monocraft Nerd Font-700-normal.woff2", weight: "700", style: "normal" }
  ],
  variable: "--font_body",
  display: "swap"
});

const font_heading = IBM_Plex_Sans({
  weight: ["700", "600", "500"],
  style: "normal",
  variable: "--font_heading",
  subsets: ["cyrillic", "latin"],
  display: "swap"
});


export const metadata: Metadata = {
  title: "Marli_UI",
  description: "UI library for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font_body.variable} ${font_heading.variable}`}>
      <body
        style={{
          backgroundColor: color.gray[9],
          color: color.gray[1]
        }}
      >
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
