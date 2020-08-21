import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
  Image,
  ImageView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from './../components/Button';
import Header from './../components/Custom/Header';
import Block from './../components/Block';
const ProfileScreen = (props, route) => {
  // chuyentrang = () => {
  //   props.navigation.navigate('Login');
  // };
  const onLogOut = async () => {
    // await AsyncStorage.removeItem('token');
    props.navigation.navigate('Login');
  };
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.currentUser);
  console.log('ádasdas', route.UserEmail);

  const onNavigate = (name, data) => {
    if (userData) {
      props.navigation.navigate(name, data);
    } else {
      props.navigation.navigate('LoginTab', data);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Cá nhân'} />

      <Block alignCenter justifyCenter>
        <Button
          onPress={() => {
            props.navigation.navigate('Login');
          }}
          space="between"
          row
          width="90%"
          paddingVertical={15}>
          {!userData ? (
            <Block row>
              <Image
                style={{width: 50, height: 50}}
                source={require('../assets/3.jpg')}
              />
              <Block justifyCenter marginLeft={10}>
                <Block>
                  <Text size={20}>Tài khoản</Text>
                </Block>

                <Block></Block>
              </Block>
            </Block>
          ) : null}
        </Button>

        <Button onPress={() => {
            props.navigation.navigate('Management');
          }}  space="between" row width="90%" paddingVertical={15}>
          <Block row>
            <Image
              style={{width: 50, height: 50}}
              source={require('../assets/3.jpg')}
            />
            <Block justifyCenter marginLeft={10}>
              <Block>
                <Text size={17}>Quản lý sản phẩm </Text>
              </Block>
            </Block>
          </Block>
        </Button>

        <Button
          onPress={() => {
            props.navigation.navigate('ManagerAddress');
          }}
          space="between"
          row
          width="90%"
          paddingVertical={15}>
          <Block row>
            <Image
              style={{width: 50, height: 50}}
              source={require('../assets/3.jpg')}
            />
            <Block justifyCenter marginLeft={10}>
              <Block>
                <Text size={17}>Quản lý địa chỉ</Text>
              </Block>
            </Block>
          </Block>
          <Block right={0} justifyCenter></Block>
        </Button>
        <Button  onPress={() => {
            props.navigation.navigate('doimatkhau');
          }} space="between" row width="90%" paddingVertical={15}>
          <Block row>
            <Image
              style={{width: 50, height: 50}}
              source={require('../assets/3.jpg')}
            />
            <Block justifyCenter marginLeft={10}>
              <Block>
                <Text size={17}>ĐỔI MẬT KHẨU</Text>
              </Block>
            </Block>
          </Block>
          <Block right={0} justifyCenter></Block>
        </Button>
        <Button    onPress={() => {
                onLogOut();
              }} row width="90%" paddingVertical={15}>
          <Block justifyCenter marginLeft={10}>
            <Block>
              <Text size={17}>Đăng xuất tài khoản</Text>
            </Block>
          </Block>
        </Button>
      </Block>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
