import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const ProductGridTile = props => {
  return (
    <TouchableHighlight
      style={styles.gridItem}
      key={props.itemData.id}
      onPress={props.onSelect}
    >
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{props.itemData.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ProductGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 80,
  },
  itemContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  title: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});
