import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
}
from 'react-native-responsive-screen';

export default class Pagination extends Component {
  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false,
    }
  }

  _renderItem(){
    let { length, singular, plural } = this.props;
    return ( 
      <View style={styles.contentPagination}>
        <TouchableOpacity style={styles.arrowsContent} onPress={() => this.props.backPage()}>
          <Image source={require("../../assets/toback.png")} style={styles.arrowLeft}/> 
        </TouchableOpacity>
        <Text numberOfLines={1} style={styles.numberCustomers}>
          {length} {length == 1 ? singular : plural }
        </Text>
        
        <TouchableOpacity style={styles.arrowsContent} onPress={() => this.props.nextPage()}>
          <Image source={require("../../assets/next.png")} style={styles.arrowLeft}/> 
        </TouchableOpacity>
      </View>
    )

  }

  render() {
    return (
      this.props.singular ? (this._renderItem()) : null
    )
  }

  handleClose() {
    this._toggleModal();
  }

   _toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
   }

   show = (message) => {
    this.setState({ isModalVisible: true, message });
   }

}

const styles = StyleSheet.create({
  arrowLeft:{
    width: 25,
    height: 25,
  },
  contentPagination:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: wp("90%"),
    marginTop: 5,
    marginBottom: 5,
    padding: 3,
    backgroundColor: "#eee",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  numberCustomers:{
    fontSize: 16,
    marginLeft: wp("25%"),
    marginRight: wp("25%"),
    color: "grey",
    fontWeight: "bold",
  }
 
});
