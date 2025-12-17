import "./globals.css";

export const metadata = {
  title: "Product Listing",
  description: "Discover amazing products",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Product Listing",
    description: "Discover amazing products",
    type: "website",
    icons: {
      icon: "/favicon.ico",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
