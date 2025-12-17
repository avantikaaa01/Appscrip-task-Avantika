import Image from "next/image";
import PropTypes from "prop-types";
import Card from "../ui/card/card";
import Button from "../ui/buttons/button";

/**
 * ProductCard Component
 * Renders individual product details in a reusable card layout.
 *
 * @param {Object} product - Product data
 * @param {number} product.id - Product ID
 * @param {string} product.title - Product title
 * @param {number} product.price - Product price
 * @param {string} product.image - Product image URL
 */
export default function ProductCard({ product }) {
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(product.price);

  return (
    <Card>
      <Image
        src={product.image}
        alt={`Image of ${product.title}`}
        width={200}
        height={200}
      />
      <h2>{product.title}</h2>
      <p>{formattedPrice}</p>
      <Button label="Add to Cart" />
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
