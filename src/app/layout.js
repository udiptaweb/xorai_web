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
      <body className="font-serif">
        <Navbar />
        {children}
        <footer >
          <div className="flex flex-row items-center justify-around h-12">
            <div style={{ 'width': '49%' }} >
              <hr style={{ 'borderColor': '#334155' }} />
            </div>
            <div className="text-center" >
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3L86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>          </div>
            <div style={{ 'width': '49%' }}>
              <hr style={{ 'borderColor': '#334155' }} />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="px-5 pb-5 lg:max-w-5xl lg:w-full flex flex-col sm:flex-row justify-center gap-4 items-center">
              <a href="#">Privay Policy</a>
              &#169; Copyright 2024
              <a href="#">Terms and Conditions</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
