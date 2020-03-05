import { combineReducers, createStore } from 'redux';
import products from './reducers/products';

const rootReducer = combineReducers({ products });
const configureStore = () => {
  return createStore(rootReducer);
}
export default configureStore;
