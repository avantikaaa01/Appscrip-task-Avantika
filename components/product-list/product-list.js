"use client";

import { useEffect, useState } from "react";
import ProductCard from "../product-card/productCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Unable to load products.</p>;

  return (
    <section className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
