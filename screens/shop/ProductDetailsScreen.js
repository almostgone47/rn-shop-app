import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const ProductDetailsScreen = props => {
  console.log('ProductDetailsScreen: ', props.route);
  const { product } = props.route.params;
  return (
    <View style={styles.screen}>
      <ImageBackground source={product.imageUrl} style={styles.image}>
        <Text>{product.title}</Text>
        <Text>{product.description}</Text>
        <Text>{product.price}</Text>
      </ImageBackground>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    textAlign: 'center',
    height: '275',
  },
  image: {
    height: '100vh',
  },
});
