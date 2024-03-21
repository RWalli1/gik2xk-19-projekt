import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { List, ListItem } from "@mui/material";

function ProductRatingList({ product }) {
  return (
    <>
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          listStyle: "none", // Remove default list styling
          rowGap: 2, // Space between rows
        }}
      >
        {/* Title for rating details */}
        <Typography variant="h5">Rating details</Typography>
        {/* Average rating */}
        <Typography>
          Average rating for {product.title} is ({product.averageRating})
        </Typography>
        {/* Intro text for list of all ratings */}
        <Typography variant="body">
          All ratings for {product.title} below:
        </Typography>
        {/* List of all individual ratings */}
        <List>
          {product.ratings?.length > 0 ? (
            product.ratings.map((rating, index) => (
              <ListItem key={index}>
                {" "}
                {/* Key for list efficiency */}
                {/* Display rating as read-only */}
                <Rating
                  name={`rating-read-${index}`}
                  defaultValue={2.5}
                  precision={0.5}
                  value={rating}
                  readOnly
                />
                {/* Rating value */}
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {" "}
                  ({rating})
                </Typography>
              </ListItem>
            ))
          ) : (
            <Typography variant="body">Couldn't find any ratings.</Typography> // Message if no ratings found
          )}
        </List>
      </List>
    </>
  );
}

export default ProductRatingList; // Export the component for reuse
