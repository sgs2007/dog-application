import { ADD_NOTIES, ADD_RECORD, FINISHED_NOTIES, FINISHED_RECORD, LOAD_RECORD, REMOVE_NOTIES, REMOVE_RECORD } from "../types"
import { Http } from '../../http'

export const loadRecord = () => {

    return async dispatch => {

        const data = await Http.get("https://dog-application-7d9c7.firebaseio.com/dog-app.json")
        let records = []
        
        if (data) {
            records = Object.keys(data).map(key => ({...data[key], id: key}))
        }

        dispatch({
            type: LOAD_RECORD,
            payload: records
        })
    }
}

export const finishedRecord = record => async dispatch => {

    const id = record.id

    await Http.patch(`https://dog-application-7d9c7.firebaseio.com/dog-app/${id}.json`, {...record, finished: !record.finished}).then(() => {
        dispatch ({
            type: record.type === "record" ? FINISHED_RECORD : FINISHED_NOTIES,
            payload: record.id,
        })
    })

    
}

export const removeRecord = record =>  {

    return async dispatch => {

        const id = record.id

        Http.delete(`https://dog-application-7d9c7.firebaseio.com/dog-app/${id}.json`)
    
        dispatch ({
            type: record.type === "record" ? REMOVE_RECORD : REMOVE_NOTIES,
            payload: id
        })
    
    }
}

export const addRecord = record => async dispatch => {

    const payload = {...record}

    const data = await Http.post("https://dog-application-7d9c7.firebaseio.com/dog-app.json", payload)

    payload.id = data.name

    dispatch ({
        type: payload.type === "record" ? ADD_RECORD : ADD_NOTIES,
        payload,
    })
}