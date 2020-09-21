import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export  const VaccinationsScreen = ({navigation}) => {
    return (
        <View style={styles.center}>
            <Text>VaccinationScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        textAlign: "center",
        alignItems: "center",
    }
})