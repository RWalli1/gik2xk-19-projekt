import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { List, ListItem, Grid } from "@mui/material";

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
        <Typography variant="h5"> Rating details </Typography>
        <Typography>
          Average rating for {product.title} is ({product.averageRating})
        </Typography>
        {/*<Rating
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          value={product.averageRating}
          readOnly
        /> */}
        
        

        <Typography>All ratings for {product.title} below:</Typography>
        <List>
          {product.ratings?.length > 0 ? (
            //.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            product.ratings.map((rating) => (
              <ListItem>
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  value={rating}
                  readOnly
                />
                <Typography variant="h5"> ({rating})</Typography>
              </ListItem>
            ))
          ) : (
            <Typography variant="h5">Couldn't find any ratings.</Typography>
          )}{" "}
        </List>
      </List>
    </>
  );
}

export default ProductRatingList;
