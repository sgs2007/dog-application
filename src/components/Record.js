import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { color } from 'react-native-reanimated'
import { THEME } from '../theme'

export const Record = ({record, onOpen}) => {
    
    const date = new Date(record.date).toLocaleDateString()
    const finishIndicator = record.finished ? {backgroundColor: THEME.SUCCESS_COLOR} : {backgroundColor: THEME.WAIT_COLOR}

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(record)} >
            <View style={styles.item}>
                <View style={styles.wrapperInfo}>
                    <Text style={styles.date}>{date}</Text>
                    <View style={styles.finishContainer} >
                        <Text style={{...styles.finished, ...finishIndicator}}></Text>
                    </View>
                </View>
                <Text style={styles.text}>{record.text}</Text>
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
        borderRadius: 40,
        alignItems: "center",
        borderWidth: 5,
        borderColor: THEME.SECOND_MAIN,
    },
    wrapperInfo: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    date: {
        flex: 1,
        color: "#000",
        fontSize: 16,
        textAlign: "center",
        fontFamily: 'open-bold',
    },
    finishContainer: {
        flex: 1,
        alignItems: "flex-end",
    },
    finished: {
        height: 15,
        width: 15,
        borderRadius: 50,
        marginTop: 5,
        flex: 1,
        marginRight: 30,
    },
    text: {
        flex: 2,
        padding: 5,
        color: "#000",
        fontSize: 18,
        fontFamily: 'open-regular',
    }
    
})