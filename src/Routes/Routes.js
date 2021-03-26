import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Presentation from '../Presentation/Presentation'
import Home from '../Home/Home'
import HeaderNavigation from '../Components/Navigation/HeaderNavigation'
import Anotation from '../../src/Anotation/Anotation'

const Stack = createStackNavigator()


export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen 
                    options={{headerShown:false}}
                    name="Presentation"
                    component={Presentation}
                    />

                <Stack.Screen 
                    name="Home" 
                    component={Home}
                    options={{header: ()=><HeaderNavigation title="Suas contas"/>}}
                    />
                <Stack.Screen
                name="Anotation"
                component={Anotation}
                options={{header: ()=><HeaderNavigation title="Anotações"/>}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}