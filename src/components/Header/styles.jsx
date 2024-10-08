import { StyleSheet } from "react-native";
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24
    },
    title: {
        color: colors.black,
        fontSize: 16,
        fontWeight: 'bold'
    },
    icon:{
        width: 24,
        height: 24
    },
    space:{
        width: 24
    },
    mainContainer:{
        paddingHorizontal: 24
    }
    
})