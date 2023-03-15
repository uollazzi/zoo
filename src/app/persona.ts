export interface Persona {
    id: number;
    nome: string;
    cognome: string;
    email: string;
    sesso: string;
    attivo: boolean;
    occupazioni: Occupazione[];
    lingue: Lingua[];
}

export interface Occupazione {
    anno: number;
    nome: string;
}

export interface Lingua {
    nome: string;
}