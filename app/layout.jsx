import "./globals.css";
import { Roboto, Road_Rage } from "next/font/google";
import { Header } from "./components/Header";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Ticket Generator",
  description: "Generate your ticket for your next events",
  image: "/vercel.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${roadRage.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
