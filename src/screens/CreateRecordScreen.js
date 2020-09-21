import React, {useState} from 'react'
import {View, StyleSheet, Keyboard, KeyboardAvoidingView} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { TextInput } from 'react-native-paper'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { CostumButton } from '../components/CostumBotton'
import { THEME } from '../theme'
import { addRecord } from '../store/actions/record'

export const CreateRecordScreen = ({navigation}) => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const closeKeybord = () => {
        Keyboard.dismiss()
    }

    const cleanInputHandler = () => {
        setText('')
    }

    const saveHandler = () => {

        const record = {
            date: new Date().toJSON(),
            text: text,
            type: "record",
            finished: false,
        }

        setText('')
        dispatch(addRecord(record))
        navigation.navigate('Main')
    }


    navigation.setOptions({
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Toggle Drawer" iconName="ios-menu" onPress={()=>navigation.toggleDrawer()} />
            </HeaderButtons>
        ),
    })

    return (
        <KeyboardAvoidingView>
            <View style={styles.center}>
                <View style={styles.addRecord}>
                    <TextInput style={styles.textArea}  value={text} onChangeText={setText} multiline />
                </View>
                <View style={styles.buttonsPanel}>
                    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                        <Item title="Close keybord" iconName="ios-keypad" style={styles.buttonStyle} onPress={closeKeybord} />
                        <Item title="Clean input" iconName="md-square-outline" style={styles.buttonStyle} onPress={cleanInputHandler} />
                        <Item title="Delete" iconName="ios-add-circle-outline" style={styles.buttonStyle} onPress={saveHandler} />
                    </HeaderButtons>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    buttonsPanel: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: THEME.MAIN_COLOR,
        minHeight: 35,
        justifyContent: "space-around",
    },
    buttonStyle: {
        flex: 1,
    },
    center: {
        padding: 5,
        paddingVertical: 10,
        height: "100%",
        justifyContent: "space-between",
    },
    addRecord: {
        padding: 6,
        minHeight: 250,
    },
    buttonWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textArea: {
        padding: 5,
        backgroundColor: "#fff",
        maxHeight: 200,
    }
})