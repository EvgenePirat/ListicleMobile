import React from "react";
import { Text, Image, View, Pressable } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Splash = ( { navigation }) => {

    const onSignup = () => {
        navigation.navigate('Signup')
    }

    const onSigin = () => {
        navigation.navigate('Signin')
    }

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_image.png')}  />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>You’ll Find</Text>
                    <Text style={[styles.title, styles.innerTitle]}>All you need</Text> 
                    <Text style={styles.title}>Here!</Text>
                </View>
                
                <View style={{width: '100%', flexDirection: 'row'}}>
                    <Button onPress={onSignup} title="Sign up" />
                </View>

                <Pressable onPress={onSigin} hitSlop={20}>
                    <Text style={styles.footerText}>Sign In</Text>
                </Pressable>
            </View>
        </SafeAreaProvider>
    )
}

export default Splash;