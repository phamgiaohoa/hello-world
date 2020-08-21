import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import SvgIcon from './../assets/icons/SvgIcon';

const BottomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 40,
        width: '100%',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            route.name == 'CartTab'
              ? navigation.navigate(route.name, {selectedStore: null})
              : navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const _renderIcon = () => {
          switch (route.name) {
            case 'HomeTab':
              return (
                <SvgIcon
                  name="orderComplete"
                  color={isFocused ? 'red' : '#231f20'}
                />
              );

          
            case 'CartScreen':
              return (
                <SvgIcon
                  name="historyOrder"
                  color={isFocused ? 'red' : '#231f20'}
                />
              );
              case 'ProfileTab':
                return (
                  <SvgIcon name="profile" color={isFocused ? 'red' : '#231f20'} />
                );
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {_renderIcon()}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBar;
