import { LOAD_RECORD, ADD_RECORD, REMOVE_RECORD, FINISHED_RECORD, FINISHED_NOTIES, ADD_NOTIES, REMOVE_NOTIES } from "../types";

const initialState = {
    allRecords: [],
    allNoties: [],
    allVac: [],
    loading: true,
}

export const recordReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case LOAD_RECORD:
            return {
                ...state,
                allRecords: action.payload.filter(record => record.type === "record"),
                allNoties: action.payload.filter(record => record.type === "noties"),
                allVac: action.payload.filter(record => record.type === "vaccina"),
                loading: false,
            }
        case FINISHED_RECORD:
            const allRecords = state.allRecords.map(record => {
                if(record.id === action.payload) {
                    return {...record, finished: !record.finished}
                }
                return record
            })
            return {
                ...state,
                allRecords,
            }

        case ADD_RECORD:
            return {
                ...state,
                allRecords: [{...action.payload}, ...state.allRecords]
            }
        case REMOVE_RECORD:
            return {
                ...state,
                allRecords: state.allRecords.filter(record => record.id !== action.payload)
            }
        case FINISHED_NOTIES:
            const allNoties = state.allNoties.map(note => {
                if(note.id === action.payload) {
                    return {...note, finished: !note.finished}
                }
                return note
            })
            return {
                ...state,
                allNoties
            }
        case ADD_NOTIES:
            return {
                ...state,
                allNoties: [{...action.payload}, ...state.allNoties]
            }
        case REMOVE_NOTIES:
            return {
                ...state,
                allNoties: state.allNoties.filter(note => note.id !== action.payload)
            }
            
        default:
            return state
    }
}