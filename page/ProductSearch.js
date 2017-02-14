'use strict'
import React, { Component } from 'react';
import {
  Text,StyleSheet,View,ScrollView
} from 'react-native';

import TitleProductSearch from '../component/TitleProductSearch';
import ProductList from '../component/ProductList';
class ProductSearch extends React.Component {
  render(){
    return(
      <View style={styles.content}>
        <TitleProductSearch {...this.props}/>
        <View style={styles.sortcontent}>
          <Text style={styles.sorttext}>综合排序</Text>
          <Text style={styles.sorttext}>价格</Text>
        </View>
        <ScrollView>
        <ProductList {...this.props}/>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'white',
  },
  sorttext:{
    padding:5,
    marginRight:20,
    fontSize:14
  },
  sortcontent:{
    flexDirection:'row',
    paddingLeft:10,
    paddingTop:5,
    paddingBottom:5,
    borderBottomColor:'#d7d7db',
    borderBottomWidth:0.5,marginBottom:5,
    backgroundColor:'#fff',
  }
});
export {ProductSearch as default};
