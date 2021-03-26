import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
       flex: 1,
       backgroundColor: "#f89c56",
       
       
    },
    containerHome:{
        backgroundColor: '#fff',
        width: '90%',
        height: 10,
        marginTop: 250
    },
    containerHomeText:{
        marginTop: 30,
        paddingLeft: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%'
        
    },
    textHome:{
        color: '#fff',
        fontFamily: 'Raleway_700Bold'
    },
    containerHomeFeed:{
        marginTop: 10,
        borderWidth: 1,
        width: '90%',
        height: 200,
        borderRadius: 10,
        borderColor: '#fff',
        backgroundColor: '#febd97',
        marginBottom: 20
        
    },
    containerHomeFeedAvatar:{
       paddingLeft: 40,
       paddingTop: 20
    },
    imageAvatar:{
        width: 40
    },
    containerHomeCon:{
        justifyContent: 'center',
        flex:1,
        
    },
    textHomeFeedName:{
        color: '#fff',
        fontFamily: 'Raleway_700Bold'
    },
    textHomeFo:{
        color: '#fff',
        fontFamily: 'Raleway_400Regular'
    },
    containerHomeDate:{
        width: '90%',
        alignItems: 'center',
        height: '40%',
        justifyContent: 'flex-end'
    },
    textHomeDate:{
        color: '#fff',
        fontFamily: 'Raleway_400Regular'
    },
    nameFed:{
        color: '#ffff',
        fontFamily: 'Raleway_700Bold',
        fontSize: 18
    },
    containerText:{
        paddingLeft: 10,
        paddingTop: 10
    },
    textDetail:{
        width: '72%',
        maxWidth: '72%',
        color: '#fff',
        fontFamily: 'Raleway_400Regular'
    },
    homeTouchableShare:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '75%',
        height: '30%',
        
        
    },
    tttt:{
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        right: 0,
        top: '25%'
    },
    imag:{
        width: 100
    },
    tx:{
        backgroundColor: '#febd97',
        borderRadius: 10,
        width: 40,
        height: 40,
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    
    containerTextInput:{
        width: '95%',
        marginTop: '5%',
        flexDirection: 'row',
    },
    containerTextInputTwo:{
        width: '75%',
        
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

        backgroundColor: "#febd97",
        borderRadius: 10,

    },
    touchableSend:{
        width: '23%',
        marginLeft: '2%',

        borderRadius: 10,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#febd97'
    },
    inputT:{
        maxWidth: '55%',
        width: '55%',

        textAlign: 'center',
        fontFamily: 'Raleway_300Light'
        
    },
    containerHomeButtons:{
        width: '95%',
        height: '8%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: '4%',
             
    },
    containerHomeHeader:{
        width: '98%',
        marginTop: '2%',
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHomeHeader:{
        color: "#fff",
        fontFamily: 'Raleway_700Bold'
    },
    touchableLogout:{
        left: '15%'
    }
        
})

export default styles;