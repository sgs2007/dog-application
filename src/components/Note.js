import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { THEME } from '../theme'

export const Note = ({note, onOpen}) => {
    
    const current_date = new Date(note.current_date).toLocaleDateString()
    const next_date = new Date(not.next_date).toLocaleDateString()

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(note)} >
            <View style={styles.item}>
                <Text style={styles.date}>{current_date}</Text>
                <Text style={styles.text}>{note.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        overflow: "hidden",
        marginBottom: 10,
        paddingVertical: 10,
        width: "100%",
        height: 130,
        borderRadius: 20,
        alignItems: "center",
        backgroundColor: THEME.ITEM_BACK,
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