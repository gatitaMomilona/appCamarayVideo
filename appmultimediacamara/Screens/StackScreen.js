import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";

export default function StackScreen() {
  
  const navigation = useNavigation(); 

  return (
    <View style={styles.body}>
      <View style={styles.body}>
        <View style={styles.contenedorPrincipal}> 
            <View style={styles.subContenedor}>
                <TouchableOpacity style={styles.cajaBoton} onPress={() => {navigation.navigate('Mi Perfil') }}>
                  <Ionicons name="person-circle-outline" size={60} color="white" />
                  <Text style={styles.textoBoton}>
                  Mi Perfil</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.subContenedor}>
                <TouchableOpacity style={styles.cajaBoton} onPress={() => {navigation.navigate('Videos') }}>
                  <Entypo name="video" size={60} color="white" />
                  <Text style={styles.textoBoton}>
                  Videos</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.espaciado}></View>
        <View style={styles.contenedorPrincipal}> 
            <View style={styles.subContenedor}>
                <TouchableOpacity style={styles.cajaBoton} onPress={() => {navigation.navigate('Fotos') }}>
                  <EvilIcons name="image" size={60} color="white" />
                  <Text style={styles.textoBoton}>
                  Fotos</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.subContenedor}>
                <TouchableOpacity style={styles.cajaBoton} onPress={() => {navigation.navigate('Audios') }}>
                  <MaterialIcons name="online-prediction" size={60} color="white" />
                  <Text style={styles.textoBoton}>
                  Audios</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.espaciado}></View>
        <View style={styles.contenedorPrincipal}> 
            <View style={styles.subContenedor}>
                <TouchableOpacity style={styles.cajaBoton} onPress={() => {navigation.navigate('Ocio') }}>
                  <Fontisto name="world" size={60} color="white" />
                  <Text style={styles.textoBoton}>
                  Ocio</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.subContenedor}>
                <TouchableOpacity style={styles.cajaBoton} onPress={() => {navigation.navigate('Login') }}>
                  <AntDesign name="logout" size={60} color="white" />
                  <Text style={styles.textoBoton}>
                  Salir</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d7dbdd',
    padding: 10,
  },
  contenedorPrincipal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20, 
  },
  subContenedor: {
    backgroundColor: 'purple',
    borderRadius: 15,
    padding: 30, 
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%', 
    marginHorizontal: 10, 
  },
  cajaBoton: {
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white',
    fontSize: 18, 
    marginTop: 10,
    textAlign: 'center',
  },
})
