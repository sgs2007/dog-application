import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { VacList } from '../components/VacList'
import { THEME } from '../theme'

export  const VaccinationsScreen = ({navigation}) => {

    navigation.setOptions({
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Toggle Drawer" iconName="ios-menu" onPress={()=>navigation.toggleDrawer()} />
            </HeaderButtons>
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Add note" iconName="md-add-circle-outline" /> 
            </HeaderButtons>
        ),
        headerStyle: {
            backgroundColor: THEME.VAC_SCREEN,
        }
            
    })

    const vaccinations = useSelector(state => state.record.allVac)
    const loading = useSelector(state => state.record.loading)

    const openVacHandler = (vac) => {
        navigation.navigate("Note", {vacId: vac.id, date: vac.date, finished: vac.finished})
    }

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator color={THEME.DANGER_COLOR} />
            </View>
        )
    }

    return (
        <VacList vaccinations={vaccinations} onOpen={openVacHandler} />
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})