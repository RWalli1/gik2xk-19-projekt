import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";

function ProductItemLarge({ product }) {
  return (
    <Paper>
      <Box>
        <Typography variant="h2">{product.title}</Typography>
        <Typography>Inlägget publicerades: {"hola"}</Typography>
      </Box>
      <Card elevation={0}>
        <CardMedia
          component="img"
          image={product.imageUrl || placeholderImage}
        />
        <CardContent>
          {product.ratings &&
            product.ratings.map((rating) => (
              <Tag key={`tag_${rating}`} text={rating} />
            ))}
          <Typography variant="body2">{product.body}</Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default ProductItemLarge;
