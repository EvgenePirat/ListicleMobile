import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Signup = ( {navigation} ) => {

    const [checked, setChecked] = useState(false);

    const onSigIn = () => {
        navigation.navigate('Signin')
    }

    const onBack = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Sign up" />

                <Input label='Name' placeholder="john Doe" />
                <Input label='Email' placeholder="eugene@gmail.com" />
                <Input isPassword={true} label='Password' placeholder="******" />

                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={styles.agreeText}>I agree with Terms & Privacy</Text>
                </View>

                <Button style={styles.button} title="Sign Up"  />

                <Seperator text='Or sign up with' />

                <GoogleLogin />

                <Text onPress={onSigIn} style={styles.footerText}>Already have an account? Sign In</Text>
            </View>
        </SafeAreaProvider>
    )
}

export default Signup;