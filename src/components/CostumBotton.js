import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { THEME } from '../theme'

export const CostumButton = ({style, text, onPress}) => {
    return (
        <TouchableOpacity style={{...styles.wrapper, ...style}} activeOpacity={0.6} onPress={onPress} >
            <View style={styles.center }>
                <Text style={styles.textarea} >{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 12,
        minHeight: 80,
        backgroundColor: THEME.SUCCESS_BOTTON,
        borderRadius: 8,
    },
    center: {
        flex: 1,
        justifyContent: "center",
    },
    textarea: {
        fontFamily: 'architect',
        fontSize: 18,
        color: "#000",
        textAlign: "center",
    }
})