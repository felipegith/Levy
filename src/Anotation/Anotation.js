import React, { useEffect, useState, useContext } from 'react';
import { ActivityIndicator, Alert, Image, Keyboard, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../Context/UserContext'
import * as Network from 'expo-network';
import * as Animatable from 'react-native-animatable';
import Toast from 'react-native-toast-message'

import logoIcon from '../../assets/levyy.png';
import api from '../services/api';
import styles from './styles';


export default function Anotation(){
    const [loadAnotation, setLoadAnotation] = useState(false)
    
   
    
    const [macaddress, setMacaddress] = useState()
   
    const navigation = useNavigation()
    const {valor, setValor, nome, setNome, descricao, setDescricao, dataHora, setDataHora} = useContext(UserContext)

    async function Validation(){
        if(!nome && nome.length <= 2)
            return Toast.show({
                type: 'error',
                text1: 'Opa, parece que você deixou de fazer algo 😕',
                text2: 'Preencha o campo nome corretamente'
            })
              
        if(!valor)
        return Toast.show({
            type: 'error',
            text1: 'Opa, parece que você deixou de fazer algo 😕',
            text2: 'Preencha o campo preço corretamente'
        })

        if(!descricao)
         return Toast.show({
            type: 'error',
            text1: 'Opa, parece que você deixou de fazer algo 😕',
            text2: 'Preencha o campo compra corretamente'
        })

        if(!dataHora)
        return Toast.show({
            type: 'error',
            text1: 'Opa, parece que você deixou de fazer algo 😕',
            text2: 'Preencha o campo data corretamente'
        })

        const validationDate = /^[0-9]{1,2}\-[0-9]{1,2}\-[0-9]{2,4}$/;
        if(!validationDate.test(dataHora)){
            return Toast.show({
                type: 'error',
                text1: 'Data',
                text2: 'O campo data deve ser no formato: 01-01-2021 ou 1-1-21'
            })
        }

        const validationMoney = /^[0-9]{1,5}\.[0-9]{2,3}$/;
        if(!validationMoney.test(valor)){
            return Toast.show({
                type: 'error',
                text1: 'Preço',
                text2:'O campo preço deve ser no formato: 15.99'
            })
        }
        
        await api.post('/contas',{
            macaddress,
            nome,
            valor,
            descricao,
            dataHora
        }).then(()=>{
            Keyboard.dismiss()
            setLoadAnotation(true)
            navigation.navigate('Home')
            setLoadAnotation(false)

        }).catch(()=>{
            Toast.show({
                type: 'error',
                text1: 'Opa, parece que rolou algum erro 😑',
                text2: 'Tente novamente'
            })
           
        })
    }
        async function getMacAddress(){
            await Network.getMacAddressAsync()
            .then(mac=>{
                setMacaddress(mac)
            })
        }
        
    useEffect(()=>{
        getMacAddress()
    },[macaddress])

    return(
       <KeyboardAvoidingView behavior='position' style={styles.container}>
           <View style={styles.containerLogoLevy}>
                <Image source={logoIcon}
                resizeMode="contain"
                style={styles.logoWidth}
                />
                <Text style={styles.title}>Cadastre todas as informações de maneira correta</Text>
                <View style={{width: '100%', borderBottomWidth: 2, borderBottomColor: '#FFF', marginTop: '3%'}}>
                </View>
           </View>
           <ScrollView style={styles.containerScroll} contentContainerStyle={{alignItems: 'center'}}>
                                
                    <Text style={styles.containerScrollLabel}>Nome</Text>
                <View style={styles.containerScrollInput}>
                    <FontAwesome name="user" size={15} color="#fff" />
                    <TextInput 
                    style={styles.input}
                    maxLength={18}
                    placeholder="Nome do cliente"
                    placeholderTextColor="#fff"
                    value={nome}
                    onChangeText={(text) => setNome(text)}
                    />
                    <View/>
                </View>

                
                    <Text style={styles.containerScrollLabel}>Preço</Text>
                <View style={styles.containerScrollInput}>
                    <FontAwesome5 name="money-bill-wave" size={15} color="#fff" />    
                    <TextInput 
                    style={styles.input}
                    maxLength={30}
                    placeholder="Valor da conta"
                    keyboardType="numeric"
                    placeholderTextColor="#fff"
                    value={valor}
                    onChangeText={(text)=> setValor(text)}
                    />
                    <View />
                </View>
                    <Text style={styles.containerScrollLabel}>Compra</Text>
                
                <View style={styles.containerScrollInput}>
                    <Entypo name="shopping-cart" size={15} color="#fff" />
                    <TextInput 
                    style={styles.input}
                    maxLength={30}
                    placeholder="Nome do produto"
                    placeholderTextColor="#fff"
                    value={descricao}
                    onChangeText={(text) =>setDescricao(text)}
                />
                <View />
                </View>

                <Text style={styles.containerScrollLabel}>Data</Text>
                
                <View style={styles.containerScrollInput}>
                    <FontAwesome5 name="calendar-day" size={15} color="#fff" />
                    <TextInput 
                    style={styles.input}
                    maxLength={30}
                    placeholder="Dia de pagamento"
                    keyboardType="numeric"
                    placeholderTextColor="#fff"
                    value={dataHora}
                    onChangeText={(text) =>setDataHora(text)}
                />
                <View />
                </View>
               
                    {
                      loadAnotation && <ActivityIndicator color="#fff" size={20}/>
                    }                
               <TouchableOpacity style={styles.addBuy} onPress={Validation}>
                    <FontAwesome5 name="cart-plus" size={24} color="#fff" />
                    <Animatable.Text
                    style={styles.textaddBuy}
                    useNativeDriver={true}
                    animation="pulse"
                    iterationCount={Infinity}
                    >Salvar anotações</Animatable.Text>
                </TouchableOpacity>

           </ScrollView>
       </KeyboardAvoidingView>
    )
}