import React, { Component, useState} from 'react';
import {Item, Input,Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right, IconNB, View } from "native-base";
import {CheckBox, StyleSheet,Image, ScrollView} from 'react-native';


import ActionBarImage from './ActionBarImage'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class SignUp extends Component {
  constructor(){
    super();
    this.state={
      check: false
    }
  }
  checkBoxTest()
  {
    this.setState({
      check: !this.state.check
    })
    
  }
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
    
      const{navigation}=this.props;
    return (
      <ScrollView>
        
        <Container style={styles.MainContainer} >
        
        <Content padder>
          <Card style={{ borderRadius: 16, }}>
          <CardItem header style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>

            <Text style={{color: '#E10066',   fontSize: 20 }}>{`Getting started\nLog in to find your partner!`}</Text>
           
            </CardItem>
            <CardItem >
  
          
              <Body>
            
             
          <Item>
            <Input style={styles.inputBox} placeholder="First name" />
          </Item>
          <Item>
            <Input style={styles.inputBox} placeholder="Username" />
          </Item>
          <Item>
            <Input style={styles.inputBox} placeholder="password" />
          </Item>
          
         
         
              </Body>
              <Right><Item>

<Input style={styles.inputBox}placeholder="Surname" />
</Item>
<Item>
            <Input style={styles.inputBox} placeholder="Email" />
          </Item>
          <Item>
            <Input style={styles.inputBox} placeholder="Confirm password" />
          </Item>
</Right>
            </CardItem>
           <CardItem>
   <CheckBox tintColors={{ true: '#E10066', false: 'black' }} value={this.state.check} onChange={()=>this.checkBoxTest()}/>
       <Text>By creating your account, You agree to our <Text style={{color: '#E10066',   fontSize: 15 }}>{`\nTerm of Use & Privacy Policy.`}</Text></Text>
           </CardItem>
            <CardItem>
            <TouchableOpacity onPress={() => navigation.navigate('contact')}>
 
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
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  bottomView: {

height: 140,
    position: 'absolute', 
    bottom: 0, 
  },
  inputBox: {
    fontSize: 15 ,
    borderBottomWidth: 1,
    borderBottomColor: '#59B8DE',
    marginRight: 10,   
},
buttons:{
    flexDirection: 'row',
  },
  button: {
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    width:50,
    marginRight:5,
    marginTop:5,
  },
});