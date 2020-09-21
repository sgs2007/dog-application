import React from 'react'
import {View, StyleSheet, FlatList, Text} from 'react-native'
import { Note } from './Note'

export const NotiesList = ({noties, onOpen}) => {

    if(!noties.length) {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.noItem}>Empty list</Text>
            </View>
        )
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={noties}
                keyExtractor={note => note.id.toString()}
                renderItem={({item}) => <Note record={item} onOpen={onOpen} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    },
    noItem: {
        fontFamily: 'open-bold',
        textAlign: "center",
        marginVertical: 10,
        fontSize: 20,
    }
})