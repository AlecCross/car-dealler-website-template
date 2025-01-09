import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/Container/Container";
import Nav from "@/components/Nav/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PayPalace Payment Responsive",
  description: "PayPalace Payment Figma Responsive Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Container>
          <Nav />
          <main>{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
