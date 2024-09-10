import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import RegistrarScreen from './Screens/RegistrarScreen';
import StackScreen from './Screens/StackScreen';
import MiPerfilScreen from './Screens/MiPerfilScreen';
import VideosScreen from './Screens/VideosScreen';
import AudiosScreen from './Screens/AudiosScreen';
import OcioScreen from './Screens/OcioScreen';
import playCameraScreen from './Screens/playCameraScreen';
import TakeCamaraScreen from './Screens/TakeCamaraScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegistrarScreen}
        options={{
          headerTintColor: "white", 
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'purple'},
        }} />
        <Stack.Screen name="Stack" component={StackScreen}
        options={{
          headerTintColor: "white", 
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'purple'},
        }}/>
        <Stack.Screen name="Mi Perfil" component={MiPerfilScreen}
        options={{
          headerTintColor: "white", 
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'purple'},
        }}/>
        <Stack.Screen name="Videos" component={VideosScreen}
        options={{
          headerTintColor: "white", 
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'purple'},
        }}/>
        <Stack.Screen name="Fotos" component={playCameraScreen}
        options={{
          headerTintColor: "white", 
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'purple'},
        }}/>
        <Stack.Screen name="Audios" component={AudiosScreen}
        options={{
          headerTintColor: "white", 
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'purple'},
        }}/>
        <Stack.Screen name="Ocio" component={OcioScreen}
        options={{
          headerTintColor: "white", 
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'purple'},
        }}/>

        <Stack.Screen name="Camara" component={TakeCamaraScreen}
        options={{
          headerTintColor: "white", 
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'purple'},
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

