import * as Font from 'expo-font'
import { DB } from './db'

export async function bootstrap() {
    try {
        await Font.loadAsync({
            'open-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
            'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
            'ranchers-regular': require('../assets/fonts/Ranchers-Regular.ttf'),
            'architect': require('../assets/fonts/ArchitectsDaughter-Regular.ttf'),
            'orbitron': require('../assets/fonts/Orbitron-VariableFont_wght.ttf'),

        })
        await DB.init()
        
    } catch (error) {
        console.log(error)
    }
}