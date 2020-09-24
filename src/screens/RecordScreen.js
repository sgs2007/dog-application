import React, {useCallback} from 'react'
import {View, Text, ScrollView, StyleSheet, Button, Alert} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import { finishedRecord } from '../store/actions/record'
import {Ionicons, AntDesign} from "@expo/vector-icons"
import { THEME } from '../theme'
import { removeRecord } from "../store/actions/record"

export const RecordScreen = ({navigation, route}) => {

    const dispatch = useDispatch()

    const recordId = route.params.recordId
    const date = new Date(route.params.date).toLocaleDateString()
    const record = useSelector(state => state.record.allRecords.find(r => r.id === recordId))

    if(!record) {
      return null
    }

    const finishHandler = useCallback(() => {
        dispatch(finishedRecord(record))
    }, [record])

    const removeHandler = () => {
        Alert.alert(
            'Deleting record',
            'Are you real want to delete this record?',
            [
              {
                text: 'Cancel',
                style: 'cancel'
              },
              { text: 'Delete', style: 'destructive' , onPress: () => {
                  navigation.navigate('Main')
                  dispatch(removeRecord(record))
              } }
            ],
            { cancelable: false }
          )
    }

    const iconName = !record.finished ? "exclamationcircleo" : "checkcircleo"

    navigation.setOptions({
      title: 'Record from ' + date,
      headerRight: () => (
        <AntDesign name={iconName} size={30} color="#fff" style={styles.icons} />
      ),
    })

    

    return (
      <View style={styles.center}>
        <View style={styles.wrapperText}>
          <ScrollView>
            <Text style={styles.text}>{record.text}</Text>
          </ScrollView>
        </View>
        <View style={styles.sourcePanel}>
          <Ionicons.Button name="ios-trash" size={32} color="#fff" style={styles.buttonItem} onPress={removeHandler} />
          <Ionicons.Button name="md-checkmark-circle-outline" size={32} color="#fff" style={styles.buttonItem} onPress={finishHandler} />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    center: {
      height: "100%",
      paddingTop: 10,
      paddingHorizontal: 10,
      justifyContent: "space-between",
    },
    wrapperText: {
      flex: 1,
      borderColor: THEME.BUTTON_PANEL,
      borderWidth: 2,
      borderRadius: 30,
      marginBottom: 10,
      padding: 10,
    },
    labelIcon: {
      flex: 1,
    },
    icons: {
      marginRight: 10,
    },
    sourcePanel: {
      flex: 1,
      marginBottom: 10,
      maxHeight: 35,
      backgroundColor: THEME.BUTTON_PANEL,
      borderRadius: 10,
      justifyContent: "space-around",
      flexDirection: "row",
    },
    buttonItem: {
      flex: 1,
      textAlign: "center",
      width: "100%",
      backgroundColor: THEME.BUTTON_PANEL,
    },
})