import { Directive } from '@angular/core'
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms'

@Directive({
  selector: '[nsMinLength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinLengthDirective, multi: true }],
})
export class MinLengthDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null
    }

    if (control.value.length < 3) {
      return { minLength: { requiredLength: 3, actualLength: control.value.length } }
    }

    return null
  }
}
