import React from 'react'
import {View, StyleSheet, FlatList, Text} from 'react-native'
import { THEME } from '../theme'
import {Record} from './Record'

export const RecordList = ({records, onOpen}) => {

    if(!records.length) {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.noItem}>Записей пока нет.....</Text>
            </View>
        )
    }

    return (
        <View style={styles.wrapper}>
           <View style={styles.wrapperContainer}>
            <FlatList
                    data={records}
                    keyExtractor={record => record.id.toString()}
                    renderItem={({item}) => <Record record={item} onOpen={onOpen} />}
                />
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 2,
        backgroundColor: "#fff",
    },
    wrapperContainer: {
        backgroundColor: THEME.RECORD_COLOR,
        padding: 8,
        height: "100%",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    noItem: {
        fontFamily: 'open-bold',
        textAlign: "center",
        marginVertical: 10,
        fontSize: 20,
    }
})