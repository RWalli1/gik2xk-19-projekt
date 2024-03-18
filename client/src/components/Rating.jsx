function Rating() {
  return <>
  <Rating
  name="half-rating-read"
  defaultValue={2.5}
  precision={0.5}
  value={product.averageRating}
  readOnly
/>

</>;
}

export default Rating;
