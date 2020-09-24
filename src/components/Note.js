import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { THEME } from '../theme'

export const Note = ({note, onOpen}) => {
    
    const date = new Date(note.date).toLocaleDateString()

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(note)} >
            <View style={styles.item}>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.text}>{note.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        overflow: "hidden",
        marginBottom: 15,
        paddingVertical: 10,
        alignItems: "center",
        width: "100%",
        height: 150,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: THEME.SECOND_MAIN,
    },
    date: {
        fontSize: 16,
        textAlign: "left",
        fontFamily: 'open-bold',
    },
    text: {
        fontSize: 20,
        fontFamily: 'architect',
        overflow: "hidden",
    }
    
})