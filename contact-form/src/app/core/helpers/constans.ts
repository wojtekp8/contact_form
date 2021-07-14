export class Constans {
}

interface ValidationExpType{
    readonly PhoneNoPattern: RegExp;
    readonly NipPattern: RegExp;
}

const validationExp: ValidationExpType = {
    PhoneNoPattern: /^(?:\+\d{1,3})?\s*(?:\d{2,3}\s*-?\s*){2,3}\d{3,4}$/,
    NipPattern: /^(((?:\d{3}-?){2}(?:\d{2}-?)\d{2})|(\d{3}[- ]\d{2}[- ]\d{2}[- ]\d{3}))$/,
  };

export const ValidationExp: ValidationExpType = validationExp;