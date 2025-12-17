import ProductCard from "../components/product-card/productCard";

export default async function Page() {
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
    console.error("Product fetch failed:",error);
  }

  return (
    <main>
      <header>
        <h1 className="heading">DISCOVER THE PRODUCTS</h1>
      </header>

      {products.length === 0 ? (
        <p>Unable to load products.</p>
      ) : (
        <section className="grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </main>
  );
}
