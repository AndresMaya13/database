import React, {Component} from 'react';
import {StyleSheet, Text,TouchableOpacity, View, ScrollView, Image} from 'react-native';
import Modal from "react-native-modal";
import constants from '../constants/constants';


export default class Alert extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: this.props.message || "",
      isModalVisible: false,
    }
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
              <View style={styles.modalContent}>
                <ScrollView
                  showsVerticalScrollIndicator={false}>
                  <View>
                    <Text style={[this.props.styles, styles.message]}>
                      {this.state.message}
                    </Text>
                  </View>
                </ScrollView>
              </View>
            </View>
        </Modal>
    );
  }

  handleClose() {
    this._toggleModal();
  }

   _toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
   }

   show = (message) => {
    this.setState({ isModalVisible: true, message });
   }

}

const styles = StyleSheet.create({
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
  close:{
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
  x:{
    fontSize: 30,
    color: '#fff',
    fontWeight:'bold',
    textAlign: 'center',
    textAlignVertical: 'top' 
  },
  message:{
    fontSize: 22,
    textAlign:'center',
    margin: 5,
    color: constants.primaryColor,
  }
});
