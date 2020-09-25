import React, { useState } from 'react'
import { StyleSheet, View, Text, KeyboardAvoidingView, Keyboard } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { AntDesign, Octicons, MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { THEME } from '../theme'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { addRecord } from '../store/actions/record'
import DateTimePicker from '@react-native-community/datetimepicker';

export const CreateNoteScreen = ({navigation}) => {

    const [text, setText] = useState('')
    const [next_date, setDate] = useState(new Date());
    const [mode, setMode] = useState('datetime');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    

    const dispatch = useDispatch()

    navigation.setOptions({
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Go back" iconName="md-arrow-round-back" onPress={()=>navigation.goBack()} />
            </HeaderButtons>
        ),
        headerStyle: {
            backgroundColor: THEME.REMEMBER_SCREEN
        }
    })
    
    const saveNoteHandler = () => {

        const note = {
            current_date: new Date().toJSON(),
            next_date: next_date,
            text: text,
            type: "noties",
            finished: false,
        }
        setText('')
        setDate(new Date())
        navigation.navigate("Noties")
        dispatch(addRecord(note))
    }

    const keyboardHandler = () => {
        Keyboard.dismiss()
    }

    const cleanInputHandler = () => {
        setText('')
        setDate(new Date())
    }

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS == "ios" ? "padding" : null} >
            <View style={styles.center}>
                <View style={styles.textarea}>
                    <Text style={styles.date}>Remember me on: {next_date.toLocaleDateString()}</Text>
                    <TextInput style={styles.textInput} value={text} onChangeText={setText} multiline />
                </View>
                <View style={styles.calendarContainer}>
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={next_date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />
                    )}
                </View>
                <View style={styles.buttonPanel}>
                    <Octicons.Button name="keyboard" color="#fff" style={styles.buttonItem} onPress={keyboardHandler} />
                    <AntDesign.Button name="calendar" color="#fff" style={styles.buttonItem} onPress={showDatepicker} />
                    <MaterialCommunityIcons.Button name="timetable" style={styles.buttonItem} onPress={showTimepicker} />
                    <MaterialIcons.Button name="clear" color="#fff" style={styles.buttonItem} onPress={cleanInputHandler} />
                    <Entypo.Button name="add-to-list" color="#fff" style={styles.buttonItem} onPress={saveNoteHandler} />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    center: {
        padding: 5,
        paddingVertical: 10,
        height: "100%",
        justifyContent: "space-between",
    },
    textarea: {
        flex: 1,
        borderColor: THEME.REMEMBER_BORDER,
        borderWidth: 3,
        marginBottom: 10,
        borderRadius: 30,
    },
    date: {
        textAlign:"center",
        borderBottomColor: THEME.REMEMBER_BORDER,
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginHorizontal: 30,
        fontSize: 17,
    },
    textInput: {
        maxHeight: 150,
        padding: 10,
    },
    buttonPanel: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        maxHeight: 40,
        borderRadius: 30,
        backgroundColor: THEME.REMEMBER_SCREEN,
    },
    buttonItem: {
        backgroundColor: THEME.REMEMBER_SCREEN,
        borderColor: THEME.REMEMBER_SCREEN,
    },
})