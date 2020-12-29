import PRODUCTS from '../../data/dummy-data';

const initialState = {
  products: PRODUCTS,
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case typeName:
    //   return { ...state, ...payload };

    default:
      return state;
  }
};

export default productReducer;
