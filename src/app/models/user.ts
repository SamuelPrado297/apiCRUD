export default interface Usuário {
    name: string;
    dateOfBirth: Date;
    age: Number;
    cpf: string;
    phone: string;
    email: string;
    nationality: string
}

export enum gender {
    MALE,
    FEMALE,
    OTHER,
    PREFER_NOT_TO_SAY
}

export enum maritalStatus{
    SINGLE,
    MARRIED,
    DIVORCED,
    WIDOWED,
    OTHER
}