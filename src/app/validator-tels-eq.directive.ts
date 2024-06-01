import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[validarTelefonosIguales]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS, 
      useExisting: ValidatorTelsEqDirective, 
      multi: true
    }
  ]
})
export class ValidatorTelsEqDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors|null {
    return this.validarTelsDistintos(control as FormGroup);
  }

  validarTelsDistintos(control:FormGroup):ValidationErrors|null{
    if(!control)
      return null;
    if(!control.get('tel1'))
      return null;
    if(!control.get('tel2'))
      return null;

    let tel1:string = control.get('tel1')!.value;
    let tel2:string = control.get('tel2')!.value;

    if(tel1 === tel2){ 
      return {telefonosIguales:true};     
    }

    return null;
  }

}
