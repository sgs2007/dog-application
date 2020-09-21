import React, { useEffect } from 'react'
import {View, StyleSheet, Text, ActivityIndicator, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import {THEME} from '../theme'
import { NotiesList } from '../components/NotiesList'
import { loadRecord } from '../store/actions/record'

export const NotiesScreen = ({navigation}) => {

    navigation.setOptions({
        headerLeft: () => {
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item />
            </HeaderButtons>
        }
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadRecord())
    }, [dispatch])

    if(loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator color={THEME.DANGER_COLOR} />
            </View>
        )
    }

    const openNoteHandler = (note) => {
        navigation.navigate("Note", {noteId: note.id, date: note.date, finished: note.finished})
    }

    const allNoties = useSelector(state => state.record.allNoties)
    const loading = useSelector(state => state.record.loading)

    return (
        <NotiesList noties={allNoties} onOpen={openNoteHandler} />
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})