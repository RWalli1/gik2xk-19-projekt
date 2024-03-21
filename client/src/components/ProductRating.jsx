import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

function ProductRating({ product }) {
  if (!product) {
    // Display a loading message or similar if the product is still being fetched
    return (
      <Typography variant="body1" textAlign="center">
        Couldn't get product
      </Typography>
    );
  }
  const newRating = product.averageRating; // Extract the average rating from the product object

  return (
    <>
      {/* Display the product rating as read-only */}
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5} // Allow half-star ratings
        value={newRating} // The actual rating value
        readOnly // Make the rating read-only
      />

      {/* Display the average rating in bold typography */}
      <Typography sx={{ fontWeight: "bold" }}>
        Average: {`(${newRating})`} // Display the average rating
      </Typography>
      {/* Display the total number of ratings */}
      <Typography> {`Total ratings: ${product.ratings?.length}`}</Typography>
    </>
  );
}

export default ProductRating; // Export the component for reuse
