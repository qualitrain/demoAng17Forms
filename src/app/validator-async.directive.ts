import { Directive, forwardRef } from '@angular/core';
import { DatosTelService } from './datos-tel.service';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, catchError, map, of } from 'rxjs';

@Directive({
  selector: '[yaExisteTel]',
  standalone: true,
  providers:[
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => ValidatorAsyncDirective),
      multi: true,
    },    
  ]
})
export class ValidatorAsyncDirective implements AsyncValidator{

  constructor(private provDatos:DatosTelService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.validarSiYaExisteTel(control);
  }

  validarSiYaExisteTel(control: AbstractControl): Observable<ValidationErrors | null> {
    let resultValidacion:Observable<boolean> = this.provDatos.yaExisteTel(control.value);
    return resultValidacion.pipe(
      map(yaExiste => yaExiste ? { telYaExiste:true } : null),
      catchError( ()=> of(null))
    );
 }

}
