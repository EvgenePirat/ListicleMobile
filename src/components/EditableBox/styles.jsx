import { StyleSheet } from "react-native";
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 16,
        paddingVertical: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        backgroundColor: colors.white,
        marginVertical: 12,
        borderRadius: 5
    },
    label:{
        color: colors.grey,
        fontSize: 12,
        marginBottom: 6
    },
    input:{
        color: colors.blue,
        fontSize: 14,
        fontWeight: '500'
    }
})