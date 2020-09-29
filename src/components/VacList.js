import React from 'react'
import {View, StyleSheet, FlatList, Text} from 'react-native'
import { THEME } from '../theme'

export const VacList = ({vaccinations, onOpen}) => {
    if (!vaccinations.length) {
        return (
            <View style={styles.wrapperNoItem}>
                <Text style={styles.noItem}>Empty list.....</Text>
            </View>
        )
    }

    return (
        <View style={styles.wrapper}>
           <View style={styles.wrapperContainer}>
            <FlatList
                    data={vaccinations}
                    keyExtractor={vac => vac.id.toString()}
                    renderItem={({item}) => <Vac vac={item} onOpen={onOpen} />}
                />
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 8,
        backgroundColor: THEME.WRAPPER_BACK,

    },
    wrapperNoItem: {
        backgroundColor: "#fff",
        textAlign: "center",
    },
    noItem: {
        fontFamily: 'open-bold',
        textAlign: "center",
        marginVertical: 10,
        fontSize: 20,
    },
})