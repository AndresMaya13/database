
import Products from "./modules/products";

export const ApiConnect = function () {

  this.modules = [
    Products
  ];

  this._modules = [];
  this.connect = function (store) {
    for (let i = 0; i < this.modules.length; i++) {
      let moduleX = this.modules[i];
      let instance = new moduleX.class();
      instance.connect(store);
      this[moduleX.name] = instance;
      this._modules.push(instance);
    }
  };

  this.connectNavigator = function (navigator) {
    for (let i = 0; i < this._modules.length; i++) {
      let mod = this._modules[i];
      mod.connectNavigator(navigator);
    }
  };
}
