import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
// In app/layout.tsx or app/globals.css
import 'bootstrap/dist/css/bootstrap.min.css';


// --- Updated with your details ---
export const metadata: Metadata = {
  title: "James Ford - Computer Science Portfolio",
  description: "Personal portfolio for James Ford, a computer science student specializing in risk management, software development, and AI. Featuring an AI Resume Analyst.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body">
        <div className="aurora-background"></div>
        <Header />
        <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}