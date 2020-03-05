export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const SAVE_PRODUCTS = 'SAVE_PRODUCTS';
export const CLEAR_PRODUCTS = "CLEAR_PRODUCTS";


//products
export const editProduct = (product) => ({
  type: EDIT_PRODUCT,
  product
});

//products
export const saveProducts = products => ({
  type: SAVE_PRODUCTS,
  products,
});



