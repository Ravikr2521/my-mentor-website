import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import 'aos/dist/aos.css'; 
import "./globals.css";
import "./custom.css";
import Navbar from "@/components/Navbar/Navbar";
import FooterSection from "@/components/FooterSection/FooterSection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from 'next/script';
import AOSInit from "@/components/AOSInit"; 

const BootstrapClient = dynamic(
  () => import("@/components/bootstrapClient/BootstrapClient"),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true}>
        <header>
          <Navbar />
        </header>
        <ToastContainer
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="light"
        />
        <main className="children_margin">{children}</main>
        <BootstrapClient />
        <footer>
          <FooterSection />
        </footer>

        <Script src="https://unpkg.com/aos@next/dist/aos.js" strategy="afterInteractive" />
        <AOSInit />
      </body>
    </html>
  );
}
