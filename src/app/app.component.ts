import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormTemplDriven01Component } from './form-templ-driven01/form-templ-driven01.component';
import { FormTemplDriven02Component } from './form-templ-driven02/form-templ-driven02.component';
import { FormTemplDriven03Component } from './form-templ-driven03/form-templ-driven03.component';
import { FormTemplDriven04Component } from './form-templ-driven04/form-templ-driven04.component';
import { FormTemplDriven05Component } from './form-templ-driven05/form-templ-driven05.component';
import { ReactiveForm01Component } from './reactive-form01/reactive-form01.component';

class Ejemplo{
  mostrar?:boolean;
  descripcion?:string;
  clasesCss?:string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    FormTemplDriven01Component,
    FormTemplDriven02Component,
    FormTemplDriven03Component,
    FormTemplDriven04Component,
    FormTemplDriven05Component,
    ReactiveForm01Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demoAng17Forms';
  ejemplos:Ejemplo[] = [
    { mostrar:false,  descripcion:'Formulario con Validación manual (template driven)',      clasesCss:'bg-primary bg-opacity-25' },
    { mostrar:false,  descripcion:'Formulario con Validación incorporada (template driven)', clasesCss:'bg-primary bg-opacity-10' },
    { mostrar:false,  descripcion:'Validador personalizado (template driven)',               clasesCss:'bg-primary bg-opacity-50' },
    { mostrar:false,   descripcion:'Validación cross-field (template driven)',               clasesCss:'bg-primary bg-opacity-75 text-white' },
    { mostrar:false,   descripcion:'Validación asíncrona (template driven)',                 clasesCss:'bg-primary bg-gradient text-white' },
    { mostrar:true,   descripcion:'FormControl (reactive form)',                             clasesCss:'bg-success bg-opacity-25' },
    { mostrar:false,  descripcion:'FormGroup (reactive form)',                               clasesCss:'bg-success bg-opacity-10' },
    { mostrar:false,  descripcion:'Formulario sin validaciones (reactive form)',             clasesCss:'bg-success bg-opacity-50' },
    { mostrar:false,  descripcion:'FormBuilder (reactive form)',                             clasesCss:'bg-success text-white' },
    { mostrar:false,  descripcion:'Validaciones  (reactive form)',                           clasesCss:'bg-warning bg-opacity-25' },
    { mostrar:false,  descripcion:'Validación cross-field (reactive form)',                  clasesCss:'bg-warning bg-opacity-10' },
    { mostrar:false,  descripcion:'Validación asíncrona (reactive form)',                    clasesCss:'bg-warning bg-opacity-50' }
  ];

  activarDesactivarEjemplo(n:number):void{
    if(this.ejemplos[n].mostrar)
      this.ejemplos[n].mostrar = false;
    else
      this.ejemplos[n].mostrar = true;
  }

}
