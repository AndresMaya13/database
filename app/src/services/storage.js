import AsyncStorage from '@react-native-community/async-storage';

const PRODUCTS_KEY = "products";

class StoreClass {
	setItem(key, data){
		return AsyncStorage.setItem(key, JSON.stringify(data));
	}
	async getItem(key) {
		return AsyncStorage.getItem(key).then(data => {
			var json = JSON.parse(data);
			return new Promise(resolve => resolve(json));
		});
	}

	setProducts(data) {
		return this.setItem(PRODUCTS_KEY, data);
	}

	getProducts() {
		return this.getItem(PRODUCTS_KEY);
	}	
	forgetItem(key){
		return this.setItem(key, null);
	}
}

export default StoreClass;
