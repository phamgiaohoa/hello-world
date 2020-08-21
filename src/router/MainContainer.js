import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabBar from './BottomTabBar';

import {
  HomeScreen,
  FlashScreen,
  LoginScreen,
  aaa,
  MainProject,
  ManagerAddress,
  ProfileScreen,
  // address,
  Management,
  ShowStudentListActivity,
  EditStudentRecordActivity,
  chitiet,
  CartScreen,
  Cart,themdiachi,doimatkhau
} from './screen';
const BottomTab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <BottomTab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <BottomTab.Screen name="HomeTab" component={HomeScreen} />
      {/* <BottomTab.Screen name="CartScreen" component={CartScreen} /> */}
      <BottomTab.Screen name="ProfileTab" component={ProfileScreen} />

    </BottomTab.Navigator>
  );
};
console.log('newUser', BottomTab);

const MainStack = createStackNavigator();

const MainNavigation = () => (
  <MainStack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="Login">
    <MainStack.Screen name="BottomTab" component={BottomNavigation} />
    <MainStack.Screen name="Login" component={LoginScreen} />
    <MainStack.Screen name="doimatkhau" component={doimatkhau} />
    <MainStack.Screen name="CartScreen" component={CartScreen} />
    <MainStack.Screen name="themdiachi" component={themdiachi} />
    <MainStack.Screen name="Cart" component={Cart} />
    <MainStack.Screen name="chitiet" component={chitiet} />
    <MainStack.Screen name="EditStudentRecordActivity" component={EditStudentRecordActivity} />
    <MainStack.Screen name="ShowStudentListActivity" component={ShowStudentListActivity} />
    <MainStack.Screen name="Management" component={Management} />
    <MainStack.Screen name="aaa" component={aaa} />
    {/* <MainStack.Screen name="address" component={address} /> */}
    <MainStack.Screen name="MainProject" component={MainProject} />
    <MainStack.Screen name="ProfileTab" component={ProfileScreen} />
    <MainStack.Screen name="ManagerAddress" component={ManagerAddress} />
    <MainStack.Screen name="HomeTab" component={HomeScreen} />
  </MainStack.Navigator>
);

const FlashStack = createStackNavigator();

const FlashNavigation = () => (
  <FlashStack.Navigator screenOptions={{headerShown: false}}>
    <FlashStack.Screen name="FlashScreen" component={FlashScreen} />
  </FlashStack.Navigator>
);

export default function MainContainer() {
  const [changeScreen, setChangeScreen] = useState(false);
  useEffect(() => {
    {
      setTimeout(() => {
        setChangeScreen(true);
      }, 4000);
    }
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {changeScreen ? <MainNavigation /> : <FlashNavigation />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
