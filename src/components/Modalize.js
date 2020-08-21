/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useEffect} from 'react';
import {Image, Alert} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {useSelector, useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Block, Button, Text} from './index';
import {colors} from '../shared/styleShare';
import {closeModalAction} from './../redux/action/actionModalProduct';
import formatNumber from './../utils/formatNumber';
import {addItemToCardAction} from './../redux/action/actionCart';

export default function ModalProduct(props) {
  const selected = useSelector(state => state.modalProductReducer);
  console.log('selected', selected);
  const modalizeRef = useRef();
  const dispatch = useDispatch();
  let dataCart = useSelector(state => state.cartReducer);
  // const onOpen = () => {
  //   modalizeRef.current?.open();
  // };
  useEffect(() => {
    {
      if (selected.isOpen === true) {
        modalizeRef.current?.open();
      } else {
        console.log('close');

        modalizeRef.current?.close();
      }
    }
  }, [selected]);
  return (
    <Modalize
      onOverlayPress={() => dispatch(closeModalAction())}
      adjustToContentHeight={'50%'}
      ref={modalizeRef}>
      <Block
      flex  
      paddingVertical={15}
      justifyCenter
      alignCenter
      radius={20}
      width={'100%'}>
        <Text size={25} marginBottom={10} style={{fontWeight: 'bold'}}>
          Sản phẩm đang chọn
        </Text>

        <Block width={300} height={200} justifyCenter>
          <Image
            style={{width: 300, height: 200}}
            resizeMode={'contain'}
            source={{uri: selected?.selectedValue?.Sale_Product?.Image_Name}}
          />
        </Block>

        <Block absolute top={15} right={10}>
          <Button onPress={() => dispatch(closeModalAction())}>
            <AntDesign name="caretdown" size={24} />
          </Button>
        </Block>

        <Text size={21} style={{fontWeight: 'bold'}} marginBottom={5}>
          {selected?.selectedValue?.Sale_Product?.Name}
        </Text>

        <Block alignCenter marginVertical={10}>
          <Block backgroundColor={colors.primaryColor}>
            <Text size={25} style={{fontWeight: 'bold'}}>
              {formatNumber(
                selected?.selectedValue?.Sale_Product?.giaLive
                  ? selected?.selectedValue?.Sale_Product?.giaLive
                  : selected?.selectedValue?.Sale_Product?.PriceOutBound
              )}
            </Text>
          </Block>
          <Block>
            <Text style={{textDecorationLine: 'line-through', marginTop: 5}} size={15} color={'#717275'}>
              {formatNumber(
                selected?.selectedValue?.Sale_Product?.giaLive
                  ? selected?.selectedValue?.Sale_Product?.PriceOutBound
                  : null
              )}
            </Text>
          </Block>
        </Block>

        {selected?.selectedValue?.Sale_Product?.Description_brief
          ?<Block marginRight={'auto'} paddingHorizontal={10} >
            <Text marginRight={'auto'} size={18} marginBottom={-5} style={{fontWeight: 'bold'}}> Thông tin sản phẩm </Text>
            <Text> {selected?.selectedValue?.Sale_Product?.Description_brief} </Text>
          </Block>
          :null
        }
      </Block>

      <Block
      bottom={0}
      marginBottom={15}
      alignCenter 
      justifyCenter>
      
      <Block marginTop={5} row justifyCenter alignCenter space="between" width={'95%'}>
        <Button
          onPress={() => {
            dispatch(
              addItemToCardAction(
                selected?.selectedValue?.Sale_Product,
                dataCart,
              ),
            );
            dispatch(closeModalAction());
            selected.navigationRoot.navigate('CartTab', {selectedStore: null})
          }}
          width={'49%'}
          height={50}
          backgroundColor={'red'}
          justifyCenter
          alignCenter
          radius={100}
          border={1}
          paddingHorizontal={10}
          borderColor={'#000'}>
          <Text center style={{fontWeight: 'bold'}} size={15} color={'#FFF'}>
            ĐẶT HÀNG
          </Text>
        </Button>

        <Button
          onPress={() => {
            dispatch(
              addItemToCardAction(
                selected?.selectedValue?.Sale_Product,
                dataCart,
              ),
            );
            dispatch(closeModalAction());
            Alert.alert('Thông báo', 'Thêm vào giỏ hàng thành công')
          }}
          width={'49%'}
          height={50}
          backgroundColor={'red'}
          justifyCenter
          alignCenter
          radius={100}
          border={1}
          paddingHorizontal={10}
          borderColor={'#000'}>
          <Text center style={{fontWeight: 'bold'}} size={15} color={'#FFF'}>
            THÊM VÀO GIỎ HÀNG
          </Text>
        </Button>
      </Block>
    </Block>

    </Modalize>
  );
}
