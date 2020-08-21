import React, {Component} from 'react';

import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
// import MTIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MTIcon from 'react-native-vector-icons/Entypo';
// Importing Stack Navigator library to add multiple activities.
// import { StackNavigator } from 'react-navigation';
import Header from './../components/Custom/Header';
import SvgIcon from './../assets/icons/SvgIcon';
// Creating Login Activity.
import Button from './../components/Button';

import Block from './../components/Block';
export default class LoginActivity extends Component {
  // Setting up Login Activity title.
  static navigationOptions = {
    title: 'LoginActivity',
  };

  constructor(props) {
    super(props);

    this.state = {
      UserEmail: '',
      UserPassword: '',
    };
  }
  chuyentarng = () => {
    this.props.navigation.navigate('MainProject');
  };

  UserLoginFunction = () => {
    const {UserEmail} = this.state;
    const {UserPassword} = this.state;
    ///10.0.0.0
    console.log('ádasdas', UserEmail);
    fetch('http://10.82.77.96/Hoa/api/dangnhap_dangki/User_Login.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: UserEmail,

        password: UserPassword,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // If server response message same as Data Matched
        if (responseJson === 'Data Matched') {
          //Then open Profile activity and send user email to profile activity.
          this.props.navigation.navigate('BottomTab');
        } else {
          Alert.alert(responseJson);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
          {/* <Header
            backgroundColor={'red'}
            back
            goBack={() => {
              this.props.navigation.goBack();
            }}
            title={'Cá nhân'}
          /> */}

          <Block margin={5} backgroundColor={'#fff'} alignCenter justifyCenter>
            <Image
              style={{
                width: '100%',
                height: 120,
                backgroundColor: 'red',
                color: 'red',
              }}
              source={require('../assets/232.apple_banner.jpg')}
            />
          </Block>
          <Block
            marginTop={10}
            justifyCenter
            alignCenter
            backgroundColor={'#fff'}
            marginBottom={10}>
            <Text
              style={{
                size: 20,
                fontWeight: 'bold',
                padding: 10,
                justifyCenter: 'center',
                alignCenter:'center'
              }}>
              Chào mừng bạn đến với hệ thống cung cấp max book
            </Text>
            <Text
              style={{
                size: 20,
                fontWeight: 'bold',
                padding: 10,
                justifyCenter: 'center',
              }}>
              hàng nhập khẩu
            </Text>
          </Block>
          <Block
            paddingTop={20}
            alignCenter
            justifyCenter
            backgroundColor={'#fff'}>
            <Block backgroundColor={'#fff'}>
              <Block
                width={320}
                height={40}
                underlineColorAndroid="transparent"
                marginBottom={20}
                backgroundColor={'#F0E68C'}
                radius={100}>
                <TextInput
                  marginLeft={15}
                  placeholder={'Email/Số điện thoại'}
                  onChangeText={(UserEmail) => this.setState({UserEmail})}
                />
              </Block>

              <Block
                width={320}
                height={40}
                marginBottom={20}
                backgroundColor={'#F0E68C'}
                radius={100}>
                <TextInput
                  marginLeft={15}
                  placeholder={'Mật khẩu'}
                  underlineColorAndroid="transparent"
                  secureTextEntry={true}
                  onChangeText={(UserPassword) => this.setState({UserPassword})}
                />
              </Block>
            </Block>
            <Button
              alignCenter
              justifyCenter
              marginTop={15}
              marginBottom={5}
              width={320}
              height={35}
              backgroundColor={'#C68E17'}
              onPress={this.UserLoginFunction}>
              <Text bold size={18} color={'#FFF'}>
                ĐĂNG NHẬP
              </Text>
            </Button>
            <Button margin={20}>
              <Text onPress={this.chuyentarng} style={{color:'red'}}>
                Đăng kí tài khoảng
              </Text>
            </Button>

            <Block row justifyCenter alignCenter width={'90%'}>
              <Block
                border={1}
                borderColor={'#ffff70'}
                height={1 / 12}
                width={'30%'}
              />
              <Text
                marginVertical={20}
                color={'#ffff70'}
                width={'40%'}
                marginHorizontal={10}
                size={13}>
                Hoặc đăng nhập với
              </Text>
              <Block
                border={1}
                borderColor={'#ffff70'}
                height={1 / 2}
                width={'30%'}
              />
            </Block>

            <Block marginTop={30} row>
              <Button>
                <Image
                  style={{width: 60, height: 60}}
                  source={require('../assets/face.icon.png')}
                />
              </Button>

              <Button>
                <Image
                  marginTop={4}
                  style={{width: 50, height: 50}}
                  source={require('../assets/gmail.icon.png')}
                />
              </Button>
            </Block>
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
