import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ProductGridTile from '../../components/ProductGridTile';

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.products);

  const renderProducts = itemData => {
    return (
      <ProductGridTile
        itemData={itemData.item}
        onSelect={() =>
          props.navigation.navigate('Product Details', {
            product: itemData.item,
          })
        }
      />
    );
  };

  return (
    <View>
      <Text>Products Overview</Text>
      <FlatList data={products} renderItem={renderProducts} numColumns={2} />
    </View>
  );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 15px',
    margin: '10px',
  },
});
