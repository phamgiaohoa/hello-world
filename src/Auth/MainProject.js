import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  TextInput,
  View,
  Alert,SafeAreaView,
  Text,
} from 'react-native';
import Button from './../components/Button';
import Header from './../components/Custom/Header';
import Block from './../components/Block';
export default class MainProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserName: '',
      UserEmail: '',
      UserPassword: '',
    };
  }

  UserRegistrationFunction = () => {
    const {UserName} = this.state;
    const {UserEmail} = this.state;
    const {UserPassword} = this.state;

    fetch(
      'http://10.82.77.96/Hoa/api/dangnhap_dangki/user_registration.php',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: UserName,

          email: UserEmail,

          password: UserPassword,
        }),
      },
    )
      .then((response) => response.json())

      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
        title="ĐĂNG KÍ TÀI KHOẢNG"
      />
      <Block justifyCenter alignCenter style={styles.MainContainer}>
         <Text
          style={{
            fontSize: 20,
            color: '#000',
            textAlign: 'center',
            marginBottom: 50,
          }}>
          CHÀO MỪNG BẠN ĐẾN VỚI THẾ GIỚI LAPTOP MAC
        </Text>
        

        <TextInput
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Name"
          onChangeText={(UserName) => this.setState({UserName})}
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Email"
          onChangeText={(UserEmail) => this.setState({UserEmail})}
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Password"
          onChangeText={(UserPassword) => this.setState({UserPassword})}
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
        />

        <Button
          style={{width: 100, height: 30, textAlign: 'center'}}
          backgroundColor="#fff"
          alignCenter
          justifyCenter
          onPress={this.UserRegistrationFunction}>
          <Text color="red">ĐĂNG KÝ</Text>
        </Button>
      </Block>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#FFF380',
   
    flex: 1,

  },

  TextInputStyleClass: {
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 7,
    height: 40,
    width: 300,
    backgroundColor: '#fff',
    // Set border Hex Color Code Here.
    borderColor: '#2196F3',

    // Set border Radius.
    borderRadius: 5,

    // Set border Radius.
    //borderRadius: 10 ,
  },
});

AppRegistry.registerComponent('MainProject', () => MainProject);
