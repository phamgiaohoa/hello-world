//import liraries
import React from 'react';
import {SvgCss} from 'react-native-svg';
import {
  homeIcon,
  cartIcon,
  notificationIcon,
  historyOrderIcon,
  profileIcon,
  orderCompleteIcon,
} from './icons';

// create a component
const SvgIcon = ({name, width, height, color}) => {
  let icon = '';
  switch (name) {
    case 'home':
      icon = homeIcon;
      break;
    case 'cart':
      icon = cartIcon;
      break;
    case 'notification':
      icon = notificationIcon;
      break;
    case 'historyOrder':
      icon = historyOrderIcon;
      break;
    case 'profile':
      icon = profileIcon;
      break;
    case 'orderComplete':
      icon = orderCompleteIcon;
      break;
  }

  return (
    <SvgCss
      xml={icon}
      width={width ? width : 30}
      height={height ? height : 30}
      // fix default color 
      stroke={color? color : '#000'}
    />
  );
};

//make this component available to the app
export default SvgIcon;
