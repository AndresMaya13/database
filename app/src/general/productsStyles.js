import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, 
        heightPercentageToDP as hp } 
    from 'react-native-responsive-screen';

const styles = {
  products: {
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 5,
    // elevation: 2,
    width: 120,
    height: 175,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    padding: 4,
    margin: 5,
  },
  productImage: {
    justifyContent: "center",
    height: "100%",
    width: "70%",
    maxWidth: "70%",
    alignItems: "center",
  },
  txtPrice: {
    color: "#000",
    fontSize: wp('4%'),
    marginLeft: 10,
    marginTop: 8,
    fontWeight: "bold"
  },
  txtName: {
    color: "#000",
    fontSize: wp('3.1%'),
    margin: 5,
  },
  contentPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceNumberContent:{
    width: 26,
    height: 26,
    borderRadius: 5,
    padding:1,
    alignItems: "center",
    marginRight: 10,
    marginTop: 5,
  },
  txtPriceNumber:{
    color: "#fff",
    fontSize: wp('4%'),
    fontWeight: "bold",
    alignSelf: "center"
  }
}

export default StyleSheet.create(styles);
