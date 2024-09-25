import React, { useState } from "react"
import { Pressable, View, Text, Image } from "react-native";
import { styles } from './styles'
import Input from "../Input";

const Header = ({title, onBackPress, onLogout, showLocout, showSearch, showBack }) => {

    const [showSearchInput, setShowInputSearch] = useState(false);

    const onSearchCkick = () => {
        setShowInputSearch(s => !s)
    }

    return (
        <View>
            <View style={styles.container}>
            {showBack ? (
                <Pressable hitSlop={20} onPress={onBackPress}>
                    <Image style={styles.icon} source={require('../../assets/back.png')} />
                </Pressable>
            ) : showSearch ? (
                <Pressable hitSlop={20} onPress={onSearchCkick}>
                    <Image style={styles.icon} source={require('../../assets/search.png')} />
                </Pressable>
            ) : <View style={styles.space} /> }

            <Text style={styles.title}>{title}</Text>

            {showLocout ? (
                <Pressable hitSlop={20} onPress={onLogout}>
                    <Image style={styles.icon} source={require('../../assets/logout.png')} />
                </Pressable>
            ) : <View style={styles.space} /> }

            </View>

            {showSearchInput ? (
                <Input placeholder='Type your keyword...' />
            ) : null}
        </View>
    )
}

export default React.memo(Header);