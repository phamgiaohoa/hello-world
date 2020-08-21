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
// import global from './../Cart/global'
import {SliderBox} from 'react-native-image-slider-box';
import {useSelector, useDispatch} from 'react-redux';
import {addItemToCardAction} from '../../src/redux/action/actionCart';
export default class chitiet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartArray: [],
      TextInput_ID: '',
      TextInput_sanpham_Name: '',
      TextInput_mota: '',
      TextInput_img: '',
    };
    global.addProductTocart = this.addProductTocart.bind(this);
  }
  addProductTocart(product) {
    this,
      setState({
        cartArray: {
          TextInput_ID: this.props.route.params.id,
          TextInput_sanpham_Name: this.props.route.params.sanpham_name,
          TextInput_mota: this.props.route.params.mota,
          TextInput_img: this.props.route.params.img,
        },
      });
  }
  // dispatch = useDispatch();
  // insertIntoCart = (item, buyNow)=>{
  //   dispatch(addItemToCardAction(item, { cart: dataCart }));
  //     if (buyNow) {
  //       navigation.navigate('CartScreen');
  //     } else {
  //       Alert.alert('Thông báo', 'Sản phẩm đã được thêm vào giỏ hàng')
  //     }
  // }

  componentDidMount() {
    // Received Student Details Sent From Previous Activity and Set Into State.
    console.log('aa', this.props.route.params);
    console.log('id', this.props.route.params.id);
    console.log('name', this.props.route.params.sanpham_name);
    console.log('mota', this.props.route.params.mota);
    console.log('img', this.props.route.params.img);

    this.setState({
      TextInput_ID: this.props.route.params.id,
      TextInput_sanpham_Name: this.props.route.params.sanpham_name,
      TextInput_mota: this.props.route.params.mota,
      TextInput_img: this.props.route.params.img,
    });
    // this.setState({
    //   cartArray: {
    //     TextInput_ID: this.props.route.params.id,
    //     TextInput_sanpham_Name: this.props.route.params.sanpham_name,
    //     TextInput_mota: this.props.route.params.mota,
    //     TextInput_img: this.props.route.params.img,
    //   },
    // });
  }

  render() {
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
          title="CHI TIẾT SẢN PHẨM"
        />
        <ScrollView
          style={{backgroundColor: '#FFF'}}
          showsVerticalScrollIndicator={false}>
          <Block marginTop={30} alignCenter>
            <Block style={styles.slide}>
              <Image
                style={{width: 100, height: 100}}
                source={{uri: this.state.TextInput_img}}></Image>
            </Block>
            <Text center size={20} bold></Text>

            <Text center color="gray" marginTop={5}>
              MÃ SP: {this.state.TextInput_ID}
            </Text>
            <Text marginTop={10} size={16} color="gray">
              Tên sản phẩm:{this.state.TextInput_sanpham_Name}
            </Text>

            <Text marginTop={10} size={18} color="red">
              đ
            </Text>

            <Button
              backgroundColor={'#fff2e0'}
              padding={10}
              width={220}
              marginVertical={10}
              row
              justifyCenter
              onPress={() =>
                addProductTocart(this.props.route.params.cartArray, false)
              }
              // onPress={() => {
              //   this.props.navigation.navigate('CartScreen',{
              //     id: this.state.TextInput_ID,
              //     sanpham_name: this.state.TextInput_sanpham_Name,
              //     mota: this.state.TextInput_mota,
              //     img: this.state.TextInput_img,
              //   //  data: item
              //   })
              // }}
            >
              <Text size={20} color={'#c27570'}>
                MUA NGAY
              </Text>
            </Button>

            <Button
              backgroundColor={'#fff2e0'}
              padding={10}
              width={220}
              row
              justifyCenter>
              <Text size={20} color={'#c27570'}>
                THÊM GIỎ HÀNG
              </Text>
            </Button>
            <Block
              backgroundColor="black"
              width={'100%'}
              marginTop={20}
              marginBottom={10}
              height={2}>
              <Text></Text>
            </Block>
            <Text marginTop={10} size={16} color="gray">
              Mô tả: {this.state.TextInput_mota}
            </Text>
          </Block>
        </ScrollView>
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
