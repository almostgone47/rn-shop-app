import React from 'react';
import { StyleSheet } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import productReducer from './store/reducer/productReducer';
import ProductsNav from './navigation/ProductsNav';

const rootReducer = combineReducers({
  products: productReducer,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <ProductsNav />
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
