'use strict'
import React, { Component
 } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import TitleIndex from '../component/TitleIndex';
import ProductList from '../component/ProductList';
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';

var {height, width} = Dimensions.get('window');
var item_width = (width-1)/2;
var ScreenWidth = Dimensions.get('window').width;
//首页
class Index extends React.Component {
  render(){
    return(
        <View style={styles.conten}>
        <TitleIndex />
        <ScrollView>
        <View style={styles.conten}>
        <IndicatorViewPager style={{height:200}} indicator={this._renderDotIndicator()}>
                <View>
                    <Image style={styles.banner} source={require('../res/banner/banner_one.jpg')}/>
                </View>
                <View>
                    <Image style={styles.banner} source={require('../res/banner/banner_two.jpg')}/>
                </View>
                <View>
                    <Image style={styles.banner} source={require('../res/banner/banner_three.jpg')}/>
                </View>
          </IndicatorViewPager>

          <View style={{margin:5,flexDirection:'row',alignItems:'center',height:65}}>
            <Image style={styles.imagebg} source={require('../res/images/anli.jpg')}>
            <Image style={styles.itemimage} source={require('../res/images/anli_icon.png')}/>
            <Text style={styles.itemtext}>案例推荐</Text>
            </Image>
            <Image style={styles.imagebg} source={require('../res/images/youshi.jpg')}>
              <Image style={styles.itemimage} source={require('../res/images/youshi_icon.png')}/>
            <Text style={styles.itemtext}>海鸥优势</Text>
            </Image>
          </View>

          <View style={{width:ScreenWidth,justifyContent:'center',alignItems:'center',margin:5}}>
            <Image style={styles.recomimage} source={require('../res/images/mainrecom.png')}/>
          </View>

          <ProductList />

        </View>
        </ScrollView>
        </View>

    );
  }

  _renderTitleIndicator() {
       return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
   }

   _renderDotIndicator() {
       return <PagerDotIndicator pageCount={3} />;
   }

  //  _renderTabIndicator() {
  //      let tabs = [{
  //              text: 'Home',
  //              iconSource: require('../imgs/ic_tab_home_normal.png'),
  //              selectedIconSource: require('../imgs/ic_tab_home_click.png')
  //          },{
  //              text: 'Message',
  //              iconSource: require('../imgs/ic_tab_task_normal.png'),
  //              selectedIconSource: require('../imgs/ic_tab_task_click.png')
  //          },{
  //              text: 'Profile',
  //              iconSource: require('../imgs/ic_tab_my_normal.png'),
  //              selectedIconSource: require('../imgs/ic_tab_my_click.png')
  //      }];
  //      return <PagerTabIndicator tabs={tabs} />;
  //  }
}

const styles = StyleSheet.create({
  titlttext:{
      fontSize:15,
  },
  view:{
    height:50,
  },
  conten:{
    flex:1,
    backgroundColor:'#ffffff',
  },
  banner:{
    width:ScreenWidth,
    height:200,
  },
  imagebg:{
    width:ScreenWidth/2-5,
    height:65,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  itemtext:{
    fontSize:18,
    color:'#ffffff',
    textAlign:'center',
  },
  itemimage:{
    width:23,
    height:23,
    margin:5,
  },
  recomimage:{
    width:230,
    height:25,
  }
});

export {Index as default};
