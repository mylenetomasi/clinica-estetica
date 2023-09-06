import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator}  from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';

import Login from "../Pages/Login"
import Register from "../Pages/Cadastro"
import Home from "../Pages/Home"
import Promotion from "../Pages/Promotion"

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