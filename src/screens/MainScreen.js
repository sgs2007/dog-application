import React, {useEffect} from 'react'
import {View, StyleSheet, Text, ActivityIndicator, FlatList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import {THEME} from '../theme'
import { loadRecord } from '../store/actions/record'
import { RecordList } from '../components/RecordList'

export const MainScreen = ({navigation}) => {

    const createRecordHandler = () => {
        navigation.navigate("CreateRecord")
    }

    navigation.setOptions({
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Toggle Drawer" iconName="ios-menu" onPress={()=>navigation.toggleDrawer()} />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Add note" iconName="md-add-circle-outline" onPress={createRecordHandler} /> 
            </HeaderButtons>
        ),
    })

    const openHandler = (record) => {
        navigation.navigate('Record', {recordId: record.id, date: record.date, finished: record.finished})
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadRecord())
    }, [dispatch])

    const allRecords = useSelector(state => state.record.allRecords)
    const loading = useSelector(state => state.record.loading)

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator color={THEME.DANGER_COLOR} />
            </View>
        )
    }

    return (
        <RecordList records={allRecords} onOpen={openHandler} />
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})