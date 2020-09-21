import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('dogs_record.db')

export class DB {
    static init() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS dog_record (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, date TEXT, type TEXT, finished INT)',
                    [],
                    resolve,
                    (_, error) => reject(error)
                )
            })
        })
    }

    static addRecord({text, date, type, finished}) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    `INSERT INTO dog_record (text, date, type, finished) VALUES (?, ?, ?, ?)`,
                    [text, date, type, 0],
                    (_, result) => resolve(result.insertId),
                    (_, error) => reject(error),
                )
            })
        })
    }

    static getRecord() {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'SELECT * FROM dog_record',
                    [],
                    (_, result) => resolve(result.rows._array),
                    (_, error) => reject(error)
                )
            })
        })
    }

    static finishedRecord(record) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'UPDATE dog_record SET finished = ? WHERE id = ?',
                    [record.finished ? 0 : 1, record.id],
                    resolve,
                    (_, error) => reject(error) 
                )
            })
        })
    }

    static removeRecord(record) {
        return new Promise((resolve, reject) => {
            db.transaction(tx => {
                tx.executeSql(
                    'DELETE FROM dog_record WHERE id = ?',
                    [record.id],
                    resolve,
                    (_, error) => reject(error) 
                )
            })
        })
    }
}