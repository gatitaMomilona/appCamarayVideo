import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import React, {Component, useState} from "react";
import { TextInput } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function RegistrarScreen() {

    const navigation = useNavigation(); 

    const data =[
        { label: 'Masculino', value: 'Masculino'}, 
        { label: 'Femenino', value: 'Femenino'}, 
        { label: 'Ninguno', value: 'Ninguno'}, 
    ]; 

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && {color: 'blue'}]}>
                    Género 
                </Text>
            )
        }
    }; 

    const saveDataRegister = async () => {
        if(!userName && !userLastName && !userPhone && !userEmail && !userAddress && !value && !userPassword){
            simpleAlertHandler('Debe diligenciar todos los campos.', 0)
        }else if(!userName){
            simpleAlertHandler('Debe diligenciar el campo NOMBRE COMPLETO.', 0)
        }else if(!userLastName){
            simpleAlertHandler('Debe diligenciar el campo APELLIDO COMPLETO.', 0)
        }else if(!userPhone){
            simpleAlertHandler('Debe diligenciar el campo TELEFONO.', 0)
        }else if(!userEmail){
            simpleAlertHandler('Debe diligenciar el campo EMAIL.', 0)
        }else if(!userAddress){
            simpleAlertHandler('Debe diligenciar el campo DIRECCIÓN.', 0)
        }else if(!value){
            simpleAlertHandler('Debe diligenciar el campo GÉNERO', 0)
        }else if(!userPassword){
            simpleAlertHandler('Debe diligenciar el campo CONTRASEÑA.', 0)
        }else{
            simpleAlertHandler('Los datos fueron almacenados.', 1)

            const data = {
                username: userName, 
                lastname: userLastName, 
                phone: userPhone, 
                email: userEmail, 
                address: userAddress, 
                genero: value, 
                pass: userPassword, 
            }

            await AsyncStorage.setItem('UserData', JSON.stringify(data))
        }
    };

    const simpleAlertHandler = (message, value) => {

        alert(message); 
        if (value == 0) {
            return false; 
        } else {
            navigation.navigate('Stack')
        }
    }; 

    const [userName, setName] = useState('')
    const [userLastName, setLastName] = useState('')
    const [userPhone, setPhone] = useState('')
    const [userEmail, setEmail] = useState('')
    const [userAddress, setAddress] = useState('')
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false); 
    const [userPassword, setPassword] = useState('')

    return(
        <View style={styles.container}>
            <View style={styles.cajaTexto}>
                <TextInput 
                    placeholder='Nombre Completo'
                    style={{paddingHorizontal: 15}}
                    onChangeText={(text) => setName(text)}
                    value={userName}
                />
            </View>
            <View style={styles.cajaTexto}>
                <TextInput 
                    placeholder='Apellido Completo'
                    style={{paddingHorizontal: 15}}
                    onChangeText={(text) => setLastName(text)}
                    value={userLastName}
                />
            </View>
            <View style={styles.cajaTexto}>
                <TextInput 
                    placeholder='Teléfono'
                    style={{paddingHorizontal: 15}}
                    onChangeText={(text) => setPhone(text)}
                    value={userPhone}
                />
            </View>
            <View style={styles.cajaTexto}>
                <TextInput 
                    placeholder='Email'
                    style={{paddingHorizontal: 15}}
                    onChangeText={(text) => setEmail(text)}
                    value={userEmail}
                />
            </View>
            <View style={styles.cajaTexto}>
                <TextInput 
                    placeholder='Dirección'
                    style={{paddingHorizontal: 15}}
                    onChangeText={(text) => setAddress(text)}
                    value={userAddress}
                />
            </View>
            <View style={styles.cajaTexto}>
                {renderLabel()}
                <Dropdown
                    search
                    maxHeight={300}
                    labelField='label'
                    valueField='value'
                    placeholder={!isFocus ? 'select item':'...'}
                    searchPlaceholder="Search..."
                    data={data}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false); 
                    }}
                    renderLeftIcon={() => (
                        <AntDesign
                            style={styles.icon}
                            color={isFocus ? 'blue' : 'black'}
                            name="Safety"
                            size={20}
                        />
                    )}
                />
            </View>
            <View style={styles.cajaTexto}>
                <TextInput 
                    placeholder='Password'
                    style={{paddingHorizontal: 15}}
                    onChangeText={(text) => setPassword(text)}
                    value={userPassword}
                    secureTextEntry = {true}
                />
            </View>
            <View style={styles.cajaBoton}>
                <TouchableOpacity style={styles.boton} onPress={() => saveDataRegister()}>
                    <Text style={styles.textoBoton}>REGISTRAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20, 
        shadowColor: 'black', 
        height: '100%', 
        borderColor: 'silver', 
        backgroundColor: 'white', 
        borderRadius: 12, 
        padding: 20
    }, 

    cajaTexto: {
        backgroundColor: '#E0E0E0', 
        padding: 20, 
        borderRadius: 12, 
        margin: 12
    }, 

    cajaBoton: {
        margin: 12,
    }, 

    boton: {
        backgroundColor: 'purple',  
        paddingVertical: 10,        
        paddingHorizontal: 20,      
    },

    textoBoton: {
        textAlign: 'center', 
        color: 'white',             
    }
})