import React from 'react'
import { View, Text } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';
import {useSelector} from 'react-redux';
import {colors} from './../shared/styleShare'

export default function SpinnerOver() {
    const isLoading = useSelector(state => state.spinnerReducer);

    return (
        <Spinner visible={isLoading} color={colors.primary} />
    )
}
