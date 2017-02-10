'use strict'
import React, { Component
 } from 'react';
import {
  Text,
  StyleSheet,
  View,
  InteractionManager,
  Image,
  TouchableOpacity,
} from 'react-native';

import Notify from '../page/Notify';
import ProductSearch from '../page/ProductSearch';
class TitleIndex extends React.Component {

  //跳转产品详情
  _onSearchClick(){
    const {navigator} = this.props;
    InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: ProductSearch,
              name: 'ProductSearch',
              focus:'true'
            });
          });
  }

  //跳转消息
  _onNotifyClick(){
    const {navigator} = this.props;
    InteractionManager.runAfterInteractions(() => {
            navigator.push({
              component: Notify,
              name: 'Notify',
              data:'消息',
            });
          });
  }

  render(){
    return(
        <View style={styles.view}>
        <TouchableOpacity onPress={() => this._onNotifyClick()}>
          <Image  style={[styles.image,{resizeMode:'stretch'}]} source={require('../res/images/information.png')}/>
        </TouchableOpacity>
        <Text style={styles.titlttext}>SEAGULL</Text>
        <TouchableOpacity onPress={() => this._onSearchClick()}>
          <Image style={styles.image} source={require('../res/images/searchmain.png')}/>
        </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  titlttext:{
      flex:1,
      fontSize:20,
      color:'#ffffff',
      textAlign:'center'
  },
  view:{
    flexDirection:'row',
    backgroundColor:'#015ba7',
    height:50,
    alignItems:'center',
  },
  image:{
    width:30,
    height:30,
    margin:5,

  }
});

export {TitleIndex as default};
