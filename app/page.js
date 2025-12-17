import ProductCard from "../components/product-card/productCard";

export const dynamic = "force-dynamic";

export default async function Page() {
  let products = [
    {
      id: 1,
      title: "Sample Product",
      price: 99.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  try {
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : process.env.NEXT_PUBLIC_SITE_URL;

    const res = await fetch(`${baseUrl}/api/products`, {
      cache: "no-store",
    });

    if (res.ok) {
      products = await res.json();
    }
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
