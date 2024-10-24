import React from 'react';
import { Linking, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import Listitem from '../../../components/Listitem';
import EditableBox from '../../../components/EditableBox';
 
const Settings = () => {

    const onItemPress = () => {
        Linking.openURL('https://google.com');
    }

    return (
        <SafeAreaView>
            <Header title="Settings" />
            <ScrollView style={styles.container}>
                <Text style={styles.sectionTitle}>Personal information</Text>
                <EditableBox lable="Name" value="User" editable={false} />
                <EditableBox lable="Email" value="test@gmail.com" editable={true} />


                <Text style={styles.sectionTitle}>Help center</Text>
                <Listitem onPress={onItemPress} style={styles.item} title="FAQ" />
                <Listitem onPress={onItemPress} style={styles.item} title="Contact Us" />
                <Listitem onPress={onItemPress} style={styles.item} title="Privacy & Terms" />
            </ScrollView>
        </SafeAreaView>
    )
}
 
export default React.memo(Settings);