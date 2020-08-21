import React, {useState, useEffect} from 'react'
import { View, Image, Animated } from 'react-native'
import Block from '../components/Block'

const FlashScreen = () => {

    const [yValue,setYValue] = useState(new Animated.Value(-70));
    const [fadeValue,setFadeValue] = useState(new Animated.Value(0));

    useEffect(() => {
        startAnimation();
    },[])

    const startAnimation = () => {
        Animated.timing(fadeValue, {
            toValue: 1,
            duration: 1500
        }).start();

        Animated.timing(yValue, {
            toValue: 0,
            duration: 1500
        }).start();
    }

    return (
        <Block flex justifyCenter alignCenter backgroundColor={'#FFF'}>
            <Animated.View style={{top: yValue, opacity : fadeValue}}>
                <Image style={{width:500, height:600}} source={require('../assets/3.jpg')} />
            </Animated.View>
        </Block>
    )
}

export default FlashScreen;
