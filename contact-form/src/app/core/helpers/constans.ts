export class Constans {
}

interface ValidationExpType{
    readonly NamePattern: RegExp;
    readonly PhoneNoPattern: RegExp;
    readonly NipPattern: RegExp;
}

const validationExp: ValidationExpType = {
    NamePattern: /^(?:(?![0-9_!¡?÷?¿\\+=@#$%ˆ&*(){}|~`<>;"":[\]])[\x20-\x7EĄąĆćĘęŁłŃńÓóŚśŻżŹź])+$/,
    PhoneNoPattern: /^(?:\+\d{1,3})?\s*(?:\d{2,3}\s*-?\s*){2,3}\d{3,4}$/,
    NipPattern: /^(?:\d{3}-?){2}(?:\d{2}-?)\d{2}$/,
  };

export const ValidationExp: ValidationExpType = validationExp;