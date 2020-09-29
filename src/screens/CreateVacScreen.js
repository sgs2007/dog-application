import React, {useState} from 'react'
import {View, StyleSheet, Keyboard, KeyboardAvoidingView, Text} from 'react-native'
import { TextInput } from 'react-native-paper'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch } from 'react-redux'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { THEME } from '../theme'
import { addRecord } from '../store/actions/record'
import { AntDesign, Entypo, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons'
import DateTimePicker from '@react-native-community/datetimepicker'

export const CreateRecordScreen = ({navigation}) => {

    const [text, setText] = useState('')
    const [nextDate, setDate] = useState(new Date());
    const [mode, setMode] = useState('datetime');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || nextDate;
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

    const dispatch = useDispatch()

    const closeKeyboardHandler = () => {
        Keyboard.dismiss()
    }

    const cleanInputHandler = () => {
        setText('')
        setDate(new Date())
    }

    const saveHandler = () => {

        const record = {
            current_date: new Date().toJSON(),
            next_date: nextDate,
            text: text,
            type: "vaccina",
            finished: false,
        }

        setText('')
        setDate(new Date())
        dispatch(addRecord(record))
        navigation.navigate('Vaccinations')
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
                    <Text style={styles.date}>Next due date: {nextDate.toLocaleDateString()}</Text>
                    <TextInput style={styles.textArea}  value={text} onChangeText={setText} multiline />
                </View>
                <View style={styles.calendarContainer}>
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={nextDate}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />
                    )}
                </View>
                <View style={styles.buttonsPanel}>
                    <Octicons.Button name="keyboard" color="#fff" style={styles.buttonItem} onPress={closeKeyboardHandler} />
                    <AntDesign.Button name="calendar" color="#fff" style={styles.buttonItem} onPress={showDatepicker} />
                    <MaterialIcons.Button name="clear" color="#fff" style={styles.buttonItem} onPress={cleanInputHandler} />
                    <Entypo.Button name="add-to-list" color="#fff" style={styles.buttonItem} onPress={saveHandler} />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        flex: 1,
    },
    center: {
        padding: 5,
        paddingVertical: 10,
        height: "100%",
        justifyContent: "space-between",
        backgroundColor: THEME.WRAPPER_BACK2,
    },
    addRecord: {
        padding: 10,
        marginBottom: 10,
        flex: 1,
        borderRadius: 40,
        borderWidth: 4,
        borderColor: THEME.SECOND_MAIN,
        backgroundColor: "#fff",
    },
    textArea: {
        padding: 5,
        backgroundColor: "#fff",
        maxHeight: 150,
    },
    date: {
        textAlign: "center",
        fontSize: 16,
        borderBottomColor: THEME.SECOND_MAIN,
        borderBottomWidth: 2,
        marginHorizontal: 20,
    },
    buttonsPanel: {
        flex: 1,
        maxHeight: 40,
        flexDirection: "row",
        justifyContent:"space-around",
        alignItems: "flex-end",
        borderRadius: 40,
        backgroundColor: THEME.SECOND_MAIN,
    },
    buttonItem: {
        backgroundColor: THEME.SECOND_MAIN,
        borderColor: THEME.SECOND_MAIN,
    },
})