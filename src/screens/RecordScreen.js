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

    const iconName = !record.finished ? "closesquare" : "checksquare"

    navigation.setOptions({
      title: 'Record from ' + date,
    })

    if(!record) {
      return null
    }

    return (
      <View style={styles.center}>
        <View style={styles.wrapperText}>
          <ScrollView>
            <View style={styles.finishMarker}>
              <AntDesign name={iconName} size={30} color={THEME.MAIN_COLOR} style={styles.icons} />
            </View>
            <Text style={styles.text}>{record.text}</Text>
          </ScrollView>
        </View>
        <View style={styles.sourcePanel}>
          <Ionicons.Button name="ios-trash" size={32} color="#fff" style={styles.buttonItem} onPress={removeHandler} />
          <Ionicons.Button name="md-checkmark-circle-outline" size={32} color="#fff" style={styles.buttonItem} />
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
    },
    finishMarker: {
      width: "100%",
      flex: 1,
      alignItems: "flex-end",
    },
    labelIcon: {
      flex: 1,
    },
    icons: {
      flex: 1,
    },
    sourcePanel: {
      flex: 1,
      marginBottom: 10,
      maxHeight: 35,
      backgroundColor: THEME.MAIN_COLOR,
      borderRadius: 10,
      justifyContent: "space-around",
      flexDirection: "row",
    },
    buttonItem: {
      flex: 1,
      textAlign: "center",
      backgroundColor: THEME.MAIN_COLOR,
    },
})