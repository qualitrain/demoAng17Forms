import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormTemplDriven01Component } from './form-templ-driven01/form-templ-driven01.component';
import { FormTemplDriven02Component } from './form-templ-driven02/form-templ-driven02.component';

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
    FormTemplDriven02Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demoAng17Forms';
  ejemplos:Ejemplo[] = [
    { mostrar:false,   descripcion:'Formulario con Validación manual (template driven)',      clasesCss:'bg-primary bg-opacity-25' },
    { mostrar:false,   descripcion:'Formulario con Validación incorporada (template driven)', clasesCss:'bg-primary bg-opacity-10' },
    { mostrar:true,  descripcion:'Validador personalizado (template driven)',                 clasesCss:'bg-primary bg-opacity-50' },
    { mostrar:false,  descripcion:'Validación cross-field (template driven)',                 clasesCss:'bg-primary text-white' },
    { mostrar:false,  descripcion:'FormControl (reactive form)',                              clasesCss:'bg-success bg-opacity-25' },
    { mostrar:false,  descripcion:'FormGroup (reactive form)',                                clasesCss:'bg-success bg-opacity-10' },
    { mostrar:false,  descripcion:'Formulario sin validaciones (reactive form)',              clasesCss:'bg-success bg-opacity-50' },
    { mostrar:false,  descripcion:'FormBuilder (reactive form)',                              clasesCss:'bg-success text-white' },
    { mostrar:false,  descripcion:'Validaciones  (reactive form)',                            clasesCss:'bg-warning bg-opacity-25' },
    { mostrar:false,  descripcion:'Validación cross-field (reactive form)',                   clasesCss:'bg-warning bg-opacity-10' },
    { mostrar:false,  descripcion:'Validación asíncrona (reactive form)',                     clasesCss:'bg-warning bg-opacity-50' }
  ];

  activarDesactivarEjemplo(n:number):void{
    if(this.ejemplos[n].mostrar)
      this.ejemplos[n].mostrar = false;
    else
      this.ejemplos[n].mostrar = true;
  }

}
