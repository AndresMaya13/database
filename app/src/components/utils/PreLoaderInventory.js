import React, { Component } from 'react';
import {
	StyleSheet, Text, TextInput, View,
	TouchableOpacity, Image, ScrollView, FlatList
} from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import constants from '../../constants/constants';

export default class PreLoaderInventory extends Component {
    constructor(props){
      super(props);
      this.state = {

      }
    }
  _renderCategories(){
    return (
      <View style={styles.contentCategories}>
        <View style={styles.flexCategories}>
          <View style={styles.elementCategory}></View>
          <View style={styles.elementCategory}></View>
        </View>

        <View style={styles.flexCategories}>
          <View style={styles.elementCategory}></View>
          <View style={styles.elementCategory}></View>
        </View>
      </View>
    )
  }

  _renderProducts() {
    return (  
      <View> 
        <FlatList
          data={[0,1,2]}
          horizontal
          centerContent={true}
          initialNumToRender={3}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ marginLeft: 1, marginRight: 1 }}></View>}
          keyExtractor={(item, index) => `list-item-${index}`}
          renderItem={({ item, index }) => {return (
              <View style={styles.products}></View>
            )}
          }
        />
        <FlatList
        data={[0,1,2]}
        horizontal
        centerContent={true}
        initialNumToRender={3}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ marginLeft: 1, marginRight: 1 }}></View>}
        keyExtractor={(item, index) => `list-item-${index}`}
        renderItem={({ item, index }) => {return (
            <View style={styles.products}></View>
          )}
        }
      />
    </View>
    ) 
   }

  render() {
    return (
      <View style={styles.containerPreRender}>
        <ScrollView>
        {this._renderCategories()}
          {this._renderProducts()}
        </ScrollView>
      </View>
    ) 
  }

}
const styles = StyleSheet.create({
  containerPreRender: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
    
  },
  contentCategories: {
    width: wp("100%"),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  flexCategories: {
    flexDirection: "row",
    justifyContent: "center",
  },
  elementCategory: {
    width: wp("48%"),
    height: 35,
    backgroundColor: "#ddd",
    borderRadius: 5,
    margin: 4
  },
  products: {
    flexDirection: "column",
    backgroundColor: "#ddd",
    borderRadius: 5,
    width: 128,
    height: 190,
    padding: 4,
    margin: 5
  }
});