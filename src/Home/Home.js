import { AntDesign, Entypo, EvilIcons, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import * as Network from 'expo-network';
import React, { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Share, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import avatarTe from '../../assets/two.png';
import Header from '../Components/Header';
import { UserContext } from '../Context/UserContext';
import api from '../services/api';
import styles from './styles';

export default function Home(){
    const [sendApi, setSendApi] = useState([])
    const [loadd, setLoadd] = useState(false)
    const [loadRemove, setLoadRemove] = useState(false)
    const [macaddress, setMacaddress] = useState()
    const [tid, setTid] = useState('')
    const [countDelete, setCountDelete] = useState(0)

    const navigation = useNavigation()
    const {name, setName, valor, descricao, dataHora, nome } = useContext(UserContext)
    
    async function onShare(){
        try {
            const result = await Share.share({
              message:
                ` Olá, aqui quem fala é ${name}. Então, ${nome}, esse é um lembrete sobre sua compra de ${descricao} 🛍️ no valor de R$${valor} 💸 combinamos o prazo até dia ${dataHora} 📆. Tá bom? Qualquer dúvida, é só me chamar 😉`,
            });
            if (result.action === Share.sharedAction) {
              if (result.activityType) {
                // shared with activity type of result.activityType
              } else {
                // shared
              }
            } else if (result.action === Share.dismissedAction) {
              // dismissed
            }
          } catch (error) {
            alert(error.message);
          }
    }
    
    async function loadApi(){
        setLoadd(true)
        await api.get(`/contas/todascontas/${macaddress}`)
        .then(response=>{
            setSendApi(response.data)
            setLoadd(false)
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
        .then(()=>{
            loadApi()
        })
        
    },[macaddress, tid, countDelete])

    function handleToAnotation(){
        navigation.navigate('Anotation')
    }

    function deleteHome(){
        setCountDelete((prevState)=> prevState +1 )
        
    }

    async function showId(id){
        setTid(id) 
        setLoadRemove(true)
        await api.delete(`/contas/${tid}`)      
        .then(async()=>{
            setLoadRemove(false)
            Toast.show({
                type: 'success',
                text1: 'Removendo uma anotação 🗑️',
                text2: 'Anotação removida com sucesso. Por favor, atualize'
            })
        }).catch((err)=>{
            console.log(err)
            setLoadRemove(false)
            Toast.show({
                type: 'error',
                text1: 'Opa, rolou um erro inesperado 😤',
                text2: 'Por favor, tente realizar a ação novamente'
            })
        })
        
    }

    async function removeAsync(){
        try{
            await AsyncStorage.removeItem("MyUser")
        }catch(err){
            Toast.show({
                type: 'error',
                text1: 'Houve um erro inesperado, tente novamente'
            })
        }finally{
            setName("")
            navigation.navigate('Presentation')
        }
    }

    return(
        <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center'}} showsVerticalScrollIndicator={false}>
            <View style={styles.containerHomeHeader}>
                <View/>
                <Text style={styles.textHomeHeader}>Olá, {name}.</Text>
                <TouchableOpacity style={styles.touchableLogout} onPress={removeAsync}>
                    <Ionicons name="log-out-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            <Header />
          
                    {
                      loadd && <ActivityIndicator color="#febd97" size={50}/>
                    }
                <View style={styles.containerHomeButtons}>
                    <TouchableOpacity style={styles.tx} onPress={handleToAnotation}>
                        <Entypo name="plus" size={24} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tx} onPress={deleteHome}>
                        <AntDesign name="reload1" size={24} color="#fff" />
                        
                    </TouchableOpacity>
                </View>
               
                {
                    sendApi.map(t=>(
                      
            <View style={styles.containerHomeFeed} key={t._id} >
                    
                <View style={styles.containerHomeFeedAvatar}>
                    
                    <Text style={styles.nameFed}>{t.nome}</Text>
                    
                </View>
                <View style={styles.containerText} >
                    <Text style={styles.textDetail}>Veja sua cobrança detalhadamente</Text>
                    <Text style={styles.textDetail}>Você comprou: {t.descricao}</Text>
                    <Text style={styles.textDetail}>Preço: R$ {t.valor}</Text>
                    <Text style={styles.textDetail}>Comprou em: {format(new Date(t.criacao), 'dd-MM-yyyy')}</Text>
                    <Text style={styles.textDetail}>Pagar em: {t.dataHora}</Text>
                </View>
                <View style={styles.homeTouchableShare}>

                    <TouchableOpacity onPress={()=>showId(t._id)} >
                        <Entypo name="trash" size={15} color="#fff" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onShare}>
                        <EvilIcons name="share-google" size={30} color="#fff" />
                    </TouchableOpacity>

                    {
                      loadRemove && <ActivityIndicator color="#f89c56" size={20}/>
                    }
                </View>
                
                <View style={styles.tttt}>
                    <Image source={avatarTe}
                    resizeMode="contain"
                    style={styles.imag}
                    />
                </View>
                
            </View>
                ))
              }

        </ScrollView>
    )
}