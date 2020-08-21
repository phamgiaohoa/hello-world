import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  View,
  Platform,
  Picker,
  ActivityIndicator,
  Alert,
  Text,
  FlatList,
} from 'react-native';
import Button from './../components/Button';
import Block from './../components/Block';
import Header from './../components/Custom/Header';
import TextInputLabel from './../components/Custom/TextInputLabel';
import PickerCustom from './../components/Custom/PickerCustom';
import {CustomPicker} from 'react-native-custom-picker';
import TINH from './../json/tinh.json';
import HUYEN from './../json/huyen.json';
import All from './../json/all.json';
import RNPickerSelect from 'react-native-picker-select';
function Item({item}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text>{item.name}</Text>
        </View>
      </View>
    </View>
  );
}
export default class aaaaaaaaaaaaaaaaaaaaaaaaaaaa extends Component {
  render() {
    
    return (
      <View style={styles.MainContainer}>
        
        <CustomPicker
          options={All}
          getLabel={item => item.name}
          fieldTemplate={this.renderField}
          optionTemplate={this.renderOption}
          headerTemplate={this.renderHeader}
          footerTemplate={this.renderFooter}
          onValueChange={(value) => {
            console.log('7789',TINH);
            Alert.alert('Selected Item', value ? JSON.stringify(value.name) : 'No item were selected!')
          }}
        />
      
        
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },
});
