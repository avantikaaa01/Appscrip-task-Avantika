import Heading from "../components/ui/typography/heading";
import ProductCard from "../components/product-card/productCard";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Product Listing Page",
  description: "PLP built using Next.js with SSR",
};

export default async function Page() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();


  return (
    <main>
      <Heading text="DISCOVER OUR PRODUCTS" />
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
