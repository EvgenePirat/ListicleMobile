import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header'
import Listitem from '../../../components/Listitem';
import Button from '../../../components/Button'
 
const Profile = ( {navigation }) => {

    const num = 10;

    const onLogout = () => {
        console.log('logout from system!');
    }

    const onSettingPress = () => {
        navigation.navigate('Settings');
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title="Profile" showLocout={onLogout} />
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.name}>User Name</Text>
                    <Text style={styles.email}>User Email</Text>

                    <Listitem title="My Listings" subtitle={`You have ${num} listings`} />

                    <Listitem onPress={onSettingPress} title="Settings" subtitle="Account, FAQ, Contact" />
                </View>

                <Button style={{flex: 0}} title="Add new Listing" />
            </View>
        </SafeAreaView>
    )
}
 
export default React.memo(Profile);