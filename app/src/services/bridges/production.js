import StoreObject from '../storage';
import axios from 'axios';
import constants from '../../constants/constants';


var Navigation = null;
var Storage = new StoreObject

export default class ApiService {
	constructor() {	
		this.$store = Storage;
	}

	_handleError(err) {
		return Promise.reject(err);
	}

	connectNavigator(n) {
		Navigation = n;
	}

	connect(Store) {
		this.Store = Store;
	}

	async req(cbPromise) {
			let options = {
				headers: {
					"Content-Type": "application/json"
				}
			};
			return cbPromise(options).then(({data}) => Promise.resolve(data))
			.catch(err => this._handleError(err));
	}

	get(uri) {
		let url = `${constants.URL }/${uri}`;
		return this.req( (opts) => axios.get(url, opts ) );
	}

	post(uri, data) {
		return this.req( (opts) => axios.post(`${constants.URL}/${uri}`, data, opts) );
	}

	postMultipart(uri, data) {
		return this.req( (opts) => axios.post(`${constants.URL}/${uri}`, data, opts) );
	}
}