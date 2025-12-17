export const dynamic = "force-dynamic";

import ProductCard from "../product-card/productCard";

export default async function ProductList() {
  let products = [];

  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    products = await res.json();
  } catch (error) {
    console.error("SSR product fetch failed:", error);
    return <p>Unable to load products.</p>;
  }

  return (
    <section className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
