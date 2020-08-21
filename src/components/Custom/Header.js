import React from 'react';
import Block from '../Block';
import Button from '../Button';
import Text from '../Text';
import {defaultColor} from './../shared';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Header = (props) => {
  const navigation = useNavigation();
  const renderElement = () => {
    if (props.twoElement) {
      return (
        <>
          <Text size={20} marginLeft={20}>
            {props.title.toUpperCase()}
          </Text>

          {props.rightRender ? (
            props.rightRender
          ) : (
            <Block marginRight={20}></Block>
          )}
        </>
      );
    } else if (props.search) {
      return (
        <>
          <Button onPress={props.goBack} padding={5} marginLeft={10}>
            <Icon name="ios-arrow-back" size={30} color="#000" />
          </Button>
          <Block
            row
            alignCenter
            radius={5}
            marginRight={10}
            paddingVertical={5}
            paddingHorizontal={10}
            width={'85%'}
            backgroundColor={'#FFF'}>
            <Icon name="ios-search" size={25} color="#000" />

            <Text style={{fontFamily: 'Roboto-Bold'}} size={13} marginLeft={5}>
              {props.title}
            </Text>
          </Block>
        </>
      );
    } else {
      return (
        <>
          {props.back ? (
            <Button onPress={props.goBack} padding={5} marginLeft={10}>
              <Icon name="ios-arrow-back" size={30} color="#000" />
            </Button>
          ) : (
            <Block marginLeft={10}></Block>
          )}

          <Text size={20} marginRight={10}>
            {props.title.toUpperCase()}
          </Text>

          {props.rightRender ? (
            props.rightRender
          ) : (
            <Block marginRight={10}></Block>
          )}
        </>
      );
    }
  };

  return (
    <Block
      width="100%"
      row
      backgroundColor={defaultColor.primary}
      alignCenter
      space="between"
      height={50}>
      {renderElement()}
    </Block>
  );
};

export default Header;
