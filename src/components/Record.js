import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { color } from 'react-native-reanimated'
import { THEME } from '../theme'

export const Record = ({record, onOpen}) => {
    
    const date = new Date(record.date).toLocaleDateString()
    
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(record)} >
            <View style={styles.record}>
                <View style={styles.wrapperInfo}>
                    <Text style={styles.date}>{date}</Text>
                    <Text style={styles.finished}></Text>
                </View>
                <Text style={styles.text}>{record.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    record: {
        overflow: "hidden",
        marginBottom: 10,
        backgroundColor: '#fff',
        paddingVertical: 10,
        width: "100%",
        height: 130,
        borderRadius: 5,
        alignItems: "center",
    },
    wrapperInfo: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    date: {
        flex: 1,
        color: "#000",
        fontSize: 16,
        textAlign: "center",
        fontFamily: 'open-bold',
    },
    finished: {
        height: 15,
        width: 15,
        borderRadius: 50,
        backgroundColor: record.finished ? THEME.SUCCESS_BOTTON : THEME.DANGER_COLOR,
        marginRight: 10,
    },
    text: {
        flex: 2,
        padding: 5,
        color: "#000",
        fontSize: 18,
        fontFamily: 'open-regular',
    }
    
})