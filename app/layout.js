import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Head from "next/head";
export const maxDuration = 60


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AutoMation",
  description: "Приложение, предназначено да поеме повторяемите задачи за автокъщи, оптимизирайки операциите и увеличавайки производителността",
  icons: {
    icon: '/Logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-blacks">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#8936FF" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/icon512_rounded.png" sizes="512x512" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#8936FF" />
        <meta name="msapplication-TileImage" content="/icon512_rounded.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
