import React, { Component } from 'react';
import {
	StyleSheet, Text, TextInput, View,
	TouchableOpacity, ScrollView, FlatList
} from 'react-native';
import {
	widthPercentageToDP as wp} from 'react-native-responsive-screen';
import constants from "../constants/constants";
import generalStyles from "../general/styles";
import AlertMessage from "../components/alert";
import Products from "../components/products";
import ShowProduct from "../components/ShowProduct";
import CreateProduct from "../components/CreateProduct";
import PreRenderProducts from "../components/utils/PreRenderProducts";

const LIMIT = 50;
const perRow = 20;

class ProductsClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			products: null,
			showing: [],
		}
		this.AlertMessageRef = React.createRef();
		this.ShowProductRef = React.createRef();
		this.createProductRef = React.createRef();
	}

	componentDidMount() {
		this.getProducts();
	}

	render() {
		let showing = this.state.showing;
		let products = showing.slice(0, LIMIT);
		return (
			<View style={[styles.container]}>
				<AlertMessage ref={this.AlertMessageRef} />
				<ShowProduct
					ref={this.ShowProductRef}
					API={this.props.API}
					done={() => { this.getProducts() }}
				/>

				<CreateProduct
					ref={this.createProductRef}
					API={this.props.API}
					done={() => { this.getProducts() }}
				/>
				<View style={[styles.row]}>
					<TextInput
						autoCapitalize="none"
						style={styles.input}	
						onChangeText={(value) => this.search(value)}
						placeholder="Buscar producto"
						placeholderTextColor="#aaa"
						underlineColorAndroid="transparent" />

					<TouchableOpacity
						style={styles.addContent}
						onPress={() => { this.create() }}>
						<Text style={styles.addProduct}>+</Text>
					</TouchableOpacity>
				</View>

				<Text style={styles.txtDescription}>
					{showing.length} Productos
				</Text>
	
			
					<ScrollView>
						{this.state.showing.length != 0 ? (
							<View>
								<FlatList
									data={products.slice(0, perRow)}
									horizontal
									centerContent={true}
									initialNumToRender={3}
									showsHorizontalScrollIndicator={false}
									ItemSeparatorComponent={() => <View style={{ marginLeft: 1, marginRight: 1 }}></View>}
									keyExtractor={(item, index) => `list-item-${index}`}
									renderItem={({ item, index }) =>
										<Products
											data={item}
											index={item.id}
											callBack={() => this.selected(item.id)}
										/>
									}
								/>
									<FlatList
										data={products.slice(perRow, 40)}
										horizontal
										initialNumToRender={3}
										showsHorizontalScrollIndicator={false}
										ItemSeparatorComponent={() => <View style={{ marginLeft: 1, marginRight: 1 }}></View>}
										keyExtractor={(item, index) => `list-item-${index}`}
										renderItem={({ item, index }) =>
											<Products
												data={item}
												index={item.id}
												callBack={() => this.selected(item.id)}
											/>
										}
									/>	
									
								<FlatList
									data={products.slice(40, 60)}
									horizontal
									initialNumToRender={3}
									showsHorizontalScrollIndicator={false}
									ItemSeparatorComponent={() => <View style={{ marginLeft: 1, marginRight: 1 }}></View>}
									keyExtractor={(item, index) => `list-item-${index}`}
									renderItem={({ item, index }) =>
										<Products
											data={item}
											index={item.id}
											callBack={() => this.selected(item.id)}
										/>
									}
								/>
							</View>
						) : (<PreRenderProducts />)}
					</ScrollView>
			</View>
		);
	}

	getProducts() {
		let { products } = this.props.API;
		products.list().then(response => {
			this.setState({ showing: Object.values(response) })
		}).catch(err => {
			alert(JSON.stringify(err.message))
		});
	}

	selected(id) {
		this.ShowProductRef.current.setProduct(id);
		this.ShowProductRef.current.show();
	}

	create() {
		this.createProductRef.current.show();
	}

	search(value) {
		clearInterval(this.threadProducts);
		if (!value) {
			this.getProducts();
			return;
		}
		this.threadProducts = setTimeout(() => {
			var tosearch = value.toLowerCase();
			let { products } = this.props.API;
			products.search(tosearch).then(response => {
				if(response.length == 0) {
					this.setState({showing: this.state.showing});
					return;	
				}
				this.setState({ showing: Object.values(response) })
			}).catch(err => {
				alert(JSON.stringify(err))
			})
		}, constants.delayRequest)
	}
}

export default ProductsClass;

const styles = StyleSheet.create({
	...generalStyles,
	txtDescription: {
		color: constants.primaryColor,
		fontSize: wp('4.5%'),
		margin: 10,
		fontWeight: "bold"
	},
	input: {
		padding: 5,
		backgroundColor: '#e6e6e6',
		borderRadius: 5,
		width: wp('55%'),
		fontSize: 16,
		alignSelf: "flex-start",
	},
	txtCategory: {
		color: constants.primaryColor,
		fontSize: wp('3.2%'),
		fontWeight: "bold",
		alignSelf: "center",
		textAlign: "center"
	},
	contentCategory: {
		width: wp("48%"),
		height: 30,
		backgroundColor: "#eee",
		borderRadius: 5,
		padding: 2,
		alignItems: "center",
		justifyContent: "center",
		margin: 5,
	},
	addProduct: {
		fontSize: wp("12%"),
		color: constants.primaryColor,
		fontWeight: "bold",
		marginTop: -18,
		marginLeft: 5
	},
	categorySelectedContent: {
		backgroundColor: constants.primaryColor,
	},
	categorySelectedTxt: {
		color: "#fff",
		fontWeight: "bold"
	},
});