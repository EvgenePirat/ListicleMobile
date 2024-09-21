import React from "react"
import { TouchableOpacity, Image, View } from "react-native";
import { styles } from './styles'

const Checkbox = ({ checked, onCheck }) => {

    return (
        <TouchableOpacity onPress={() => onCheck(!checked)} style={styles.container}>
            {checked ? (
                <View style={styles.innerContainer}>
                    <Image style={styles.checkIcon} source={require('../../assets/icons_check.png')} />
                </View>
            ) : null}
        </TouchableOpacity>
    )
}

export default React.memo(Checkbox);