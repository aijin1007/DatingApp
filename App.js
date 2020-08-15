import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import home from './screens/home';
import SignIn from './screens/signin';
import Icon from 'react-native-vector-icons/Ionicons'
import ActionBarHome from './screens/ActionBarHome';
import {TouchableOpacity, Image} from 'react-native';
import SignUp from './screens/signup';
import Contact from './screens/contact';
import { DrawerLayoutAndroid } from 'react-native-gesture-handler';
import ActionBarImage from './screens/ActionBarImage';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const SignUpStack = createStackNavigator();
const ContactStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen =({navigation})=>(
  <HomeStack.Navigator 

  screenOptions={{
    headerStyle: {
      backgroundColor: "#59B8DE",

    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={home} options={{
     title:'',
      
     headerLeft:()=>(
    <ActionBarHome navigation={navigation} />
     ),
   
   }}/>
  </HomeStack.Navigator>
);
const ContactStackScreen =({navigation})=>(
  <ContactStack.Navigator 

  screenOptions={{
    headerStyle: {
      backgroundColor: "#59B8DE",

    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <ContactStack.Screen name="contact" component={Contact} options={{
     title:'',
      
     headerLeft:()=>(
    <ActionBarHome navigation={navigation} />
     ),
   
   }}/>
  </ContactStack.Navigator>
);

const SignInScreen =({navigation})=>(
  <DetailStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: "#59B8DE",

    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <DetailStack.Screen name="SignIn" component={SignIn} options={{
      title:'',
      
      headerLeft:()=>(
     <ActionBarImage/>
      ),
    
    }}/>
  </DetailStack.Navigator>
);

const SignUpScreen =({navigation})=>(
  <SignUpStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: "#59B8DE",

    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  }}>
    <DetailStack.Screen name="Signup" component={SignUp} options={{
      title:'',
      
      headerLeft:()=>(
     <ActionBarImage/>
      ),
    
    }} />
  </SignUpStack.Navigator>
)

const App =()=>{
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen}/>
        <Drawer.Screen name="Login" component={SignInScreen}/>
        <Drawer.Screen name="Signup" component={SignUpScreen}/>
        <Drawer.Screen name="contact" component={ContactStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;