import "./globals.css";

export const metadata = {
  title: "Art of Professional Candles",
  description: "Create & Sell Candles from Home—No Experience? No Problem!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}