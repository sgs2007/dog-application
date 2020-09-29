import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { color, round } from 'react-native-reanimated'
import { THEME } from '../theme'

export const Record = ({vac, onOpen}) => {
    
    const date = new Date(vac.current_date).toLocaleDateString()
    const next_date = new Date(vac.next_date).toLocaleDateString()
    const finishIndicator = vac.finished ? {backgroundColor: THEME.SUCCESS_COLOR} : {backgroundColor: THEME.WAIT_COLOR}

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(record)} >
            <View style={styles.item}>
                <View style={styles.wrapperInfo}>
                    <Text style={styles.date}>Create date: {date}</Text>
                    <View style={styles.finishContainer} >
                        <Text style={styles.next_date}>Finished: {next_date}</Text>
                        <Text style={{...styles.finished, ...finishIndicator}}></Text>
                    </View>
                </View>
                <Text style={styles.text}>{vac.text}</Text>
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
        backgroundColor: THEME.VAC_ITEM,
    },
    wrapperInfo: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    date: {
        flex: 1,
        color: "#000",
        fontSize: 16,
        textAlign: "left",
        fontFamily: 'open-bold',
        paddingLeft: 10,
    },
    finishContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    next_date: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'open-bold',
        paddingLeft: 10,
    },
    finished: {
        height: 15,
        maxWidth: 15,
        borderRadius: 50,
        marginTop: 3,
        flex: 1,
        marginRight: 10,
    },
    text: {
        flex: 1,
        padding: 10,
        color: "#000",
        fontSize: 18,
        fontFamily: 'open-regular',
        borderColor: "#000",
        width: "100%",
        textAlign: "justify",
    }
    
})