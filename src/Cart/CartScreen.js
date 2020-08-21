import React, {useState, useEffect, useRef, Component} from 'react';
// import ListView from 'react-native-listview';
import SvgIcon from './../../src/assets/icons/SvgIcon';
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

export default class CartScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartArray: [],
      TextInput_ID: '',
      TextInput_sanpham_Name: '',
      TextInput_mota: '',
      TextInput_img: '',
    };
  }
  componentDidMount() {
    // Received Student Details Sent From Previous Activity and Set Into State.
    console.log('aa', this.props.route.params);
    console.log('id', this.props.route.params.id);
    console.log('name', this.props.route.params.name);
    console.log('mota', this.props.route.params.mota);
    console.log('img', this.props.route.params.img);
    this.setState({
      TextInput_ID: this.props.route.params.id,
      TextInput_sanpham_Name: this.props.route.params.sanpham_name,
      TextInput_mota: this.props.route.params.mota,
      TextInput_img: this.props.route.params.img,
    });
  }
  render() {
    // const {cartArray} = this.props;
    return (
      <SafeAreaView style={styles.MainContainer}>
        <Header
          back
       
          goBack={() => {
            this.props.navigation.goBack();
          }}
          
          // rightRender={
          //   <Button
          //   onPress={() => navigation.navigate('HomeTab')}
          //   marginRight={10}
          //   marginLeft={-25}>
          //     <SvgIcon name="home"/>
          //   </Button>
          // }
          title="giỏ hàng"
          home
          
            
            
        > </Header>
        <ScrollView
          style={{backgroundColor: '#FFF'}}
          // showsVerticalScrollIndicator={false}
          >
          {/* {cartArray.map(product => { */}
          <Block marginTop={5}> 
            <Block backgroundColor="#D3D3D3">
              <Block
                row
                justifyCenter
                alignCenter
                marginTop={10}
                marginBottom={10}>
                <Block
                  width={20}
                  height={20}
                  radius={10}
                  backgroundColor="#FFD700"
                  justifyCenter
                  alignCenter>
                  <Block
                    width={15}
                    height={15}
                    radius={10}
                    backgroundColor="#FFD700"
                    justifyCenter
                    alignCenter>
                    {/* <IconAnt name="shoppingcart" color="#fff" size={10} /> */}
                  </Block>
                </Block>

                <Block width={200} height={3} backgroundColor="#C0C0C0" />

                <Block
                  width={20}
                  height={20}
                  radius={10}
                  border={1}
                  borderColor="#FFD700"
                  justifyCenter
                  alignCenter>
                  <Block
                    width={15}
                    height={15}
                    radius={10}
                    backgroundColor="#fff"
                    justifyCenter
                    alignCenter> 
                    {/* <IconMaCom name="user-check" color="#FFD700" size={10} /> */}
                  </Block>
                </Block>
              </Block>
              <Block
                row
                width={'100%'}
                space="around"
                justifyCenter
                alignCenter
                marginBottom={10}>
                <Block width={100} marginLeft={50}>
                  <Text size={10}>Xác nhận giỏ hàng</Text>
                </Block>

                <Block width={100} marginLeft={100}>
                  <Text size={10}>Hoàn tất</Text>
                </Block>
              </Block>
            </Block>
            <Block paddingTop={10} row>
              <Block marginLeft={20} style={styles.slide}>
                <Image
                  style={{width: 100, height: 100}}
                  source={{uri: this.state.TextInput_img}}></Image>
              </Block>
              <Text center size={20} bold></Text>
              <Block width={'70%'} alignCenter backgroundColor='#fff'>
                <Text marginTop={10} size={16} color="gray">
                  Tên sản phẩm:{this.state.TextInput_sanpham_Name}
                </Text>
                <Block>
              <Text marginTop={10} size={16} color="gray">
                  giá: 10.000.000 VNĐ
                </Text>
              </Block>
              </Block>
              
            </Block>
          </Block>
          {/* })} */}

        </ScrollView>
        <Block alignCenter justifyCenter>
          <Button
            backgroundColor={'red'}
            padding={10}
            width={220}
            marginVertical={10}
            row
            justifyCenter>
            <Text size={20} color={'#c27570'}>
              TIẾN HÀNH MUA HÀNG
            </Text>
          </Button>
        </Block>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,

    // justifyContent: 'center',
    flex: 1,
  },

  flatList: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
});
