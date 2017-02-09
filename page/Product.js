'use strict'
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  ListView
} from 'react-native';

import TitleProduct from '../component/TitleProduct';
import ProductClassComponent from '../component/ProductClassComponent';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.classifies = [{name:'推荐产品'},{name:'挂件'},{name:'花洒类'},{name:'角阀类'},{name:'礼品'}
    ,{name:'淋浴房'},{name:'淋浴柱'},{name:'龙头类'},{name:'配件类'}];


    var dataSource2 = new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2
    });
    this.state = {
      classifies:dataSource2.cloneWithRows(this.classifies),
      currentId:0,
    };
}

//跳转产品详情
_onItemclick(text){
  const {navigator} = this.props;
  InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component: ProductDetail,
            name: 'ProductDetail',
          });
        });
}


   _pressRow(rowID){

       var dataSource2 = new ListView.DataSource({
         rowHasChanged:(row1,row2) => row1 !== row2
       });
       this.setState({currentId:rowID,classifies:dataSource2.cloneWithRows(this.classifies)});
   }

   _renderRow(rowData, sectionID, rowID){
          return (
                  <View>
                    <TouchableHighlight underlayColor={'#fff'} onPress={() => this._pressRow(rowID)} >
                      <Text>{rowData.name}</Text>
                      </TouchableHighlight>
                  </View>
              );
      }

  _renderList(rowData, sectionID, rowID){
    if (rowID == this.state.currentId) {
      return(
          <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',padding:10,borderLeftWidth:3,borderLeftColor:'#015ba7',borderBottomWidth:0.5,borderBottomColor:'#d7d7db'}}>
            <Text style={{fontSize:14,color:'#015ba7'}}>{rowData.name}</Text>
          </View>
      );
    }else {
    return(
      <TouchableHighlight underlayColor={'#fff'} onPress={() => this._pressRow(rowID)}>
        <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',padding:10,borderBottomWidth:0.5,borderBottomColor:'#d7d7db'}}>
          <Text style={{fontSize:14}}>{rowData.name}</Text>
        </View>
      </TouchableHighlight>
    );
      }
  }




  render(){
    return(
        <View style={{flex:1}}>
          <TitleProduct />

          <View style={styles.searchview}>
            <Image style={{width:15,height:15}} source={require('../res/images/search.png')}/>
            <Text style={styles.searchtext}>请输入要搜索的商品</Text>
          </View>

          <View style={{height:1,backgroundColor:'#d7d7db'}}>
          </View>

          <View style={{flex:1,flexDirection:'row',alignItems:'flex-start',justifyContent:'flex-start'}}>
            <View style={{width:100}}>
              <ListView contentContainerStyle={styles.list} dataSource={this.state.classifies}
              renderRow={this._renderList.bind(this)}/>
            </View>
            <ProductClassComponent {...this.props} item={this.state.currentId} />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
       flexDirection: 'column',
       width:100,
       marginTop:5,
       justifyContent:'center',
   },
  searchview:{
    marginLeft:20,
    marginRight:20,
    marginTop:5,
    marginBottom:5,
    padding:5,
    borderWidth:1,
    borderColor:'#d7d7db',
    backgroundColor:'#f0f0f0',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
  },
  searchtext:{
    fontSize:13,
    color:'#c7c7cb',
    marginLeft:5,
  },
  itemtext:{
    fontSize:14,
  }
})

export {Product as default};
