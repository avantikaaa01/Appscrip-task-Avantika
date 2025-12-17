import "./globals.css";

export const metadata = {
  title: "Product Listing",
  description: "Discover amazing products",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Product Listing",
    description: "Discover amazing products",
    type: "website" 
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
