import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { THEME } from '../theme'

export const Note = ({note, onOpen}) => {
    
    const current_date = new Date(note.current_date).toLocaleDateString()
    const next_date = new Date(note.next_date).toLocaleDateString()
    const finishIndecator = note.finished ? {backgroundColor: THEME.SUCCESS_COLOR} : {backgroundColor: THEME.WAIT_COLOR}

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(note)} >
            <View style={styles.item}>
                <View style={styles.wrapperInfo}>
                    <Text style={styles.date}>Created: {current_date}</Text>
                    <View style={styles.finishContainer}>
                        <Text style={styles.next_date}>Next date: {next_date}</Text>
                        <Text style={{...styles.finished, ...finishIndecator}}></Text>
                    </View>
                </View>
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
    wrapperInfo: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    finishContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    date: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 10,
        textAlign: "left",
        fontFamily: 'open-bold',
    },
    next_date: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'open-bold'
    },
    finished: {
        height: 15,
        maxWidth: 15,
        borderRadius: 50,
        marginTop: 3,
        flex: 1,
        marginRight: 8,
    },
    text: {
        fontSize: 20,
        fontFamily: 'architect',
        flex: 1,
        padding: 10,
        color: "#000",
        borderColor: "#000",
        width: "100%",
        textAlign: "justify",
    }
    
})