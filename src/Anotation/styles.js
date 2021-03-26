import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
       flex: 1,
       backgroundColor: '#f89c56',
       
    },
    containerScroll:{
        height: '100%',
        
        width: '100%' 
    },
    containerScrollLabel:{
        color: '#fff',
        fontFamily: 'Raleway_700Bold',
        textAlign: 'center',
        marginTop: '5%'
    },
    containerScrollInput:{
        width: '80%',
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    input:{
       width: '80%',
       fontFamily: 'Raleway_400Regular',
       textAlign: 'center',
       color: '#fff',
       
    },
    addBuy:{
        flex: 1,
        width: '70%',
        height: 90,
        marginTop: '12%',

        borderRadius: 10,
        backgroundColor: '#febd97',
        
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        
        
    },
    touchableTrash:{
        width: '90%',
        flexDirection: 'row',
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '7%'
    },
    touchableTrashContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    containerLogoLevy:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    logoWidth:{
        width: '25%',
        height: 120
        
    },
    title:{
        color: '#fff',
        fontFamily: 'Raleway_500Medium'
    },
    textaddBuy:{
        color: '#ffff',
        fontFamily: 'Raleway_700Bold'
    }
})

export default styles;