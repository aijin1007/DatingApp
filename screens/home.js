import React, { Component } from 'react';
import {Picker,Form,Item, Input,Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right, IconNB, View } from "native-base";

import { DrawerLayoutAndroid,StyleSheet,Image, ScrollView } from 'react-native';

import ActionBarImage from './ActionBarImage'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ActionBarHome from './ActionBarHome';

export default class home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  
  static navigationOptions = {
    //To set the header image and title for the current Screen
    title: '',
    //Title
    headerLeft: <ActionBarHome  />,
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
        <View style={{position: 'absolute', top: 0}}><Image source={require('../assets/image.png')} /></View>

        <Content padder>
      <Card style={{position: 'absolute',right: 0,left: 0}}><CardItem style={{height: 70, backgroundColor: "#f396c0"}}><TouchableOpacity style={{marginTop: 10,marginBottom: 20}}>
 
 <Image source={require('../assets/get2.png')} />
 
</TouchableOpacity><TouchableOpacity style={{marginTop: 10,marginBottom: 20, marginLeft: 30}}>
 
 <Image source={require('../assets/learn.png')} />
 
</TouchableOpacity></CardItem></Card>

          <Card style={{ borderRadius: 16, width:350, marginTop: 50}}>
          <CardItem header style={{ backgroundColor: "#E10066",borderTopLeftRadius: 16, borderTopRightRadius: 16 }}> 
            </CardItem>
            <CardItem style={{backgroundColor: "#E10066"}}>
  
          
              <Body>
          <Item>
          <Form>
            <Text style={{color: "white"}}>I am a:</Text>
            <Picker
              
             
              mode="dropdown"
              style={{ width: 120, color:"white" }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Male" value="key0" />
              <Picker.Item label="Female" value="key1" />
           
            </Picker>
          </Form>
          <Form >
            <Text style={{color: "white", marginLeft: 60}}>Between ages</Text>
            <Picker
              
             
              mode="dropdown"
              style={{ width: 120, color:"white", marginLeft: 60 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="28" value="key0" />
              <Picker.Item label="25" value="key1" />
              
            </Picker>
          </Form>
          </Item>
          <Item>
          <Form>
            <Text style={{color: "white"}}>I'm looking for a:</Text>
            <Picker
              
             
              mode="dropdown"
              style={{ width: 120, color:"white" }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Female" value="key0" />
              <Picker.Item label="Male" value="key1" />
              
            </Picker>
          </Form>
          <Form >
            <Text style={{color: "white", marginLeft: 60}}>and</Text>
            <Picker
              
             
              mode="dropdown"
              style={{ width: 120, color:"white", marginLeft: 60 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="30" value="key0" />
              <Picker.Item label="49" value="key1" />
       
            </Picker>
          </Form>
          </Item>
        
              </Body>
            
            </CardItem>
         
        
            <CardItem footer style={{backgroundColor: "#E10066", borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
</CardItem>
          </Card>
          <TouchableOpacity style={{marginLeft: 30,marginTop: 10}}>
          <Image
        source={require('../assets/Line.png')}
        style={styles.backgroundImage}
        style={{marginLeft: 110, marginTop: 15, marginBottom: 10}}
       
      />
 <Text style={{color: '#E10066',   fontSize: 20, fontWeight:"bold" }}>How myHandicap Dating Works</Text>
 <Image
        source={require('../assets/arrow.png')}
        style={styles.backgroundImage}
        style={{marginLeft: 110, marginTop: 15, marginBottom: 10}}
       
      />
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
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 208,
    
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