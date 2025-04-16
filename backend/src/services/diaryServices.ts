import { DiaryEntry,NoSensitiveInfoDiaryEntry } from '../types'
// import diaryEntries from './diaries'
import diaryData from './diaries.json' //Tienes que poner en true el resolveJsonModule
//Cuando importas algo tiene una prioridad de busqueda: ".tsx, .ts, .node, .js, .json"

//Si quiero bien definido el como me va responder necesito tipar los objetos de esta respuesta
// const diaries:Array<DiaryEntry> = diaryData
//Si es manejable puedes traerlo de un ts donde ya lo tipaste todo el array
// const diaries:Array<DiaryEntry> = diaryEntries
//Asercion de tipos para obligar a TS a que una constante o variable funcione de tal forma
//SE utiliza para informacion que te llega pero no sabes como puede llegar
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

//Imaginemos que queremos tener otra pero sin el comentario
export const getEntriesWithoutSensitiveInfo = (): NoSensitiveInfoDiaryEntry[] => diaries

export const addEntry = ():null => null