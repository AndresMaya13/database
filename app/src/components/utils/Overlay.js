import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';


export default Overlay = props => {
  const {
    children,
    isVisible,
    containerStyle,
    overlayStyle,
    windowBackgroundColor,
    overlayBackgroundColor,
    onBackdropPress,
    borderRadius,
    width,
    height,
    fullScreen,
    ...rest
  } = props;

  return (
    <Modal
      visible={isVisible}
      onRequestClose={onBackdropPress}
      transparent
      {...rest}>

      <TouchableWithoutFeedback
        onPress={onBackdropPress}
      >
        <View
          testID="overlayContainer"
          style={StyleSheet.flatten([
            styles.backdrop,
            { backgroundColor: windowBackgroundColor },
            containerStyle,
          ])}
        />
      </TouchableWithoutFeedback>

      <View style={styles.container} pointerEvents="box-none">
        <View
          style={StyleSheet.flatten([
            styles.overlay,
            {
              borderRadius,
              backgroundColor: overlayBackgroundColor,
              width,
              height,
            },
            fullScreen && styles.fullscreen,
            overlayStyle,
          ])}
        >
          {children}
        </View>
      </View>
    </Modal>
  );

}

Overlay.defaultProps = {
  borderRadius: 3,
  fullScreen: false,
  windowBackgroundColor: 'rgba(0, 0, 0, .4)',
  overlayBackgroundColor: 'white',
  width: wp - 80,
  height: hp - 180,
  onBackdropPress: () => null,
};


const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullscreen: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    borderRadius: 5,
    padding: 10,
    ...Platform.select({
      android: {
        elevation: 2,
      },
      default: {
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
      },
    }),
  },
})
