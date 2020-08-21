import React, {Component} from 'react';

import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
  Image,
  ImageView,
  Text,
  ActivityIndicator,
  FlatList,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Button from './../components/Button';
import Header from './../components/Custom/Header';
import Block from './../components/Block';

export default class ManagerAddress extends Component {
  static navigationOptions = {
    title: 'themdiachi',
  };

  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const url = 'http://10.82.77.96/Hoa/api/dangnhap_dangki/showdiachi.php';
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

  DeleteStudentRecord = (selected) => {
    console.log('ádasd', selected);
    fetch('http://10.82.77.96/Hoa/api/dangnhap_dangki/deletedichi.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        id: selected,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log('ádaaaaaaaaaaaaaaaaaaaaasd', selected);
    // this.props.navigation.navigate('First');
  };
  render() {
    const onHuyDangKy = (selected) => {
      console.log('aaaaaaaaaa', selected);
      if (selected) {
        Alert.alert('Xác nhận', 'Bạn có chắc muốn huỷ đại chỉ này', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              this.DeleteStudentRecord(selected);
            },
          },
        ]);
      } else {
        Alert.alert('Thông báo', 'Vui lòng chọn đại chỉ');
      }
    };
    return (
      <SafeAreaView style={{...styles.MainContainer, flex: 1}}>
        <Header
          back
          goBack={() => {
            this.props.navigation.goBack();
          }}
          title="quản lí địa chỉ"
        />
      
        <ScrollView
          style={{backgroundColor: '#fff'}}
         >
          {/* <Block backgroundColor={'#fff'}></Block> */}
          {/* <Block paddingTop={10} onLayout={this.onLayout}></Block> */}
     
          <Block >
            <FlatList
              style={{margin: 5}}
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              data={this.state.dataSource}
              renderItem={({item}) => {
                return (
                  <Button
                    onPress={() => {
                      onHuyDangKy(item.id);
                      console.log('item', item.id);
                    }}
                    style={{backgroundColor: '#FBB917', marginTop: 10}}>
                    <Block>
                      <Text>Tên người nhận hàng: {item.name}</Text>
                      <Text>Số điện thoại {item.phone}</Text>
                      <Text>Tỉnh/Thành phố{item.tinh}</Text>
                      <Text>Huyện/xã{item.huyen}</Text>
                      <Text>Địa chỉ{item.mota}</Text>
                    </Block>
                  </Button>
                );
              }}
              keyExtractor={(item, index) => index}></FlatList>
          </Block>

        </ScrollView>
       
        <Block marginBottom={10} alignCenter justifyCenter>
        <Button
          onPress={() => {
            this.props.navigation.navigate('themdiachi');
          }}
          alignCenter
   
          backgroundColor="#EAC117">
          <Text >
            Thêm địa chỉ mới để giao nhận hàng
          </Text>
        </Button>
        </Block>
        
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
});
