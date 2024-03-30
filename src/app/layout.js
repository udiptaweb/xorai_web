import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Xorai TechLab - Innovative Software Development and Research",
  description: "Xorai TechLab specializes in cutting-edge software development and research, crafting innovative solutions for tomorrow's problems. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer >
          <div className="flex flex-row items-center justify-around h-16">
            <div style={{ 'width': '49%' }} >
              <hr style={{ 'border-color': '#334155' }} />
            </div>
            <div className="text-center" >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3L86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>          </div>
            <div style={{ 'width': '49%' }}>
              <hr style={{ 'border-color': '#334155' }} />
            </div>
          </div>
          <div>
          <p className="p-5">
            <a>Privay Policy</a>
          </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
