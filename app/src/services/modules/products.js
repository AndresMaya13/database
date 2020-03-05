import ApiService from "../api";

class productClass extends ApiService {

	// List all products from database products
	list() {
		return this.get("");
	}

	//Search and find any match by name or code
	search(search) {
		return this.post("search", { search });
	}

	//Create a new product
	create(data) {
		return this.post("", data);
	}

	//Update an existing product
	update(data) {	
		return this.post("update", data);
	}
	
	//Delete an existing product
	delete(id) {
		return this.post("delete", {id});
	}

	//Show a product by id
	show(id) {
		return this.get(id);
	}

}

export default {
	name: "products",
	class: productClass
}