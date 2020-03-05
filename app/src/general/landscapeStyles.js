import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, 
        heightPercentageToDP as hp } 
    from 'react-native-responsive-screen';
import constants from "../constants/constants"

const styles = {
  container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		backgroundColor: "#fff",
	},
	form: {
		width: wp('100%'),
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		marginTop: 20
	},
	center: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
	},
	loginHeader: {
		width: wp('106%'),
		height: wp('35%'),
		resizeMode: 'stretch',
		marginTop: -wp('3%'),
		position: "absolute",
		top: 0
	},
	row:{
		flexDirection: "row",
		justifyContent:"space-between",
	},
	roof: {
		width: wp('100%'),
		marginTop: 0,
		position: "relative",
		height: wp('35%'),
	},
	squareContent: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		textAlign: "center",
		width: wp("100%"),
		marginTop: -66,
		paddingTop: 66,
	},
	logoImg: {
		width: 200, 
		height: 46
	},

	TxtTitle: {
		color: "#000",
		fontSize: wp('7.5%'),
		color: "#fff",
		marginTop: 20,
		marginBottom: 0,
		fontWeight: "bold",
	},

	txtDescription: {
		color: "#fff",
		fontSize: wp('4%'),
		marginBottom: 10,
		fontWeight: "bold"
	},
	input: {
		padding: 5,
		backgroundColor: '#e6e6e6',
		borderRadius: 10,
		width: wp('70%'),
		marginBottom: 10,
		fontSize: 16
	},
	btnCreate: {
		backgroundColor: constants.purpleColor,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
}

export default StyleSheet.create(styles);


