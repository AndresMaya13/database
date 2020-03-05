import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Animated, Easing } from 'react-native';
import cartStyles from "../general/cartStyles"
import productsStyles from "../general/productsStyles"
import ProgressiveImage from './utils/ProgressiveImage';

import helper from "../helper"

export default class Products extends Component {
  constructor(props) {
    super(props);
 
  }

  render() {
    let { data, index, callBack, extraStyle } = this.props;
    return (
      <View style={[styles.products, extraStyle ? extraStyle : null]}>
        <TouchableOpacity
          key={index}
          activeOpacity={0.5}
          onPress={() => callBack ? callBack(data) : null}>
          <ProgressiveImage
            source={require('../assets/product.png')}
            style={[styles.productImage, {  height: 62, width: 90 }, extraStyle ? { maxWidth: "70%", height: 60 } : null]}
          />

          <Text numberOfLines={2} style={styles.txtName}>{data.name}</Text>
          <Text numberOfLines={2} style={styles.txtName}>{data.description}</Text>
          <Text style={styles.txtPrice}>${helper.money(data.price)}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  selectedCustomer(customer) {
    this.selectCustomer(customer)
  }
}

const styles = StyleSheet.create({
  ...cartStyles,
  ...productsStyles
});
