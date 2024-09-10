import React, { useState } from "react";
import { Text, Image, View, ImageBackground, StyleSheet, TextInput, Alert, Button  } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function LoginScreen() {

    const [userEmail, setEmail] = useState(''); 
    const [userPassword, setPassword] = useState(''); 

    const navigation = useNavigation(); 

    const handleButtonPress = async (userEmail, userPassword) => {
        
        if (!userEmail && !userPassword) { 
            simpleAlertHandler('Debe diligenciar los campos presentados.', 0)
            return false; 
        } else if (!userEmail) {
            simpleAlertHandler('Debe diligenciar el campo "USERNAME".', 0)
            setEmail('')
            setPassword('')
            return false; 
        } else  if (!userPassword){
            simpleAlertHandler('Debe diligenciar el campo "PASSWORD".', 0)
            setEmail('')
            setPassword('')
            return false;            
        } else {
            const Data = {
                user: userEmail, 
                pas: userPassword
            }

            const dataUser = await AsyncStorage.getItem('UserData'); 
            const parseData = JSON.parse(dataUser)

            if (parseData.email == userEmail && parseData.pass == userPassword){
                simpleAlertHandler('Datos existentes', 1) 
            }
        }

        // Implementar alguna acción con el valor que ingrese el usuario 
    }; 



    const simpleAlertHandler = (message, value) => {
        // Función para una alerta simple 
        alert(message); 

        if (value == 0) {
            return false; 
        } else {
            navigation.navigate('Stack')
        }
    }; 

    const twoOptionAlertHandler = () => {
        // Segunda opción de alerta 

        Alert.alert(
            // titulo 
            'Hello', 
            // Body
            'I am two option alert. Do yo want to cancel me ?', 
            [
                {
                    text: 'Yes', 
                    onPress: () => console.log('Yes Pressed')
                }, 
                {
                    text: 'No', 
                    onPress: () => console.log('No Pressed'), style: 'cancel'
                },
            ], 
            { cancelable: false },
        ); 
    }; 

    return(
        <ImageBackground style={styles.BackImage} source={require('../imagenes/FondoMovil.png')}>
            <View>
                <View style={styles.ContainerAvatar}>
                    <Image style={styles.imageAvatar} source={require('../imagenes/avatar.png')}/>
                </View>
                <View style={styles.tarjeta}>
                    <View style={styles.cajaTexto}>
                        <TextInput 
                          placeholder="correo@gamil.com"
                          style={{paddingHorizontal: 15}}
                          onChangeText={(text) => setEmail(text)}
                          value={userEmail}  
                        />
                    </View>
                    <View style={styles.cajaTexto}>
                        <TextInput
                          placeholder="Password"
                          style={{paddingHorizontal: 15}}
                          onChangeText={(text) => setPassword(text)}
                          value={userPassword} 
                          secureTextEntry={true}                       
                        />
                    </View>
                    <View style={styles.padreButton}>
                        <TouchableOpacity
                            disabled={false}
                            style={styles.cajaBoton}
                            onPress={() => { handleButtonPress(userEmail, userPassword) }}
                        >
                            <Text style={styles.textoBoton}> Sing In </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.padreButton}>
                        <TouchableOpacity
                            disabled={false}
                            style={styles.cajaLink}
                            onPress={() => {navigation.navigate('Registro') }}
                        >
                            <Text style={styles.textoLink}> Sing up </Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    BackImage: {
        width: '100%', 
        height: '100%', 
    }, 

    imageAvatar: {
        width: 150, 
        height: 150, 
        textAling: 'center', 
        alignContent: 'center', 
        marginTop: 80,
    }, 

    ContainerAvatar: {
        alignContent: 'center', 
        alignItems: 'center', 
    }, 

    tarjeta: {
        marginTop: 60, 
        marginLeft: 20, 
        backgroundColor: 'white', 
        borderRadius: 20,
        width: '90%', 
        padding: 20,
        shadowColor: '#000', 
        shadowOffset: {
            width: 0, 
            height: 2
        }, 
        shadowOpacity: 0.25, 
        shadowRadius: 4, 
        elevation: 5, 
    }, 

    cajaTexto: {
        paddingVertical: 15, 
        backgroundColor: '#cccccc40', 
        borderRadius: 30, 
        marginVertical: 10, 
    }, 

    padreButton: {
        alignItems: 'center',
    }, 

    cajaBoton: {
        backgroundColor: 'purple', 
        borderRadius: 30, 
        paddingVertical: 20, 
        width: 150, 
        marginTop: 10
    }, 

    cajaLink: {
        backgroundColor: 'transparent', 
        borderRadius: 30, 
        paddingVertical: 20, 
        width: 150, 
        marginTop: 10, 
    }, 

    textoBoton: {
        textAlign: 'center', 
        color: 'white', 
    }, 

    textoLink: {
        color: 'purple', 
        textAlign: 'center', 
        textDecorationLine: 'underline', 
        fontWeight: 'bold'
    }
})