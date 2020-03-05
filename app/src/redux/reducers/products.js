import * as Products from '../actions';

const initialState = {
  products: {}, 
  version: null
}


const processProducts = function(productsNew, products) {
  if (!products) products = {};
  productsNew.map(product => {
    products[product.id] = product;
  });
  return products;
};

const functions = (state = initialState, action) => {
  switch (action.type) {
    case Products.SAVE_PRODUCTS:
      let newProducts = processProducts(action.products, state.products);
      return {
        ...state,
        products: newProducts
      };
  }

  return state;
};

export default functions;
