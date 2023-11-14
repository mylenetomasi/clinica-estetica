import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator}  from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons';

import Login from "../Pages/Login"
import Register from "../Pages/Cadastro"
import Home from "../Pages/Home"
import Promotion from "../Pages/Promotion"
import Pacotes from "../Pages/Pacotes"
import Procedimentos from "../Pages/Procedimentos"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="home" color={color} size={size} />
                ),
                headerShown:false
              }}
            />
            <Tab.Screen 
            name="Promotion"
            component={Promotion}
            options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="local-grocery-store" color={color} size={size} />
                ),
                headerShown:false
              }}
            />
             <Tab.Screen 
            name="Pacotes"
            component={Pacotes}
            options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="store" color={color} size={size} />
                ),
                headerShown:false
              }}
            />
             <Tab.Screen 
            name="Procedimentos"
            component={Procedimentos}
            options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="store" color={color} size={size} />
                ),
                headerShown:false
              }}
            />
        </Tab.Navigator>
    )
}


export default function Routes(){
    return(
        <Stack.Navigator>

        <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown:false}}
           />

        <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{headerShown:false}}
        />
      
        </Stack.Navigator>
    )
}