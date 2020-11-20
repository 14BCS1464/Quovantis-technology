import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import splash from '../container/spalsh/splash'
import HomeScreen from "../container/Home/Home";


const RootStack = createStackNavigator()
const HomeStack = createStackNavigator();




function HomeStackFunction() {
  return (
      <HomeStack.Navigator headerMode="none">
        <HomeStack.Screen name="HomeScreen" component={HomeScreen}/>
      </HomeStack.Navigator>
  )
}




class Navigator extends React.PureComponent {
    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <NavigationContainer>
                    <RootStack.Navigator headerMode="none">
                        <RootStack.Screen name="splash" component={splash}/>
                        <RootStack.Screen name="HomeStackFunction" component={HomeStackFunction}/>
                    </RootStack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        );
    }
}

export default Navigator;
