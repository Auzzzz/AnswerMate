import "@/app/globals.css";
import HomeNavbar from "@/components/home/Navbar";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "AnswerM8 | Dashboard",
    description: "Use AnswerM8 at your next event to engage with your audience.",
  };

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <HomeNavbar />
      
       {children}
      </body>
    </html>
  );
}
