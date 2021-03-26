import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Toast from 'react-native-toast-message';
import logo from '../../assets/levy.png';
import imageSign from '../../assets/sign1.png'
import appIcon from '../../assets/ora.png';
import { UserContext } from '../Context/UserContext';
import styles from './styles';



export default function Presentation(){
    
    const { navigate } = useNavigation()

    const { name, setName } = useContext(UserContext)

    async function ValidationName(){
       if(name === '' && name.length <=1){
            return Toast.show({
               type: 'error',
               text1: 'Opa, parece que você deixou de fazer algo 😕',
               text2: 'Seu nome ou apelido precisa de no mínimo 2 caracteres'
           })
       }else{
           try{
              await AsyncStorage.setItem("MyUser", name)
           }catch(err){
            Toast.show({
                type: 'error',
                text1: 'Houve um erro inesperado, tente novamente'
            })
           }
            Keyboard.dismiss()
            navigate('Home')
    }
             
    }
    async function loadAsync(){
        try{
            let name = await AsyncStorage.getItem("MyUser")

            if(name !== null){
                setName(name)
                navigate('Home')
            }
        }catch(err){
            Toast.show({
                type: 'error',
                text1: 'Houve um erro inesperado, tente novamente'
            })
        }
    }

    useEffect(()=>{
        loadAsync()
    },[])
    return(
        
        <KeyboardAvoidingView behavior='height' style={styles.container}>
           
           <View style={styles.containerPresentationPhoto}>
                 <Image source={imageSign}
                resizeMode='contain'
               style={styles.imagePresentationLogo}
               />
            </View>

            <View style={styles.containerPresentationLogo}>
                <Text style={styles.textLogoPage}>Seja bem vindo ao Levy</Text>
                <FontAwesome5 name="balance-scale-left" size={20} color="#fff" style={{left: '25%'}}/>
            </View>

            <View style={styles.containerPresentationText}>

                <Animatable.Text
                    useNativeDriver={true}
                    animation="pulse"
                    iterationCount={Infinity}
                    style={styles.textPresentation}>
                    Faça suas anotações e as compartilhe de maneira simples e fácil.
                </Animatable.Text>

                <Animatable.Text
                    useNativeDriver={true}
                    animation="pulse"
                    iterationCount={Infinity} 
                    style={styles.textPresentationn}>
                    Nos informe um nome ou apelido que você queira ser chamado.
                </Animatable.Text>

            </View>
            <View style={styles.containerRigthTextInput}>
                    <AntDesign name="user" size={15} color="#fff" style={{left: '15%'}}/>
                    <TextInput
                    value={name}
                    onChangeText={(text) =>setName(text)}
                    placeholder="Nome ou Apelido"
                    placeholderTextColor="#fff"
                    style={styles.inputRigth}
                    />
                    <View/>
            </View>
            <TouchableOpacity style={styles.touchableHandleHome} onPress={ValidationName}>
                    <FontAwesome5 name="hand-point-right" size={24} color="#fff" style={{left: '15%'}}/>
                    <Animatable.Text
                    style={styles.textTouchable}
                    useNativeDriver={true}
                    animation="pulse"
                    iterationCount={Infinity}
                    >Comece a usar</Animatable.Text>
                    <View/>
            </TouchableOpacity>

            <View style={styles.containerPresentationFooter}>
                <Text style={styles.textPresentationFooter}>Todos os direitos reservados</Text>
            </View>
        </KeyboardAvoidingView>
    
    )
}