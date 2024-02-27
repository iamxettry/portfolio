import { Inter ,Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500","600" ,"700"]  });

export const metadata = {
  title: "Home",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={`bg-primary${poppins.className} ` }>
        <Navbar/>
        <main className="max-w-4xl mx-auto ">

        {children}
        </main>
        
        </body>
    </html>
  );
}
