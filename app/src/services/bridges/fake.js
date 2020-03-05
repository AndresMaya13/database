import StoreObject from '../storage';

export default class ApiService {
	constructor() {	
	  this.$store = new StoreObject;
	}
	_handleError({data, status}) {
		return Promise.reject({data, status});
	}
	
	get(uri, slug = "", expectedResponse = null) {
        console.log(uri + slug, expectedResponse);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(expectedResponse);
            }, 400);
        });
	}
	post(uri, data,  expectedResponse = null) {
        console.log(uri, data, expectedResponse);
		return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(expectedResponse);
            }, 400);
        });
	}

}