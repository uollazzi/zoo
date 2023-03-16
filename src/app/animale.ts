export interface Animale {
    id: number;
    nome: string;
    quadrupede: boolean;
}

export class AnimaleClasse implements Animale {
    id: number;
    nome: string;
    quadrupede: boolean;

    constructor(_id: number, _nome: string, _quadrupede: boolean) {
        this.id = _id;
        this.nome = _nome;
        this.quadrupede = _quadrupede;
    }
}