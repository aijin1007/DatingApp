import React, { Component } from 'react';
import {Item, Input,Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right, IconNB, View } from "native-base";

import { DrawerLayoutAndroid,StyleSheet,Image, ScrollView } from 'react-native';

import ActionBarImage from './ActionBarImage'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class SignIn extends Component {
  static navigationOptions = {
    //To set the header image and title for the current Screen
    title: '',
    //Title
    headerLeft: <ActionBarImage />,
    //Image in Navigation Bar

    headerStyle: {
      backgroundColor: '#59B8DE',
      
      //Background Color of Navigation Bar
    },

    headerTintColor:  '#59B8DE',
    //Text Color of Navigation Bar
  };

  render() {
   
    const navigationView = (
      <View style={styles.navigationContainer}>
        <Text style={{ margin: 10, fontSize: 15 }}>I'm in the Drawer!</Text>
      </View>
    );
    const { navigation } = this.props;
    return (
   <DrawerLayoutAndroid
   drawerWidth={300}
   drawerPosition="left"
   renderNavigationView={()=> navigationView}
   >
      <ScrollView>
        <Container style={styles.MainContainer}>
        
        <Content padder>
          <Card style={{ borderRadius: 16 }}>
          <CardItem header  style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>

            <Text style={{color: '#E10066',   fontSize: 20 }}>{`Welcome Back\nSign in to your account`}</Text>
           
            </CardItem>
            <CardItem >
              <Body>
              <Item>
            <Input style={styles.inputBox}placeholder="Username Or E-mail" />
          </Item>
          <Item>
            <Input style={styles.inputBox} placeholder="Password" />
          </Item>
        
       
         
              </Body>
            </CardItem>
           
            <CardItem>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
 
 <Image source={require('../assets/reg.png')} />
 
</TouchableOpacity>
<TouchableOpacity>
 
 <Image source={require('../assets/forgot.png')} />
 
</TouchableOpacity>

            </CardItem>
            <CardItem footer style={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
<TouchableOpacity>
            <Image
       
       source={require('../assets/fb.png')}
       resizeMode="cover"
     /></TouchableOpacity></CardItem>
          </Card>
         
        </Content>
        
        
   
     
        <View style={styles.bottomView}>
        <Image
       
        source={require('../assets/bot.png')}
        style={styles.backgroundImage}
        
      />
        </View>
        
      </Container >
      </ScrollView>
     </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  bottomView: {

    height: 170,

    position: 'absolute', 
    bottom: 0, 
  },
  inputBox: {
    fontSize: 15 ,
    borderBottomWidth: 1,
    borderBottomColor: '#59B8DE',
    
    
}
});