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
  ListView,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Button from './../components/Button';
import Header from './../components/Custom/Header';
import Block from './../components/Block';
export default class ShowStudentListActivity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      isLoading: true,
    };
  }

  static navigationOptions = {
    title: 'ShowStudentListActivity',
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
  GetStudentIDFunction = (id, name, mota, img) => {
    this.props.navigation.navigate('EditStudentRecordActivity', {
      id: id,
      name: name,
      mota: mota,
      img: img,
    });
  };
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
  render() {
    // if (this.state.isLoading) {
    //   return (
    //     <View style={{flex: 1, paddingTop: 20}}>
    //       <ActivityIndicator />
    //     </View>
    //   );
    // }
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
          title="sản phẩm"
        />
        <ScrollView
          // refreshControl={
          //   <RefreshControl
          //   // refreshing={isLoading}
          //   // onRefresh={() => onRefresh()}
          //   ></RefreshControl>
          // }
          style={{backgroundColor: '#FFF'}}
          showsVerticalScrollIndicator={false}>
          <Block backgroundColor={'#fff'}></Block>
          <Block paddingTop={10} onLayout={this.onLayout}></Block>
          <Block>
          <FlatList style={{margin:5}}
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              numColumns={2}
              data={this.state.dataSource}
              renderItem={({item}) => {
                return (
                  <Button
                    onPress={() => {
                      this.props.navigation.navigate('EditStudentRecordActivity', {
                        id: item.id,
                        sanpham_name: item.sanpham_name,
                        mota: item.mota,
                        img: item.img,
                       data: item
                    
                      })
                    }}
                    style={{width: 170, marginLeft: 10, marginVertical: 20}}>
                    <Block>
                      <Image
                        style={{width: 100, height: 100}}
                        source={{uri: item.img}}></Image>

                      {/* <Text>{item.img}</Text> */}
                      <Text>{item.product}</Text>
                      <Text>{item.mota}</Text>
                      <Text>{item.sanpham_name}</Text>
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

    // justifyContent: 'center',
    flex: 1,
  },

  flatList: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
});
