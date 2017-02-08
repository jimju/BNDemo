'use strict'
import React, { Component
 } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';

class TitleIndex extends React.Component {
  render(){
    return(
        <View style={styles.view}>
        <Image  style={[styles.image,{resizeMode:'stretch'}]} source={require('../res/images/information.png')}/>
        <Text style={styles.titlttext}>SEAGULL</Text>
        <Image style={styles.image} source={require('../res/images/searchmain.png')}/>
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
