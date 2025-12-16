import Card from "../ui/card/card";
import Button from "../ui/buttons/button";

export default function ProductCard({ product }) {
  return (
    <Card>
      <img
        src={product.image}
        alt={product.title}
        width="120"
        height="120"
      />
      <h2>{product.title}</h2>
      <p>₹ {product.price}</p>
      <Button label="Add to Cart" />
    </Card>
  );
}
