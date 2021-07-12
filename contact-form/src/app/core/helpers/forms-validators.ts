import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidationExp } from './constans';
import { countChecksumFromString } from './tools';

export class FormsValidators {
/**
 * Global validator for reactive form checking NIP
 */
    static validateNip(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
        if (!control.value) {
            return null;
        }
        if (!ValidationExp.NipPattern.test(control.value)) {
            return { wrongNipNumber: true };
        }
        const nipWithoutDashes = control.value.replace(/-/g, '');
        return (parseInt(nipWithoutDashes.slice(-1), 10) !== countChecksumFromString(nipWithoutDashes, [6, 5, 7, 2, 3, 4, 5, 6, 7])) ?
            { wrongNipNumber: true } : null;
        };
    }

}