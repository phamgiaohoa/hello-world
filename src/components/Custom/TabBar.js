import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {defaultColor} from './../shared';
import SvgIcon from './../../icons/SvgIcon';
import SvgUri from 'react-native-svg-uri';

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
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
            navigation.navigate(route.name);
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
              return <SvgIcon name="home" />;
            case 'CategoryTab':
              return <SvgIcon name="category" />;
            case 'SearchTab':
              return <SvgIcon name="search" />;
            case 'ProfileTab':
              return <SvgIcon name="profile" />;
            case 'CartTab':
              return <SvgIcon name="cart" />;
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              borderColor: '#e0e0e0',
              justifyContent: 'center',
              alignItems: 'center',
              borderTopWidth: 0.3,
              backgroundColor: isFocused ? defaultColor.primary : '#FFF',
            }}>
            {_renderIcon()}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
