import React, { Component } from 'react';
import {Item, Input,Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right, IconNB, View } from "native-base";

import { StyleSheet,Image, ScrollView } from 'react-native';

import ActionBarImage from './ActionBarImage'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ActionBarHome from './ActionBarHome';

export default class Contact extends Component {
  static navigationOptions = {
    //To set the header image and title for the current Screen
    title: '',
    //Title
    headerLeft: <ActionBarHome />,
    //Image in Navigation Bar

    headerStyle: {
      backgroundColor: '#59B8DE',
      
      //Background Color of Navigation Bar
    },

    headerTintColor:  '#59B8DE',
    //Text Color of Navigation Bar
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <Container style={styles.MainContainer}>
        
        

        <Content padder>

        <Text style={{color: '#E10066',   fontSize: 28 , marginLeft: 100, fontWeight: "bold"}}>Contact US</Text>

          <Card style={{ borderRadius: 16, width:350}}>
        <CardItem header style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}> 
            </CardItem>
       <CardItem >
              <Body>
          <Item>
            <Input style={styles.inputBox} placeholder="First name" />
            <Input style={styles.inputBox} placeholder="Surname" />
          </Item>
          <Item>
            <Input style={styles.inputBox} placeholder="E-mail" />
          </Item>
          <Text style={{color: '#E10066',   fontSize: 18 , marginTop: 20}}>How can we help?</Text>
          <Item>
            <Input style={styles.inputBox} placeholder="" />
          </Item>
              </Body>
            </CardItem>
        <CardItem>
         </CardItem>
        <CardItem>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
             <Image source={require('../assets/sen.png')} />
          </TouchableOpacity>
        </CardItem>
        <CardItem footer style={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
          </CardItem>
          </Card>
          <TouchableOpacity style={{marginLeft: 80,marginTop: 10}}onPress={() => navigation.navigate('Third')}>
 
 <Image source={require('../assets/back.png')} />
 
</TouchableOpacity>
        </Content>

        <View style={styles.bottomView}>
        <Image
        source={require('../assets/rec2.png')}
        style={styles.backgroundImage}
       
      />
        </View>
      </Container >
      </ScrollView>
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
   
    resizeMode: 'stretch', // or 'stretch'
  },
  bottomView: {

width: "100%",
    position: 'absolute', 
    bottom: 0, 
  },
  inputBox: {
    fontSize: 15 ,
    borderBottomWidth: 1,
    borderBottomColor: '#59B8DE',
    marginRight: 15,
    
}
});