import React from 'react'
import {View, StyleSheet, FlatList, Text} from 'react-native'
import { THEME } from '../theme'
import { Note } from './Note'

export const NotiesList = ({noties, onOpen}) => {

    if(!noties.length) {
        return (
            <View style={styles.wrapperNoItem}>
                <Text style={styles.noItem}>Empty list</Text>
            </View>
        )
    }

    return (
        <View style={styles.outSideWrapper}>
            <View style={styles.wrapper}>
                <FlatList
                    data={noties}
                    keyExtractor={note => note.id.toString()}
                    renderItem={({item}) => (<Note note={item} onOpen={onOpen} />)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    outSideWrapper: {
        padding: 8,
        backgroundColor: THEME.WRAPPER_BACK,
    },
    wrapperNoItem: {
        backgroundColor: "#fff",
    },
    wrapper: {
        padding: 8,
        height: "100%",
        backgroundColor: "#fff",
        borderRadius: 20,
    },
    noItem: {
        fontFamily: 'open-bold',
        textAlign: "center",
        marginVertical: 10,
        fontSize: 20,
    }
})