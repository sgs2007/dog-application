import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'

export const Note = ({note, onOpen}) => {
    
    const date = new Date(note.date).toLocaleDateString()

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(note)} >
            <View style={styles.record}>
                <Text style={styles.date}>{date}</Text>
                <Text style={styles.text}>{note}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    record: {
        overflow: "hidden",
        marginBottom: 15,
        backgroundColor: '#5656FA',
        paddingVertical: 10,
        alignItems: "center",
        width: "100%",
        height: 200,
    },
    date: {
        color: '#fff',
        fontSize: 16,
        textAlign: "left",
        fontFamily: 'open-bold',
    },
    text: {
        color: '#fff',
        fontSize: 19,
        fontFamily: 'open-regular',
    }
    
})