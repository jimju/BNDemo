'use strict';

import React from 'react';
import {
  Dimensions,
  Image,
  InteractionManager,
  View,
  Text,
  BackAndroid,
  StyleSheet,
  Navigator,
} from 'react-native';

import Splash from './Splash';

var _navigator;
export default class app extends React.Component {
  constructor(props) {
    super(props);
    BackAndroid.addEventListener('hardwareBackPress',() =>{
      if (_navigator && _navigator.getCurrentRoutes().length > 1) {
           _navigator.pop();
             return true;
           }
    });
  }

  render(){
    return(<View style={styles.container}>
        <Navigator initialRoute={{
          component:Splash,
          name:'Splash',
        }}
        renderScene={(route, navigator) =>{
          let Component = route.component;
          _navigator = navigator;
          return(<Component navigator={navigator} route = {route}/>);
        }}
        configureScene={() => {
          return Navigator.SceneConfigs.PushFromRight;
        }}/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container:{
    flex:1,
  }
});
