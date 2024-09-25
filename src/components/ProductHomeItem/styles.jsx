import { Dimensions, StyleSheet } from "react-native";
import {colors} from '../../utils/color';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container:{
        marginHorizontal: 10,
    },
    title: {
        color: colors.grey,
        paddingVertical: 4,
    },
    image:{
        width: (width / 2)-30,
        height: 220,
        borderRadius: 8
    },
    price:{
        color: colors.black,
        paddingBottom: 10,
    }
    
})