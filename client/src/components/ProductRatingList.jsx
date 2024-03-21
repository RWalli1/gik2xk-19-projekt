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
          listStyle: "none", 
          rowGap: 2, 
        }}
      >
        <Typography variant="h5">Rating details</Typography>
        <Typography>
          Average rating for {product.title} is ({product.averageRating})
        </Typography>
        <Typography variant="body">
          All ratings for {product.title} below:
        </Typography>
        <List>
          {product.ratings?.length > 0 ? (
            product.ratings.map((rating, index) => (
              <ListItem key={index}>
                <Rating
                  name={`rating-read-${index}`}
                  defaultValue={2.5}
                  precision={0.5}
                  value={rating}
                  readOnly
                />
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  ({rating})
                </Typography>
              </ListItem>
            ))
          ) : (
            <Typography variant="body">Couldn't find any ratings.</Typography> 
          )}
        </List>
      </List>
    </>
  );
}

export default ProductRatingList; // Export the component for reuse
