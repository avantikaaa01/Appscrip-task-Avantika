import ProductCard from "../components/product-card/productCard";

const products = [
  {
    id: 1,
    title: "Product One",
    price: 99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Product Two",
    price: 199,
    image: "https://via.placeholder.com/150",
  },
];

export default function Page() {
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
