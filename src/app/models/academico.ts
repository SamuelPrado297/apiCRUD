export default interface Academico {
    registrationNumber: string;
    course: string;
    yearOfEntry: number;
    currentSemester: number;
    gpa: number
}

export enum academicStatus {
    ACTIVE,
    INACTIVE,
    GRADUATED,
    DROPPED_OUT,
    SUSPENDED
}

export enum educationMode {
    PRESENTIAL,
    REMOTE,
    HYBRID
}