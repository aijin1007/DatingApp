import React, { Component } from 'react';

import {DrawerLayoutAndroid,TouchableOpacity,StyleSheet, View, Text, Image ,Picker} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ActionBarHome extends Component {
  
  render() {
    const navigationView = (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>Im in the Drawer!</Text>
      </View>
    );
    const { navigation } = this.props;

  
    return (
   
      <View style={{ flexDirection: 'row' }}>
      
            <Icon name="menu" onPress={() => navigation.openDrawer()}  size={45} style= {{color:"#E10066" }} />
         
            <Image
        style={{ width: 40,
            height: 60,
            
            marginLeft: 125}}
        source={require('../assets/logo1.png')}
        resizeMode='contain'
      />
         
        <View style={{width:'45%',height: 57.5, flexDirection: 'row',justifyContent: 'center', backgroundColor: '#59B8DE',paddingVertical: 5, marginLeft: 0}}>
           
            <Picker mode="dropdown" style={{ color: "white",height:40, backgroundColor: 'white',width: '65%', marginLeft: 60}}>
             
              <Picker.Item label="DEUTSCH" value="option1"  />
              <Picker.Item label="ENGLISH" value="option2" />
              <Picker.Item label="DEUTSCH" value="option3" />
            </Picker>
            <Icon name="chevron-down-circle" size={20} style= {{color:"#E10066",paddingTop: 10 }} />
            <Icon name="dots-vertical" size={45} style= {{color:"#E10066" }} />

          </View>
      </View>
    );
  }
}