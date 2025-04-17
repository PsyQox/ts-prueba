import { DiaryEntry,NewDiaryEntry,NoSensitiveInfoDiaryEntry } from '../types'
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

//Esto nos puede obligar siempre a controlar el que nos pueda devolver un undefined
export const findById = (id:number): NoSensitiveInfoDiaryEntry | undefined =>{
    const entry = diaries.find(d => d.id == id)
    if (entry) {
        const {comment, ...resOfDiary} = entry
        return resOfDiary
    }
    return undefined
}

//Imaginemos que queremos tener otra pero sin el comentario
export const getEntriesWithoutSensitiveInfo = (): NoSensitiveInfoDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility}) => {
        return {id, date, weather, visibility}
    })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry):DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    }
    diaries.push(newDiary)
    return newDiary
    
}