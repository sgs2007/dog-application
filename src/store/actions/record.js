import { ADD_NOTIES, ADD_RECORD, FINISHED_NOTIES, FINISHED_RECORD, LOAD_RECORD, REMOVE_NOTIES, REMOVE_RECORD } from "../types"
import { DB } from '../../db'

export const loadRecord = () => {

    return async dispatch => {

        const records = await DB.getRecord()

        dispatch({
            type: LOAD_RECORD,
            payload: records
        })
    }
}

export const finishedRecord = record = async dispatch => {

    await DB.finishedRecord(record)

    dispatch ({
        type: record.type === "record" ? FINISHED_RECORD : FINISHED_NOTIES,
        payload: record.id,
    })
}

export const removeRecord = record =>  {

    return async dispatch => {

        const id = await DB.removeRecord(record)
    
        dispatch ({
            type: record.type === "record" ? REMOVE_RECORD : REMOVE_NOTIES,
            payload: id
        })
    
    }
}

export const addRecord = record => async dispatch => {

    const payload = {...record}

    const id = await DB.addRecord(payload)

    payload.id = id

    dispatch ({
        type: payload.type === "record" ? ADD_RECORD : ADD_NOTIES,
        payload,
    })
}