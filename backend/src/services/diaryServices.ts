import { DiaryEntry } from '../types'
// import diaryEntries from './diaries'
import diaryData from './diaries.json' //Tienes que poner en true el resolveJsonModule
//Cuando importas algo tiene una prioridad de busqueda: ".tsx, .ts, .node, .js, .json"

//Si quiero bien definido el como me va responder necesito tipar los objetos de esta respuesta
// const diaries:Array<DiaryEntry> = diaryData
//Si es manejable puedes traerlo de un ts donde ya lo tipaste todo el array
// const diaries:Array<DiaryEntry> = diaryEntries
//Asercion de tipos para obligar a TS a que una constante o variable funcione de tal forma
const diaries:Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = () => diaries

export const addEntry = () => null