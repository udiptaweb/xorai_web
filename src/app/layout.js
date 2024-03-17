import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Xorai TechLab - Innovative Software Development and Research",
  description: "Xorai TechLab specializes in cutting-edge software development and research, crafting innovative solutions for tomorrow's problems. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
