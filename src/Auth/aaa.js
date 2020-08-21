import React, {Component} from 'react';
// import ListView from 'react-native-listview';

import {
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  Text,
  View,
  Alert,
  FlatList,
  Block,
  Image,
  
} from 'react-native';
import Header from '../components/Custom/Header';
export default class aaa extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }
  renderItem = () => {};
  renderItem = ({item}) => {
    return (
    
    
      <View  paddingTop={10}>
        
        <View style={{alignItems: 'center'}} >
          <Image
            style={{width: 200, height: 200}}
            source={{uri: item.img}}></Image>
        </View>
        <View paddingTop={20} backgroundColor={'#fff'}>
          {/* <Text>{item.img}</Text> */}
          <Text>{item.product}</Text>
          <Text>{item.mota}</Text>
        </View>
      </View>
    );
  };

  componentDidMount() {
    const url = 'http://192.168.1.177/asm/api/FruitsList/FruitsList.php';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <SafeAreaView >
        <Header
          title="Thông tin tài khoản"
        />
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}></FlatList>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // alignContent: 'center',
    // backgroundColor: 'red',
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
