// modificare entrambi (TYPE e INTERFACE) in base a quante lingue si vogliono usare
// i diversi content.json dovranno contenere le diverse traduzioni.

export const PREDEFINED_LANGUAGE : LANGUAGE = 'IT';

export type LANGUAGE = 'IT' | 'EN';
export interface BasicPageInt<T>{
    IT : T;
    EN : T;
}

export const SNACK_BAR_CLOSE = {
    IT : 'Chiudi',
    EN : 'Close'
}