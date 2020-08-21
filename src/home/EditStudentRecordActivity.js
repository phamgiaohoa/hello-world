import React, {Component, useState, useEffect} from 'react';

import {
  StyleSheet,
  View,
  Alert,
  TextInput,
  Text,
  Platform,
  TouchableOpacity,
  ListView,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Button from './../components/Button';
import Header from './../components/Custom/Header';
import Block from './../components/Block';
import SvgIcon from './../assets/icons/SvgIcon';

export default class EditStudentRecordActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      TextInput_ID: '',
      TextInput_sanpham_Name: '',
      TextInput_mota: '',
      TextInput_img: '',
    };
  }

  componentDidMount() {
    // Received Student Details Sent From Previous Activity and Set Into State.
    console.log('aa', this.props.route.params)
    console.log('id', this.props.route.params.id)
    console.log('name', this.props.route.params.name)
    console.log('mota', this.props.route.params.mota)
    console.log('img', this.props.route.params.img)

    this.setState({
      TextInput_ID: this.props.route.params.id,
      TextInput_sanpham_Name: this.props.route.params.sanpham_name,
      TextInput_mota: this.props.route.params.mota,
      TextInput_img: this.props.route.params.img,
    });
  }

  static navigationOptions = {
    title: 'EditStudentRecordActivity',
  };

  UpdateStudentRecord = () => {
    fetch(
      'http://10.82.77.96/Hoa/api/dangnhap_dangki/UpdateRecord.php',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        id: this.state.TextInput_ID,

         sanpham_name: this.state.TextInput_sanpham_Name,

          mota: this.state.TextInput_mota,

         img: this.state.TextInput_img,
        }),
      },
    )
      .then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server updating records.
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  DeleteStudentRecord = () => {
    fetch(
      'http://10.82.77.96/Hoa/api/dangnhap_dangki/DeleteRecord.php',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.state.TextInput_ID,
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

    this.props.navigation.navigate('First');
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}>
          {' '}
          Edit Student Record Form{' '}
        </Text>

        <TextInput
          placeholder="Student Name Shows Here"
          value={this.state.TextInput_sanpham_Name}
          onChangeText={(TextInputValue) =>
            this.setState({TextInput_sanpham_Name: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Student Class Shows Here"
          value={this.state.TextInput_mota}
          onChangeText={(TextInputValue) =>
            this.setState({TextInput_mota: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        {/* <TextInput
          placeholder="Student Phone Number Shows Here"
          value={this.state.TextInput_Student_PhoneNumber}
          onChangeText={(TextInputValue) =>
            this.setState({TextInput_Student_PhoneNumber: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        /> */}

        <TextInput
          placeholder="Student Email Shows Here"
          value={this.state.TextInput_img}
          onChangeText={(TextInputValue) =>
            this.setState({TextInput_img: TextInputValue})
          }
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
        />

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.UpdateStudentRecord}>
          <Text style={styles.TextStyle}> UPDATE STUDENT RECORD </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.TouchableOpacityStyle}
          onPress={this.DeleteStudentRecord}>
          <Text style={styles.TextStyle}> DELETE CURRENT RECORD </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },

  MainContainer_For_Show_StudentList_Activity: {
    flex: 1,
    paddingTop: Platform.OS == 'ios' ? 20 : 0,
    marginLeft: 5,
    marginRight: 5,
  },

  TextInputStyleClass: {
    textAlign: 'center',
    width: '90%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#FF5722',
    borderRadius: 5,
  },

  TouchableOpacityStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '90%',
    backgroundColor: '#00BCD4',
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
