import { StyleSheet } from "react-native";
import {colors} from '../../../utils/color';

export const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    agreeRow:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    agreeText:{
        color: colors.blue,
        marginHorizontal: 14
    },
    button:{
        marginVertical: 20
    },
    footerText:{
        color: colors.blue,
        marginBottom: 56,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    }
})