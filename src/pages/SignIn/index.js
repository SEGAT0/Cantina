
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput} from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import {styles} from './styles'

export default function SignIn(){


    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    const navigation = useNavigation()
    const arrow = '<'
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonVoltar}
                onPress={() => navigation.navigate('Welcome')}>
                    <Text style={styles.buttonVoltarText}>{arrow}</Text>
            </TouchableOpacity>

            <Animatable.View animation={"fadeInLeft"} delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-Vindo(a)</Text>
            </Animatable.View>

            <Animatable.View animation={"fadeInUp"} style={styles.containerForm}>

                <Text style={styles.title}>Login</Text>

                <TextInput placeholder="Digite o Login" 
                           style={styles.input} 
                           value={email} 
                           onChangeText={(val) => {setEmail(val)}}/>

                <Text style={styles.title}>Senha</Text>

                <TextInput placeholder="Digite sua Senha" 
                           style={styles.input}
                           value={password} 
                           onChangeText={(val) => {setPassword(val)}}/>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>
            
        </View>
    );
   
}



