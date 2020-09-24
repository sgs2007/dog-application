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
        padding: 5,
        backgroundColor: "#fff",
    },
    wrapperContainer: {
        // backgroundColor: THEME.SECOND_MAIN,
        padding: 2,
        height: "100%",
    },
    noItem: {
        fontFamily: 'open-bold',
        textAlign: "center",
        marginVertical: 10,
        fontSize: 20,
    }
})