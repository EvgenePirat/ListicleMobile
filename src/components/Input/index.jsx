import React, { useState } from "react";
import { TextInput, View, Text, Pressable, Image } from "react-native";
import {styles} from '../Input/styles'

const Input = ({label, placeholder, isPassword, value, onChangeText }) => {
    const [isPasswordVisible, SetIsPasswordVisible] = useState(false);

    const onEyePress = () => {
        SetIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input} />

                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                        <Image style={styles.eye} source={isPasswordVisible ? require('../../assets/eye.png') : require('../../assets/eye_closed.png')} />
                    </Pressable>
                ) : null}
            </View>
        </View>
    )
}

export default React.memo(Input);