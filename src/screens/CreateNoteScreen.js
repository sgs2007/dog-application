import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const CreateNoteScreen = ({navigation}) => {

    navigation.setOptions({
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Toggle Drawer" iconName="ios-menu" onPress={()=>navigation.toggleDrawer()} />
            </HeaderButtons>
        )
    })

    return (
        <View style={styles.center}>
            <Text>CreateNoteScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})