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


        <Script id="utmify-pixel-init" strategy="afterInteractive">
          {`
            window.pixelId = "69a8389dc3d164212bc33841";
          `}
        </Script>


        <Script
          src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}