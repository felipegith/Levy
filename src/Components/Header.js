import React,{ useContext } from 'react'
import {View, Text, Image} from 'react-native'
import styles from './styles'

import imageHeader from '../../assets/orr.png'

export default function Header(){
    
    return(
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image source={imageHeader}
                resizeMode="contain"
                style={styles.widthImageHeader}
                />
            </View>
            <View style={styles.containerTextHeader}>
                <Text style={styles.textHeader}>Abaixo é possível cadastrar, verificar, deletar, atualizar e compartilhar suas anotações.</Text>
            </View>
        </View>
    )
}