import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import Modal from "react-native-modal";
import constants from '../constants/constants';
import cartStyles from "../general/cartStyles"
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import helper from "../helper"

import AlertMessage from "./alert"
import CreateProduct from "./CreateProduct"


export default class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      id: null,
      product: {}
    }
    this.AlertMessageRef = React.createRef();
    this.CreateProductRef = React.createRef();
  }



  _renderAddProduct() {
    return (
      <View style={styles.alignInfo}>
        <TouchableOpacity
          style={[styles.createButton, {backgroundColor: "#f44336"}]}
          activeOpacity={0.5}
          onPress={() => this.delete()}>
          <Text style={[styles.sellTxt, { fontSize: 14, color: "#fff" }]}>
            Eliminar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.createButton]}
          onPress={() => this.openEditProduct()}>
          <Text style={[styles.sellTxt, { fontSize: 14, color: "#fff" }]}>
            Editar
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  _renderCurrentProduct() {
    let { product } = this.state;
    let date = helper.toFineDate(new Date(product.createdAt).toLocaleDateString('en-ES').toString());
    return (
      <View style={styles.contentInfoShow}>
        <Text style={styles.title}>Información del producto</Text>
        <Image source={require('../assets/product.png')}
          style={styles.img}
        />
      
        
      <View style={styles.alignInfo}>
          <Text style={styles.keyNameTxt}>Id: </Text>
          <Text style={styles.valueNameTxt}>{product.id} </Text>
        </View>
        
        <View style={styles.alignInfo}>
          <Text style={styles.keyNameTxt}>Nombre: </Text>
          <Text style={styles.valueNameTxt}>{product.name} </Text>
        </View>
        
        <View style={styles.alignInfo}>
          <Text style={styles.keyNameTxt}>Código: </Text>
          <Text style={styles.valueNameTxt}>{product.code} </Text>
        </View>
        
        
        <View style={styles.alignInfo}>
          <Text style={styles.keyNameTxt}>Descripción: </Text>
          <Text numberOfLines={3} style={styles.valueNameTxt}>{product.description} </Text>
        </View>
        
      
        <View style={styles.alignInfo}>
          <Text style={styles.keyNameTxt}>Precio: </Text>
          <Text style={styles.valueNameTxt}>${helper.money(product.price)}</Text>
        </View>

        <View style={styles.alignInfo}>
          <Text style={styles.keyNameTxt}>Fecha creación: </Text>
          <Text style={styles.valueNameTxt}>{date} </Text>
        </View>
               
      </View>
    );
  }

  render() {
    return (
      <Modal
        hardwareAccelerated
        useNativeDriver
        hideModalContentWhileAnimating
        isVisible={this.state.isModalVisible}>
        <View style={styles.wrapperModal}>
          <TouchableOpacity style={styles.close} onPress={() => this.handleClose()}>
            <Text style={styles.x}>X</Text>
          </TouchableOpacity>
          <View style={[styles.modalContent]}>
            <ScrollView
              horizontal={false}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.id ? this._renderCurrentProduct() : null}
            </ScrollView>
            <AlertMessage ref={this.AlertMessageRef} />
            {this._renderAddProduct()}
            
            <CreateProduct
              ref={this.CreateProductRef}
              API={this.props.API}
              done={() => { this.props.done() }}
            />
          </View>
        </View>
      </Modal>
    );
  }

  handleClose() {
    // this.clear()
    this._toggleModal();
  }

  _toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  show() {
    this.setState({ isModalVisible: true });
  }

  openAddProduct() {
    let { product } = this.state;
    this.AddProductsRef.current.setProduct(product);
		this.AddProductsRef.current.show();
  }

  openEditProduct() {
    this.CreateProductRef.current.show();
    this.CreateProductRef.current.setProduct(this.state.product);
  }

  setProduct(id) {
    this.setState({ id })
    let { products } = this.props.API;
    products.show(id).then(product => {
      this.setState({product});
    }).catch((err) => {
        alert(JSON.stringify(err))
    })
  }

  update() {
    let { products } = this.props.API;
    products.show(this.state.id).then(product => {
      this.setState({product});
    }).catch(({ data }) => {
        this.AlertMessageRef.current.show(data.message);
    })
  }

  delete() {
    let {products} = this.props.API;
    products.delete(this.state.id).then(response => {
      this._toggleModal();
      this.props.done();
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
  title: {
    fontSize: 18,
    color: constants.primaryColor,
    fontWeight: "bold",
    textAlign:"center",
    marginBottom: 10
  },
  img: {
    height: 70, 
    width: 70,
    margin: 10
  },
  contentInfoShow: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  alignInfo: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  keyNameTxt: {
    width: wp("20%"),
    fontSize: 15,
    fontWeight: "bold",
    color: constants.primaryColor,
    flexWrap: "wrap",
    margin: 5
  },
  valueNameTxt: {
    width: wp("50%"),
    fontSize: 14,
    fontWeight: "700",
    color: constants.secundaryColor,
    flexWrap: "wrap",
    margin: 5
  },
  editImg: {
    width: 38,
    height: 38,
    marginLeft: 25,
    marginTop: -4
  },
});
