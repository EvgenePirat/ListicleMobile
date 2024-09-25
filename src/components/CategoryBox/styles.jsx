import { StyleSheet } from "react-native";
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
    container:{
        marginHorizontal: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: colors.grey,
    },
    image:{
        width: 40,
        height: 40
    },
    imageContainer:{
        backgroundColor: colors.lightGrey,
        padding: 16,
        borderRadius: 8,
        marginBottom: 8
    }
    
})