import React, { Component } from 'react';

import { StyleSheet, View, Alert, TextInput, Text, Platform, TouchableOpacity, ListView, ActivityIndicator, SafeAreaView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Button from './../components/Button';
import Header from './../components/Custom/Header';
import Block from './../components/Block';
import SvgIcon from './../assets/icons/SvgIcon';
export default class Management extends Component {

    static navigationOptions =
    {
       title: 'Management',
    };
  
  constructor(props) {
  
     super(props)
  
     this.state = {
  
       TextInput_name: '',
       TextInput_mota: '',
       TextInput_img: '',
      
  
     }
  
   }
  
   InsertStudentRecordsToServer = () =>{
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa')
        fetch('http://10.82.77.96/Hoa/api/dangnhap_dangki/InsertData.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
  
          name : this.state.TextInput_Name,
  
          mota : this.state.TextInput_mota,
  
          img : this.state.TextInput_img,
  
  
  
        })
  
        }).then((response) => response.json())
            .then((responseJson) => {
  
              // Showing response message coming from server after inserting records.
              Alert.alert(responseJson);
  
            }).catch((error) => {
              console.error(error);
            });
  
  }
  
   GoTo_Show_StudentList_Activity_Function = () =>
    {
        this.props.navigation.navigate('ShowStudentListActivity');
      
    }
  
   render() {
     return (
  
  <SafeAreaView >
  
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
        title="CHI TIẾT ĐƠN HÀNG"
      />
     <Block justifyCenter alignCenter>
         <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Thêm sản phẩm </Text>
   
         <TextInput
           
           placeholder="Enter Name"
  
           onChangeText={ TextInputValue => this.setState({ TextInput_Name : TextInputValue }) }
  
           underlineColorAndroid='transparent'
  
           style={styles.TextInputStyleClass}
         />
  
        <TextInput
           
           placeholder="Enter  mota"
  
           onChangeText={ TextInputValue => this.setState({ TextInput_mota : TextInputValue }) }
  
           underlineColorAndroid='transparent'
  
           style={styles.TextInputStyleClass}
         />
  
        <TextInput
           
           placeholder="Enter img"
  
           onChangeText={ TextInputValue => this.setState({ TextInput_img : TextInputValue }) }
  
           underlineColorAndroid='transparent'
  
           style={styles.TextInputStyleClass}
         />
  
         {/* <TextInput
  
           placeholder="Enter Student Email"
  
           onChangeText={ TextInputValue => this.setState({ TextInput_Student_Email : TextInputValue }) }
  
           underlineColorAndroid='transparent'
  
           style={styles.TextInputStyleClass}
         /> */}
  
        <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertStudentRecordsToServer} >
  
          <Text style={styles.TextStyle}> INSERT  RECORD TO SERVER </Text>
  
        </TouchableOpacity>
  
        <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.GoTo_Show_StudentList_Activity_Function} >
  
          <Text style={styles.TextStyle}> SHOW ALL INSERTED  RECORDS IN LISTVIEW </Text>
  
        </TouchableOpacity>
   
        </Block>
  </SafeAreaView>
             
     );
   }
  }
  const styles = StyleSheet.create({

    MainContainer :{
  
      alignItems: 'center',
      flex:1,
      paddingTop: 30,
      backgroundColor: '#fff'
  
    },
  
    MainContainer_For_Show_StudentList_Activity :{
      
      flex:1,
      paddingTop: (Platform.OS == 'ios') ? 20 : 0,
      marginLeft: 5,
      marginRight: 5
      
      },
  
    TextInputStyleClass: {
  
    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5 ,
  
    },
  
    TouchableOpacityStyle: {
  
      paddingTop:10,
      paddingBottom:10,
      borderRadius:5,
      marginBottom:7,
      width: '90%',
      backgroundColor: '#00BCD4'
  
    },
  
    TextStyle:{
      color:'#fff',
      textAlign:'center',
    },
  
    rowViewContainer: {
      fontSize: 20,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
    }
  
  });