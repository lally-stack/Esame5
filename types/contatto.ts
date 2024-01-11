export interface IContatto extends IRuolo{
    nome: string,
    cognome: string,
    email: string,
    sesso: number,
    citta: string,
    provincia: string,
    dataDiNascita: string
}

interface IRuolo {
    idContattoRuolo: number
}