'use strict'
import React, { Component } from 'react';
import {
  Text,View,StyleSheet,Image,Dimensions,ScrollView,Button
} from 'react-native';

import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
import TitleProductDetail from '../component/TitleProductDetail';

var ScreenWidth = Dimensions.get('window').width;
class ProductDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count:1
    };
  }


  _renderDotIndicator() {
      return <PagerDotIndicator pageCount={6} />;
  }

  _countplus(){
    this.setState({
      count:this.state.count + 1
    });
  }

  _countsub(){
    if (this.state.count > 1) {
      this.setState({
        count:this.state.count - 1
      });
    }

  }

  render(){
    const {route,navigator} = this.props;
    return(
      <View>
        <TitleProductDetail {...this.props}/>
        <ScrollView>
          <View style={{flex:1,flexDirection:'column',height:700}}>
          <IndicatorViewPager style={{height:360}} indicator={this._renderDotIndicator()}>
                  <View style={styles.bannercontain}>
                      <Image style={styles.banner} source={require('../res/pro/pro1.jpg')}/>
                  </View>
                  <View style={styles.bannercontain}>
                      <Image style={styles.banner} source={require('../res/pro/pro2.jpg')}/>
                  </View>
                  <View style={styles.bannercontain}>
                      <Image style={styles.banner} source={require('../res/pro/pro3.jpg')}/>
                  </View>
                  <View style={styles.bannercontain}>
                      <Image style={styles.banner} source={require('../res/pro/pro4.jpg')}/>
                  </View>
                  <View style={styles.bannercontain}>
                      <Image style={styles.banner} source={require('../res/pro/pro5.jpg')}/>
                  </View>
                  <View style={styles.bannercontain}>
                      <Image style={styles.banner} source={require('../res/pro/pro6.jpg')}/>
                  </View>
            </IndicatorViewPager>
            <View style={styles.productinfo}>
              <Text style={{fontSize:14}}>{route.info}</Text>
              <View style={{flexDirection:'row',marginTop:15}}>
                <Text style={{fontSize:13}}>c001-100</Text>
                <View style={{flex:1}}/>
                <Text style={{color:'#f00'}}>￥100.00</Text>
                </View>
            </View>

          <View style={{flexDirection:'row',alignItems:'center',margin:10,backgroundColor:'#fff'}}>
            <Text style={{marginRight:15}}>购买数量:</Text>
            <Text style={styles.addbutton} onPress={()=>this._countsub()}>-</Text>
            <Text style={[styles.addbutton,{width:39}]}>{this.state.count}</Text>
              <Text style={styles.addbutton} onPress={()=>this._countplus()} >+</Text>
          </View>
          </View>
        </ScrollView>
        <Button title='立即购买' style={{height:50,marginTop:200,marginRight:10,marginLeft:10}}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#f3f7fb',
  },
  banner:{
    width:360,
    height:360,
  },
  bannercontain:{
    flexDirection:'row',
    justifyContent:'center',
  },
  productinfo:{
    flexDirection:'column',
    padding:10,
    marginTop:10,
    marginBottom:10,
    borderBottomColor:'#d7d7db',
    borderWidth:0.5,
    borderTopColor:'#d7d7db',
    backgroundColor:'#fff'
  },
  addbutton:{
    width:30,
    height:30,
    borderColor:'#d7d7db',
    borderWidth:0.5,
    padding:3,
    fontSize:18,
    textAlign:'center',
  }
});
export {ProductDetail as default};
