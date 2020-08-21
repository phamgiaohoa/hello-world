import React, {useEffect, forwardRef , useImperativeHandle,useState,  } from 'react'
import { View, Text,TouchableOpacity ,ScrollView, TextInput} from 'react-native'
import Modal from 'react-native-modal'; 
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Block from '../Block';
import IconAnt from 'react-native-vector-icons/AntDesign';

const PickerCustom = forwardRef((props, ref) => {
    const [Open, setOpen] = useState(false);
    const [listOri, setListOri] = useState([]);
    const [listCurrent, setListCurrent] = useState([]);
    const [value, setValue] = useState();
    const [data, setData] = useState({});
    const [label,setLabel] = useState();


    const openModal = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }

    useImperativeHandle(ref, () => ({

        open: () => {openModal()},
        close : () => {closeModal()}
    
    }));

    useEffect(() => {
        getList()
       
    }, [Open])

    const getList = () => {
        console.log(props.listItem );
        
        setListOri(props.listItem ? props.listItem : []);
        setListCurrent(props.listItem ? props.listItem : [])
    
    }

    useEffect(() => {
        // props.setValue({value,label,data})
       
    }, [value])

    useEffect(() => {
        {
                let flag = false;
                for (let index = 0; index < listOri.length; index++) {
                    const value = listOri[index];
                    if(value.value == props.value) {
                        flag = true;
                    }
                }

                if(flag == true) {
                    setLabel(props.value);
                    setValue(props.value)
                }else {
                    setLabel('');
                    setValue('')
                }
            
        }
       
    }, [props.value])

   
    const onSearch = (e) => {
        const arrayFilter = listOri.filter((value) => {
            return value.label.toLowerCase().indexOf(e.toLowerCase()) != -1;
        })

        setListCurrent(arrayFilter)
        
    }


    

    return (
        <Block width={'100%'} marginVertical={5} justifyCenter alignCenter>
            <Block width={'90%'} marginBottom={5}>
                    <Text size={10} style={props.styleLabel ? props.styleLabel : {}} marginLeft={'5%'} marginVertical={5}>{
                        props.label ? props.label : ''}
                    </Text>
            </Block>
            <TouchableOpacity style={{borderWidth : 1/2, width : '90%', paddingRight : 10, paddingLeft : 20 , height:45, borderRadius : 5, borderColor : props.error ? 'red' :'#000',flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}} onPress={() =>{openModal()}}>
                <Text style={{color : value ? '#000' : props.placeholderTextColor}}>{label ? label : props.placeholder}</Text>
                <Icon name='chevron-down' size={30} color={'#000'}></Icon>
            </TouchableOpacity> 
           <Block width={'90%'} marginVertical={5}>
                {props.error ? <Text style={{color : 'red', fontSize : 13}}>{props.msgError}</Text> : null}
           </Block>
            
            <Modal 
                isVisible={Open}
                onBackdropPress={closeModal}
            >   
                <View style={{width : '100%',height : 450,backgroundColor : '#FFF'}}>
                    <View style={{width : '100%', justifyContent : 'center', alignItems : 'center', flexDirection : 'row'}}>
                        <Block row  alignCenter marginTop={10} radius={10} paddingHorizontal={10} backgroundColor={'#FFF'}>
                        <IconAnt name='search1' size={20} />
                        <TextInput onChangeText={onSearch} style={{paddingHorizontal : 10}}  placeholder={'Nhập từ khóa bạn muốn tìm kiếm...'} />
                        </Block>
                    </View>
                    <ScrollView style={{width : '100%', padding : 20 }}>

                        {listCurrent.map((value,index) => (
                            <TouchableOpacity style={{marginBottom : 10}} onPress={() =>{setValue(value.value); setData(value) ;setLabel(value.label); closeModal() }}>
                                <Text style={{fontSize : 17, marginVertical : 10}}>{value?.label}</Text>
                            </TouchableOpacity>
                        ))}
                        
                    
                    

                    </ScrollView>
                </View>
            </Modal>
        </Block>
    )
})

export default PickerCustom
