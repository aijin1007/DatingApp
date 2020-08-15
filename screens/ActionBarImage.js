import React, { Component } from 'react';

import { StyleSheet, View, Text, Image ,Picker} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class ActionBarImage extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
          <Image
        style={{ width: 40,
            height: 80,
            borderRadius: 40 / 2,
            marginLeft: 15,}}
        source={require('../assets/logo.png')}
        resizeMode='contain'
      />
        <View style={{width:'50%',height: 60, flexDirection: 'row',justifyContent: 'center', backgroundColor: '#59B8DE',paddingVertical: 10, marginLeft: 190}}>
           
            <Picker mode="dropdown" style={{ color: "white", height:40, backgroundColor: 'white',width: '60%'}}>
             
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