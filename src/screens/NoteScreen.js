import React, {useCallback} from 'react'
import {View, Text, ScrollView, StyleSheet, Button, Alert} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import { Item, HeaderButtons } from 'react-navigation-header-buttons'
import {AppHeaderIcon} from '../components/AppHeaderIcon'
import { finishedRecord } from '../store/actions/record'
import { THEME } from '../theme'

export const NoteScreen = ({navigation, route}) => {

    const dispatch = useDispatch()

    const noteId = route.params.noteId
    const date = new Date(route.params.date).toLocaleDateString()
    const record = useSelector(state => state.record.allNoties.find(r => r.id === noteId))

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

    const iconName = record.finished ? "md-checkbox" : "md-checkbox-outline"

    navigation.setOptions({
      title: 'Record from ' + date,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item title="Finished" iconName={iconName} />
        </HeaderButtons>
      )
    })

    if(!record) {
      return null
    }

    return (
      <ScrollView>
        <View style={styles.wrapper}>
          <Text style={styles.text}>{record.text}</Text>
        </View>
        <Button title="Delete" color={THEME.DANGER_COLOR} onPress={removeHandler} />
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-bold',
    fontSize: 18,
  },
  wrapper: {
    padding: 15,
  }
})