//Los enums no solamente los puedes utilizar en typescrip si no que te crea una constante que puedes utilizar en codigo como si fuese runtime, osea disponible en runtime
//Los enums se convierte en js, entonces el archivo debe dejar de llamarse .d.ts, se carga las definiciones
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