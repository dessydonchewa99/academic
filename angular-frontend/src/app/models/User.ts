export interface User {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    birthDate?: Date;
    type: string;
}