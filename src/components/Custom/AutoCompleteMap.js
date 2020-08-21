import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, FlatList, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';
import Block from './../Block';
import Button from './../Button';
import Text from './../Text';
import FetchMap from './../../api/map';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {colors} from '../../shared/styleShare';

export default function AutoCompleteMap({isVisible, onChoose, onClose}) {
  const [listAddress, setListAddress] = useState([]);
  const [selected, setSelected] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    {
      onChoose(selected);
      onClose();
    }
  }, [selected]);

  const getPlace = keyword => {
    setIsLoading(true);

    console.log(keyword);
    FetchMap.getAutocompletePlaceAPI(keyword).then(data => {
      if (data) {
        console.log(data?.data?.predictions);
        setListAddress(data?.data?.predictions);
        setIsLoading(false);
      }
    });
    if (!keyword) {
      setIsLoading(false);
    }
  };

  return (
    <Modal isVisible={isVisible} style={{margin: 0}}>
      <Block flex width={'100%'} backgroundColor={'#FFF'} alignCenter>
        <Block width={'90%'} marginTop={10} alignEnd>
          <Button
            onPress={() => {
              onClose();
            }}>
            <AntIcon name="close" size={30} />
          </Button>
        </Block>
        <Block style={styles.textInput}>
          <TextInput
            placeholder={'Vui lòng nhập địa chỉ bạn muốn chọn'}
            onChange={e => {
              getPlace(e.nativeEvent.text);
            }}
          />
          <AntIcon name="search1" size={20} />
        </Block>

        {isLoading ? (
          <ActivityIndicator color={colors.primaryColor} />
        ) : (
          <FlatList
            data={listAddress}
            renderItem={({item}) => {
              return (
                <Button
                  onPress={() => {
                    setSelected(item?.description);
                  }}
                  row
                  width={'100%'}
                  paddingVertical={15}
                  paddingHorizontal={10}
                  >
                  <Block
                    height={40}
                    width={40}
                    radius={40 / 2}
                    justifyCenter
                    alignCenter>
                    <IconFA5 name="map-marker-alt" size={25} />
                  </Block>
                  <Block
                    marginHorizontal={10}
                    width={'85%'}
                    style={{borderBottomWidth: 1}}>
                    <Text>{item.description}</Text>
                  </Block>
                </Button>
              );
            }}
          />
        )}
      </Block>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flexDirection: 'row',
    height: 40,
    marginVertical: 10,
    width: '90%',
    borderColor: 'gray',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
