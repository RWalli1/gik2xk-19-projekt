import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

function ProductRating({ product }) {
  return (
    <>
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        value={product.averageRating}
        readOnly
      />
      <Typography sx={{fontWeight:'bold'}}>
        {`(${product.averageRating})`}
      </Typography>
      <Typography> {`Total ratings: ${product.ratings.length}`}</Typography>
    </>
  );
}

export default ProductRating;
