//Para tipar los objetos de nuestra aplicacion
//Type es que estamos creando tipos al igual que existe el tipo number tipo string y boolean
// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'


//Los enums no solamente los puedes utilizar en typescrip si no que te crea una constante que puedes utilizar en codigo como si fuese runtime, osea disponible en runtime
export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Windy = 'windy',
    Stormy = 'stormy'
}

export enum Visibility {
    Great = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor'
}

//Un interface es mas como un contrato que deberia tener un objeto
export interface DiaryEntry {
    id: number
    date: string
    weather: Weather
    visibility: Visibility
    comment: string
}

//Interfaz creada a partir de DiaryEntries (lo que hace es que excluye el dato comment)
//export type NoSensitiveInfoDiaryEntry = Pick<DiaryEntry, "id" | "date" | "weather" | "visibility">

//Hay otra forma de hacer lo de arriba es la siguiente
export type NoSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

//¡¡¡siempre intentar ver que se puede reutilizar!!!

//Cuando utilizar types y cuando utilizar interface
/*
    Muchas veces son intercambiables, porque incluso podrias tener type para un objeto justo como la interface
    export interface DiaryEntry {
        id: number,
        date: string,
        weather: Weather,
        visibility: Visibility,
        comment: string,
    }
    Version ton type
    export type DiaryEntry = {
        id: number,
        date: string,
        weather: Weather,
        visibility: Visibility,
        comment: string,
    }
    Lo ultimo funciona correctamente 

    La diferencia que tienes es que las interfaces estan pensadas para ser extendidas:
    interface SpecialDiaryEntry extends DiaryEntry {
        flightNumber: number
    }
    Esto lo que hace es que el SpecialDiaryEntry tenga todas las propiedades de DiaryEntry mas las que se identifican en el mismo

    Igual se puede hacer con tipos pero queda mas raro y se expresa diferente
    type SpecialDiaryEntry2 = DiaryEntry & {
        flightNumber: number
    }

    No puedes tener 2 tipos con el mismo nombre porque puede dar error, pero si las interfaces, en su caso se irian extendiendo.
*/