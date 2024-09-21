import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";

const Signin = () => {

    const onSigUp = () => {
        console.log('fgf');
    }

    return (
        <View style={styles.container}>
            <AuthHeader title="Sign In" />

            <Input label='Email' placeholder="eugene@gmail.com" />
            <Input isPassword={true} label='Password' placeholder="******" />

            <Button style={styles.button} title="Sign In"  />

            <Seperator text='Or sign in with' />

            <GoogleLogin />

            <Text onPress={onSigUp} style={styles.footerText}>Don’t have an account? Sign Up</Text>
        </View>
    )
}

export default Signin;