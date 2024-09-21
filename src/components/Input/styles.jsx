import { StyleSheet } from "react-native";
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
    container:{
        marginBottom: 20
    },
    label:{
        marginBottom: 5,
        color: colors.blue,
        fontSize: 17,
        fontWeight: '700'
    },
    inputContainer:{
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 18,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input:{
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1
    },
    eye:{
        width: 24,
        height: 24,
        marginHorizontal: 16
    }
})