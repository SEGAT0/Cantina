import {createNativeStackNavigator} from '@react-navigation/native-stack'
import  Welcome  from '../pages/welcome'
import  SignIn  from '../pages/SignIn'
import Home from '../pages/home'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Welcome'
                component={Welcome}
                options={{headerShown: false}} //Header da tela 
            />

            <Stack.Screen 
                name='SignIn'
                component={SignIn}
                options={{headerShown: false}} //Header da tela
            />

            <Stack.Screen 
                name='Home'
                component={Home}
                options={{headerShown: false}} //Header da tela
            />
                
        </Stack.Navigator>
    )
}