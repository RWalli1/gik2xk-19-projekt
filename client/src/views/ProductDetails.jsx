import ProductItemLarge from "../components/ProductItemLarge";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOne } from "../services/ProductService";

function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getOne(id)
  .then(product => setProduct(product));
  }, [id]);

  console.log(product);
  const testProduct = {
    title: "Elias adventure 7",
    description: "äventyr",
    price: 399,
    imageUrl: "https://cdn.cafe.se/app/uploads/2020/07/4abe67e1-mobilspel.png",
    averageRating: 1.3,
    ratings: [3, 3],
  };
  return (
    <>
      Product details
      <ProductItemLarge product={product} />
    </>
  );
}

export default ProductDetails;
