import ProductCard from "../components/product-card/productCard";

export const dynamic = "force-dynamic";

export default async function Page() {
  let products = [];

  try {
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.NEXT_PUBLIC_SITE_URL;

    const res = await fetch(`${baseUrl}/api/products`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    products = await res.json();
  } catch (error) {
    console.error("SSR fetch error:", error);
  }

  return (
    <main>
      <h1>DISCOVER THE PRODUCTS</h1>

      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
