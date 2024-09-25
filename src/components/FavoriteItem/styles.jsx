import { StyleSheet } from "react-native";
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey
    },
    title: {
        color: colors.grey,
        paddingVertical: 4,
    },
    image:{
        width: 130,
        height: 130,
        borderRadius: 10,
        marginRight: 20
    },
    price:{
        color: colors.black,
        paddingBottom: 10,
    },
    icon:{
        width: 24,
        height: 24,
        marginLeft: 8,

    },
    content:{
        flex: 1,
        
    }
    
})