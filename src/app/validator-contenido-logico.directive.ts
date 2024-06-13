import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[contenidoLogico]',
  standalone: true,
  providers: [{provide: NG_VALIDATORS, useExisting: ValidatorContenidoLogicoDirective, multi: true}]
})
export class ValidatorContenidoLogicoDirective implements Validator{
  validate(control: AbstractControl): ValidationErrors|null {
    return this.validarPalSinSentido(control);
  }

  constructor() { }

  validarPalSinSentido(control:AbstractControl):ValidationErrors|null{

    const valor:string = control.value;
    if(!valor)
      return null;
    if(valor.length < 2)
      return null;

    const vocalRegEx:RegExp = /[AEIOUÁÉÍÓÚ]/gi;
    const consonantesRegEx:RegExp = /[B-DF-HJ-NÑP-TV-Z]/gi;
    const vocalesRepetidasRegEx:RegExp = /A{2,}|E{3,}|I{2,}|O{3,}|U{2,}/i;
    const porcenMinVocales = 0.30;
    const porcenMaxVocales = 0.60;

    let arrCoincidencias = valor.match(vocalRegEx);
    let nVocales = arrCoincidencias === null ? 0 : arrCoincidencias.length;

    arrCoincidencias = valor.match(consonantesRegEx);
    let nConsonantes = arrCoincidencias === null ? 0 : arrCoincidencias.length;

    let porcenVocales = nVocales / (nVocales + nConsonantes); 
    //console.log("nVocales:" + nVocales, ", nConsonantes:" + nConsonantes + ", % vocales:" + porcenVocales);
    if(porcenVocales < porcenMinVocales){ //Muy pocas vocales
      return {contenidoIlogico:true};
    }
    if(porcenVocales > porcenMaxVocales){ //Demasiadas vocales
      return {contenidoIlogico:true};
    }
    if(vocalesRepetidasRegEx.test(valor)){ //Contiene demasiadas vocales consecutivas repetidas
      return {contenidoIlogico:true};     
    }
    return null;
  }


}
