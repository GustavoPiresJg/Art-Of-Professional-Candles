import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Art of Professional Candles",
  description: "Create & Sell Candles from Home—No Experience? No Problem!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-subids
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}