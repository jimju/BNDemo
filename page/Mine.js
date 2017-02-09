'use strict'
import React, { Component } from 'react';
import {
  Text,StyleSheet,View,Image,TouchableOpacity
} from 'react-native';
//个人中心
class Mine extends React.Component {
  render(){
    return(
        <View style={styles.content}>
          <View style={styles.header}>
            <Image style={{width:80,height:80}} source={require('../res/images/defalut_icon.png')}/>
            <Text style={{fontSize:17,color:'#fff',marginTop:5}}>未登录</Text>
          </View>
          <MineItem name="全部订单" icon={require('../res/images/min_all_order.png')}/>
          <MineItem name="浏览记录" icon={require('../res/images/mine_record.png')}/>
          <MineItem name="我的收藏" icon={require('../res/images/mine_collection.png')}/>
          <MineItem name="关于我们" icon={require('../res/images/about_us.png')}/>
          <MineItem name="消息通知" icon={require('../res/images/mine_message.png')}/>
          <MineItem name="设置" icon={require('../res/images/mine_setting.png')}/>
        </View>
    );
  }
}
//个人中心的item
class MineItem extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
        <TouchableOpacity>
        <View style={styles.item}>
          <Image style={styles.itemimg} source={this.props.icon}/>
          <Text style={styles.itemtext}>{this.props.name}</Text>
          <View style={{flex:1}}>
          </View>
          <Image style={[styles.itemimg]} source={require('../res/images/jiantou.png')}/>
        </View>
        </TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({
  item:{
    height:60,
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    borderBottomColor:'#d7d7db',
    borderBottomWidth:0.5,
  },
  itemimg:{
    height:23,
    width:23,
  },
  itemtext:{
    fontSize:16,
    marginLeft:25,
  },
  header:{
    height:240,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#015ba7',
  },
  content:{
    flex:1,
    flexDirection:'column',
  }
});
export {Mine as default};
