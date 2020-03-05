import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput, Alert, Image, Platform } from 'react-native';
import Modal from "react-native-modal";
import constants from '../constants/constants';
import cartStyles from "../general/cartStyles"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import AlertMessage from "./alert"

const createForm = () => ({
  name: "",
});

export default class CreateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      showComplementary: false,
      deg: "-270deg",
      loadedProduct: this.props.product,
      productSelected: null,
      form: createForm()
    };

    this.selectProductRef = React.createRef();
    this.AlertRef = React.createRef();
  }

  setProduct(product) {
    let json = {
      id: product.id,
      price: "" + product.price,
      name: "" + product.name,
      code: "" + product.code,
      description: "" + product.description,
    }
    this.setState({ form: json, loadedProduct: product });
  }

  setForm(key, value) {
    this.setState({
      form: {
        ...this.state.form,
        [key]: value
      }
    });
  }

  _renderCreateCustomer() {
    return (
      <TouchableOpacity
        style={styles.createButton}
        activeOpacity={0.5}
        onPress={() => this.createProduct()}
      >
        <Text style={[styles.sellTxt, { fontSize: 14, color: "#fff" }]}>
          {this.state.form.id ? "Editar Producto" : "Crear Producto"}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    let { loadedProduct } = this.state;
    return (
      <Modal
        hardwareAccelerated
        useNativeDriver
        hideModalContentWhileAnimating
        isVisible={this.state.isModalVisible}>
        <View style={[styles.wrapperModal, { height: hp("80%") }]}>
          <TouchableOpacity style={styles.close} onPress={() => this.handleClose()}>
            <Text style={styles.x}>X</Text>
          </TouchableOpacity>
          <View style={styles.modalContent}>
            <ScrollView
              showsVerticalScrollIndicator={false}>
              <View>
                <Text style={[styles.txtPrice, { textAlign: "center" }]}>
                  {loadedProduct ? "EDITAR" : "NUEVO"} PRODUCTO
              </Text>

                <TextInput
                  autoCapitalize="none"
                  style={styles.input}
                  onChangeText={(name) => this.setForm("name", name)}
                  value={this.state.form.name}
                  placeholder="Nombre"
                  placeholderTextColor="#aaa"
                  underlineColorAndroid="transparent" />

                <TextInput
                  autoCapitalize="none"
                  style={styles.input}
                  onChangeText={(code) => this.setForm("code", code)}
                  value={this.state.form.code}
                  placeholder="Código"
                  placeholderTextColor="#aaa"
                  underlineColorAndroid="transparent" />

                <TextInput
                  autoCapitalize="none"
                  style={styles.input}
                  onChangeText={(description) => this.setForm("description", description)}
                  value={this.state.form.description}
                  placeholder="Descripción"
                  placeholderTextColor="#aaa"
                  underlineColorAndroid="transparent" />

                <TextInput
                  autoCapitalize="none"
                  style={styles.input}
                  onChangeText={(price) => this.setForm("price", price)}
                  value={this.state.form.price}
                  placeholder="Precio de venta"
                  keyboardType="numeric"
                  placeholderTextColor="#aaa"
                  underlineColorAndroid="transparent" />
              </View>
            </ScrollView>
            {this._renderCreateCustomer()}
            <AlertMessage ref={this.AlertRef} />
          </View>
        </View>
      </Modal>
    );
  }
  handleClose() {
    this.clear()
    this._toggleModal();
  }

  _toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  show = () => {
    this.setState({ isModalVisible: true });
  }

  clear = () => {
    this.setState({
      form: createForm(),
      productSelected: null
    })
  }

  selectedProduct(productSelected) {
    this.setState({ productSelected })
  }

  createProduct() {
    let { name, code, price,
      description, id } = this.state.form;
    if (!name) {
      return alert('Debe ingresar el nombre')
    }

    let method = id ? "update" : "create";
    let { products } = this.props.API;

    let data = {
      "name": name,
      "code": code,
      "price": price,
      "id": id ? id : null,
      "description": description,
    }

    products[method](data).then(response => {
      this._toggleModal();
      this.clear();
      this.props.done();
    }).catch(err => {
      alert(JSON.stringify(err))
    })
  }
}

const styles = StyleSheet.create({
  ...cartStyles,
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  wrapperModal: {
    backgroundColor: 'transparent',
    padding: 20
  },
  close: {
    justifyContent: 'flex-end',
    marginBottom: -20,
    backgroundColor: constants.primaryColor,
    borderRadius: 100,
    width: 40,
    height: 40,
    zIndex: 99,
    marginLeft: 'auto',
    paddingTop: -10
  },
  x: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'top'
  },
  showComplementary: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginBottom: 10
  },
  showComplementaryTxt: {
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 10
  },
});
