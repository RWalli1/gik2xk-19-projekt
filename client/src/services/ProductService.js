import axios from "./api"; // import our version of axios 


// gets all products
export async function getAll(endpoint = "/products/")
{
    try {
        const response = await axios.get(endpoint);
    if (response.status == 200) return response.data;
    else {
        console.log(response);
        return [];
    }
    } catch (e) {
        e?.response ? console.log(e.response.data) : console.log(e);
    }
}

// gets one product by its id. 
export async function getOne(id) {
    try {
      
        const response = await axios.get(`/products/${id}`);
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

// creates a new product 
export async function create(product) {
    try {
        const response = await axios.post('/products/', product);
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

// adds a rating to a product.
export async function addRating(productId,rating) {
  try {
      const response = await axios.post(`/products/${productId}/addRating`, rating);
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

// updates a product based upon id. 
export async function update(product) {
    try {
      const response = await axios.put(`/products/${product.id}`, product);
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
  
  // removes a product based on id.
  export async function remove(id) {
    try {
      const response = await axios.delete(`/products/${id}`, { data: { id } });
      if (response.status === 200) {
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