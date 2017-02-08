import React from 'react';
import {
    View,
    Text,
    Navigator,
    Image,
    TouchableOpacity,StyleSheet
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Index from '../page/Index';
import Product from '../page/Product';
import Mine from '../page/Mine';

export default class TabComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab:'home',
        };
    }
    _pressButton() {
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
            })
        }
    }
    render() {
        return (
            <View style={{flex:1,height:100}}>
              <TabNavigator  tabBarStyle={{ height: 60, overflow: 'hidden' }}>
              <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title="首页"
                renderIcon={() => <Image style={styles.baricon} source={require('../res/images/home1.png')} />}
                renderSelectedIcon={() => <Image style={styles.baricon} source={require('../res/images/home.png')} />}
                onPress={() => this.setState({ selectedTab: 'home' })}>
                <Index />
              </TabNavigator.Item>
              <TabNavigator.Item
                selected={this.state.selectedTab === 'profile'}
                title="产品中心"
                renderIcon={() => <Image style={styles.baricon} source={require('../res/images/pro1.png')} />}
                renderSelectedIcon={() => <Image style={styles.baricon} source={require('../res/images/pro.png')} />}
                onPress={() => this.setState({ selectedTab: 'profile' })}>
                <Product />
              </TabNavigator.Item>

              <TabNavigator.Item
                selected={this.state.selectedTab === 'me'}
                title="个人中心"
                renderIcon={() => <Image style={styles.baricon} source={require('../res/images/me1.png')} />}
                renderSelectedIcon={() => <Image style={styles.baricon} source={require('../res/images/me.png')} />}
                onPress={() => this.setState({ selectedTab: 'me' })}>
                <Mine />
              </TabNavigator.Item>

              </TabNavigator>
            </View>
        );
    }

}
const styles = StyleSheet.create({
  baricon:{
    width:35,
    height:35,
  }
});
