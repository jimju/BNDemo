
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  ToastAndroid,
  Image
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.prods = [{title:'陶瓷刀',img:require('../res/pro/pros1.jpg')},{title:'单冷龙头',img:require('../res/pro/pros2.jpg')}
    ,{title:'洗衣机龙头',img:require('../res/pro/pros3.jpg')},{title:'立式单冷龙头',img:require('../res/pro/pros4.jpg')}
    ,{title:'瓷芯拖把龙头',img:require('../res/pro/pros5.jpg')}
    ,{title:'瓷芯十字拖把龙头',img:require('../res/pro/pros6.jpg')}];

    dataSource1 = new ListView.DataSource({
      rowHasChanged:(row1,row2) => row1 !== row2
    });
    this.state = {
      prods: dataSource1.cloneWithRows(this.prods)
    };
  }

  showtoast(text){
    if (text == "陶瓷刀") {
      // ToastAndroid.show(text, ToastAndroid.LONG);
    }

  }

  _renderList(prod) {
    return(
    <TouchableHighlight
        underlayColor={'#fff'}
               onPress={this.showtoast.bind(this,prod.title)}>
    <View style={styles.listitem}>

    <View style={styles.stylecenter}>
      <Image source={prod.img}
      style={[{width:200,height:170,justifyContent:'center'},{resizeMode:'contain'}]}/>
    </View>
      <Text style={{fontSize:15,marginTop:5}}>{prod.title}</Text>
      <Text>c001-100</Text>
      <Text style={{fontSize:15}} >￥99</Text>
    </View>
    </TouchableHighlight>);

  }

  render(){
      return(
        <View>
          <ListView contentContainerStyle={styles.list} dataSource={this.state.prods}
          renderRow={prod => this._renderList(prod)}/>
        </View>
      );
    }

}

const styles = StyleSheet.create({
  list: {
       flexDirection: 'row',
       flexWrap:'wrap',
       width:ScreenWidth,
       alignItems:'center',
       justifyContent:'center',
       marginBottom:35,
   },
   listitem:{
     width:ScreenWidth/2 - 5,
     height:275,
     justifyContent:'center',
     padding:10,
     borderWidth:0.5,
     borderColor:'#d7d7db',
     margin:2,
   },
   stylecenter:{
     justifyContent:'center',
     alignItems:'center',
   }
});




export {ProductList as default}
