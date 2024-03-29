import axios from "./api"; // import our version of axios




// delete products from a cart by card id.
export async function deleteProducts(id) {
  try {
    
      const response = await axios.delete(`/users/${id}/clearCart`);
      if (response.status == 200){
        return response.data;
      } 
      else {
          console.log(data);
          return null;
      }
  } catch (e) {
      e?.response ? console.log(e.response.data) : console.log(e);
  }
}

// get one cart by user id.
export async function getOne(id) {
    try {
      
        const response = await axios.get(`/users/${id}/getCart`);
        if (response.status == 200){
          return response.data;
        } 
        else {
            console.log(data);
            return null;
        }
    } catch (e) {
        e?.response ? console.log(e.response.data) : console.log(e);
    }
}

// add product to cart 
export async function addProduct(cartRow) {
    try {
        const response = await axios.post('/carts/addProduct', cartRow);
        if (response.status === 200) {
          return response.data;
        } 
        else {
          console.log(response.data);
          return null;
        }
      } catch (e) {
        e?.response ? console.log(e.response.data) : console.log(e);
      }
}