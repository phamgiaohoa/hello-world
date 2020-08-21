import React, {useState, useEffect, useRef, Component} from 'react';
// import ListView from 'react-native-listview';

import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Button from './../components/Button';
import Header from './../components/Custom/Header';
import Block from './../components/Block';

import {SliderBox} from 'react-native-image-slider-box';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      cartArray:[],
      images: [
        'https://source.unsplash.com/1024x768/?nature',
        'https://source.unsplash.com/1024x768/?water',
        'https://source.unsplash.com/1024x768/?girl',
        'https://source.unsplash.com/1024x768/?tree', // Network image
        require('./../assets/banner_large1.png'), // Local image
      ],
    };
  }


  onLayout = (e) => {
    this.setState({
      width: e.nativeEvent.layout.width,
    });
  };

  renderItem = () => {};
  renderItem = ({item}) => {
    let renderWidth = '45%';
    if (this.state.dataSource.length % 2 != 0) {
      renderWidth = '65.5%';
    }
    return (
      <Block>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: item.img}}></Image>

        {/* <Text>{item.img}</Text> */}
        <Text>{item.product}</Text>
        {/* <Text>{item.mota}</Text> */}
      </Block>
    );
  };

  componentDidMount() {
    const url = 'http://10.82.77.96/Hoa/api/dangnhap_dangki/FruitsList.php';
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
      <SafeAreaView style={styles.MainContainer}>
        <ScrollView
          // refreshControl={
          //   <RefreshControl
          //   // refreshing={isLoading}
          //   // onRefresh={() => onRefresh()}
          //   ></RefreshControl>
          // }
          style={{backgroundColor: '#FFF'}}
          showsVerticalScrollIndicator={false}>
          <Block backgroundColor={'#fff'}>
            <Image
              style={{
                width: '100%',
                height: 100,
              }}
              source={require('../assets/banner_large1.png')}
            />
          </Block>
          <Block paddingTop={10} onLayout={this.onLayout}>
        
            <SliderBox
              autoplay
              circleLoop
              images={this.state.images}
              sliderBoxHeight={100}
              onCurrentImagePressed={(index) =>
                console.warn(`image ${index} pressed`)
              }
              parentWidth={this.state.width}
            />
            
            {/* /> */}
          </Block>
          <Block alignCenter justifyCenter>
            <FlatList
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              numColumns={2}
              data={this.state.dataSource}
              renderItem={({item}) => {
                return (
                  <Button
                    onPress={() => { 
                      this.props.navigation.navigate('chitiet',{
                        id: item.id,
                        sanpham_name: item.sanpham_name,
                        mota: item.mota,
                        img: item.img,
                       data: item
                      })
                    }}
                    style={{width: 170, marginLeft: 20, marginVertical: 20, alignCenter:'Center'}}>
                    <Block  >
                      <Image
                        style={{width: 100, height: 100}}
                        source={{uri: item.img}}></Image>

                      {/* <Text>{item.img}</Text> */}
                      <Text  >{item.sanpham_name}</Text>
                      {/* <Text>{item.mota}</Text> */}
                    </Block>
                  </Button>
                );
              }}
              keyExtractor={(item, index) => index}></FlatList>
          </Block>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },


});
