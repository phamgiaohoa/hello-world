import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Block from '../Block';
import Text from '../Text';
// import TextInput from '../TextInput';
import {TextInput} from 'react-native';
// import {TextInputLayout} from 'rn-textinputlayout';
// import {TextField} from 'react-native-material-textfield';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const TextInputLabel = (props) => {
  return (
    <Block width="100%" marginVertical={5} justifyCenter>
      {/* {props.label ? <Text size={17} style={props.styleLabel ? props.styleLabel : {}} marginLeft={'5%'} marginVertical={5}>{
                    props.label ? props.label : ''}
                </Text> : null} */}
      <Block width={WIDTH} alignCenter>
        {props.number ? (
          <TextInput
            value={props.value}
            width={WIDTH - 30}
            height={50}
            style={[
              styles.textInput,
              {
                fontSize: 16,
                borderRadius: props.radius,
                borderColor: props.error
                  ? 'red'
                  : props.borderColor
                  ? props.borderColor
                  : '#000',
              },
            ]}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            numberOfLines={5}
            paddingHorizontal={20}
            secureTextEntry={props.secureTextEntry}
            editable={props.editable}
            // onSubmitEditing={props.onSubmitEditing}
            // ref={props.ref}
            number></TextInput>
        ) : (
          <TextInput
            value={props.value}
            width={WIDTH - 40}
            height={50}
            style={[
              styles.textInput,
              {
                fontSize: 16,
                borderRadius: props.radius,
                borderColor: props.error
                  ? 'red'
                  : props.borderColor
                  ? props.borderColor
                  : '#000',
              },
            ]}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            secureTextEntry={props.secureTextEntry}
            editable={props.editable}></TextInput>
        )}
      </Block>
      {props.error ? (
        <Text color="red" size={13} marginLeft={'5%'}>
          {props.msgError}
        </Text>
      ) : null}
    </Block>
  );
};

export default TextInputLabel;

const styles = StyleSheet.create({
  textInput: {
    // borderWidth : 1/2
  },
});
