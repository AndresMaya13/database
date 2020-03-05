import { StyleSheet } from 'react-native';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
}
from 'react-native-responsive-screen';
import constants from "../constants/constants"

const styles = {
	modalContent: {
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		height: hp("80%"),
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		borderColor: "rgba(0, 0, 0, 0.1)",
	},
	wrapperModal: {
		backgroundColor: 'transparent',
		padding: 0,
		justifyContent: "center",
		alignItems: "center"
	},
	close: {
		justifyContent: 'center',
		marginBottom: 1,
		backgroundColor: constants.primaryColor,
		borderRadius: 100,
		width: 40,
		height: 40,
		zIndex: 99,
		paddingTop: -10
	},
	x: {
		fontSize: 35,
		color: '#fff',
		fontWeight: 'bold',
		textAlign: 'center',
		textAlignVertical: 'top'
	},
	products: {
		flexDirection: "column",
		backgroundColor: "#fff",
		borderRadius: 5,
		width: wp("85%"),
		height: 130,
		shadowOffset: { width: 1, height: 1 },
		shadowColor: 'black',
		shadowOpacity: 0.3,
		padding: 5,
		flexWrap: "wrap"
	},
	productImage: {
		height: 55,
		width: 45,
	},
	txtPrice: {
		color: "#000",
		fontSize: wp('4%'),
		fontWeight: "bold"
	},
	txtName: {
		color: "#000",
		fontSize: wp('3.8%'),
	},
	sellSection: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: wp("85%"),
		height: 60,
		backgroundColor: constants.primaryColor,
		borderRadius: 10,
		padding: 3,
		marginTop: 10,
	},
	totalTxt: {
		fontSize: wp("4%"),
		color: "#fff",
		fontWeight: "bold",
		alignSelf: "center"
	},
	actions: {
		width: wp("85%"),
		paddingRight: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	action: {
		fontSize: 40,
		color: "#000",
		margin: 5,
		alignSelf: "center",
	},
	countContent: {
		textAlign: 'center',
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "center",
		backgroundColor: constants.primaryColor,
		borderRadius: 50,
		width: 30,
		height: 30,
	},
	sellButton: {
		width: wp("30%"),
		height: 40,
		alignSelf: "center",
		backgroundColor: "#fff",
		borderRadius: 10,
		paddingTop: 5,
		textAlign: "center",
		alignItems: "center",
		marginRight: 5
	},
	createButton: {
		width: wp("30%"),
		height: 35,
		alignSelf: "center",
		backgroundColor: constants.primaryColor,
		borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
		paddingTop: 7,
		textAlign: "center",
    alignItems: "center",
    margin: 10
  },
  sellTxt: {
		textAlign: "center",
		alignSelf: "center",
		color: constants.primaryColor,
		fontSize: wp("4%"),
		fontWeight: "bold"
	},
	input: {
		padding: 5,
		backgroundColor: '#e6e6e6',
		borderRadius: 5,
		width: wp('55%'),
		marginBottom: 10,
		fontSize: 15,
		marginTop: 10,
		alignSelf: "center",
	},
	billSection: {
		width: wp("85"),
		justifyContent: "center",
		alignItems: "center"
	},
	separator: {
		width: wp("85%"),
		height: 2,
		backgroundColor: constants.primaryColor,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
	},
	txtBill: {
		textAlign: "center",
		alignSelf: "center",
		fontSize: 22,
	},
	contentPay: {
		marginBottom: 5,
		width: wp("85%"),
		flexDirection: "row",
		justifyContent: "space-between"
	},
	inputPay: {
		padding: 5,
		backgroundColor: '#fff',
		borderRadius: 5,
		width: wp('40%'),
		fontSize: 22,
		alignSelf: "center",
		height: 35,
	},
	customersContent:{
		backgroundColor: "#fff",
		width: wp("55%"),
		alignItems: "center",
		justifyContent: "center",
		borderBottomRightRadius: 5,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 5,
		marginBottom:10,
		marginTop:-12,
	},
	customerName:{
		width: wp("28%"),
		margin:3,
		fontSize: 14,
		fontWeight: "bold",
		margin:8,
	},
	back:{
		position: "absolute",
		top: 0,
		left: 0,
	},
	backImage: {
		width: 30,
		height:30
	},

	customerBox:{
		flexDirection: "row",
		justifyContent: "space-between",
		width: wp("55%"),
	}
}

export default StyleSheet.create(styles);
