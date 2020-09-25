import 'react-native-gesture-handler'
import React from 'react'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createDrawerNavigator } from "@react-navigation/drawer"
import { MainScreen } from '../screens/MainScreen'
import { THEME } from '../theme'
import { NotiesScreen } from '../screens/NotiesScreen'
import { NoteScreen } from '../screens/NoteScreen'
import { VaccinationsScreen } from '../screens/VaccinationsScreen'
import { VacScreen } from '../screens/VacScreen'
import { RecordScreen } from '../screens/RecordScreen'
import { CreateRecordScreen } from '../screens/CreateRecordScreen'
import { CreateNoteScreen } from '../screens/CreateNoteScreen'

const navigatorOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? THEME.SECOND_MAIN : '#fff'
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.SECOND_MAIN,
}

const RecordScreenStack = createStackNavigator()

function RecordStack() {
    return(
        <RecordScreenStack.Navigator screenOptions={navigatorOptions}>
            <RecordScreenStack.Screen 
                name="Main" 
                component={MainScreen} 
                options={{
                    headerTitle: "Record list",
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: "architect",
                        fontSize: 24,
                    }
                }}
                />
            <RecordScreenStack.Screen 
                name="Record" 
                component={RecordScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: "architect",
                        fontSize: 24,
                    }
                }}
            />
        </RecordScreenStack.Navigator>
    )
}

const NotiesScreenStack = createStackNavigator()

function NotiesStack() {
    return (
        <NotiesScreenStack.Navigator screenOptions={navigatorOptions}>
            <NotiesScreenStack.Screen 
                name="Noties" 
                component={NotiesScreen} 
                options={{
                    headerTitle: "Remember list",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontFamily: "architect",
                        fontSize: 24,
                    }
                }}
            />
            <NotiesScreenStack.Screen 
                name="Note" 
                component={NoteScreen}
                options={{
                    headerTitle: "Remember",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontFamily: "architect",
                        fontSize: 24,
                    }
                }}
            />
        </NotiesScreenStack.Navigator>
    )
}

const VacScreenStack = createStackNavigator()

function VacStack() {
    return (
        <VacScreenStack.Navigator screenOptions={navigatorOptions}>
            <VacScreenStack.Screen 
                name="Vaccinations" 
                component={VaccinationsScreen} 
                options={{
                    headerTitle: "Vaccinations"
                }}
            />
            <VacScreenStack.Screen 
                name="Vac" 
                component={VacScreen}
                options={{
                    headerTitle: "Vaccina"
                }}
            />
        </VacScreenStack.Navigator>
    )
}

const TabIos = createBottomTabNavigator()

function TabStackIos() {
    return (
        <TabIos.Navigator 
            tabBarOptions={{
                activeTintColor: THEME.SECOND_MAIN,
        }}
        >
            <TabIos.Screen 
            name="PostTab" 
            component={RecordStack}
            options={{
                tabBarLabel: "Main page",
                tabBarIcon: (info) => (
                    <Ionicons 
                        name="md-square-outline"
                        size={25}
                        color={info.color}
                    />
                )
            }}
            />
            <TabIos.Screen
                name="NotiesTab" 
                component={NotiesStack} 
                options={{
                    tabBarLabel: "Noties",
                    tabBarIcon: (info) => (
                        <Ionicons 
                            name="ios-list-box"
                            size={25}
                            color={info.color}
                        />
                    )
                }}
            />
            <TabIos.Screen 
                name="VacTab" 
                component={VacStack} 
                options={{
                    tabBarLabel: "Vaccination",
                    tabBarIcon: (info) => (
                        <Ionicons 
                            name="ios-thermometer"
                            size={25}
                            color={info.color}
                        />
                    )
                }}
            />
        </TabIos.Navigator>
    )
}

const TabAndroid = createMaterialBottomTabNavigator()

function TabStackAndroid() {
    return (
        <TabAndroid.Navigator
            shifting={true}
            barStyle={{
                backgroundColor: THEME.SECOND_MAIN,
            }}
            activeColor="#fff"
        >
            <TabAndroid.Screen 
                name="PostTab" 
                component={RecordStack}
                options={{
                    tabBarLabel: "Main page",
                    tabBarIcon: (info) => (
                        <Ionicons 
                            name="md-square-outline"
                            size={25}
                            color={info.color}
                        />
                    )
                }}
            />
            <TabAndroid.Screen 
                name="NotiesTab" 
                component={NotiesStack}
                options={{
                    tabBarLabel: "Noties",
                    tabBarIcon: (info) => (
                        <Ionicons 
                            name="ios-list-box"
                            size={25}
                            color={info.color}
                        />
                    )
                }}
            />
            <TabAndroid.Screen 
                name="VacTab" 
                component={VacStack}
                options={{
                    tabBarLabel: "Vaccination",
                    tabBarIcon: (info) => (
                        <Ionicons 
                            name="ios-thermometer"
                            size={25}
                            color={info.color}
                        />
                    )
                }}
            />
        </TabAndroid.Navigator>
    )
}

const TabNavigation = () => Platform.OS === "android" ? <TabStackAndroid /> : <TabStackIos />

const CreateRecordStackScreen = createStackNavigator()

function CreateRecordStack() {
    return (
        <CreateRecordStackScreen.Navigator screenOptions={navigatorOptions}>
            <CreateRecordStackScreen.Screen 
                name="CreateRecord" 
                component={CreateRecordScreen}
                options={{
                    headerTitle: "Create record",
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: "architect",
                    }
                }} 
            />
        </CreateRecordStackScreen.Navigator>
    )
}

const CreateNoteStackScreen = createStackNavigator()

function CreateNoteStack() {
    return (
        <CreateNoteStackScreen.Navigator screenOptions={navigatorOptions}>
            <CreateNoteStackScreen.Screen 
                name="CreateNote" 
                component={CreateNoteScreen}
                options={{
                    headerTitle: "Напомнить",
                    headerTitleAlign: 'center'
                }} 
            />
        </CreateNoteStackScreen.Navigator>
    )
}

const Drawer = createDrawerNavigator()

function MainNavigator() {
    return (
        <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: THEME.MAIN_COLOR,
                labelStyle: {
                    fontFamily: 'architect',
                    fontSize: 20,
                },
            }}
        >
            <Drawer.Screen 
                name="RecordTab" 
                component={TabNavigation} 
                options={{
                    drawerLabel: "Main page"
                }}
            />
            <Drawer.Screen 
                name="CreateRecord" 
                component={CreateRecordStack} 
                options={{
                    drawerLabel: "Add record"
                }}
            />
            <Drawer.Screen 
                name="CreateNote" 
                component={CreateNoteStack} 
                options={{
                    drawerLabel: "Remember me"
                }}
            />
        </Drawer.Navigator>
    )
}

export default function AppNavigation() {
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}