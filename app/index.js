import { AppRegistry, SafeAreaView } from 'react-native';
import { name as appName } from './app.json';
import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/redux/store';
import { ApiConnect } from "./src/services/index";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Products from './src/views/Products';

const store = configureStore()
let apiConnect = new ApiConnect();
apiConnect.connect(store);

const mapParams = (MainComponent) => {
  return class extends React.Component {
    static navigationOptions = MainComponent.navigationOptions;
    render() {
      const { navigation: { state: { params } } } = this.props;
      apiConnect.connectNavigator(this.props.navigation);
      return <MainComponent {...params} {...this.props} API={apiConnect} />
    }
  }
}

const MainNavigator = createStackNavigator({
  Products: { screen: mapParams(Products), navigationOptions: { headerShown: false } },
});

const App = createAppContainer(MainNavigator);

const Main = () => (
  <Provider store={store}>
    <SafeAreaView style={{flex: 1, backgroundColor: "#2196f3"}}>
      <App />
    </SafeAreaView>
  </Provider>
)

AppRegistry.registerComponent(appName, () => Main);
