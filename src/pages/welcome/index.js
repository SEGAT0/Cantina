
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import {styles} from './styles'

export default function Welcome(){

    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={require('../../../assets/LogoLagoinha.png')}
                animation="flipInY"
                style={{width: '100%'}}
                resizeMode="contain"/>
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Cantina Lagoinha</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate('SignIn')}>

                    <Text style={styles.buttonText}>Acessar</Text>

                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}
