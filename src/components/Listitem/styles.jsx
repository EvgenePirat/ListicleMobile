import { StyleSheet } from "react-native";
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
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
    title:{
        color: colors.blue,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6
    },
    subtitle:{
        color: colors.grey,
        marginTop: 6,
        fontSize: 12
    },
    arrow:{
        width: 32,
        height: 32
    }
})