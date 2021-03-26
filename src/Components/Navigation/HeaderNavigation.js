import React from 'react'
import { View, Text} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles'

export default function HeaderNavigation({title, cancel =true, showSobre}){

    const navigation = useNavigation()

    function handleBackHome(){
        navigation.navigate('Presentation')
    }
    return(
        <View style={styles.container}>
            <BorderlessButton onPress={navigation.goBack}>
                <Feather name="arrow-left" size={24} color="#fff" />
            </BorderlessButton>
            <Text style={styles.headerText}>{title}</Text>

            {
                cancel ? (
                    <BorderlessButton onPress={handleBackHome}>
                        <Feather name="x" size={24} color="#fff" />

                    </BorderlessButton>
                ) : (
                        <View />
                    )
            }
        </View>
    )
}