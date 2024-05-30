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
    { mostrar:true,   descripcion:'Formulario con Validación manual (template driven)',      clasesCss:'bg-primary bg-opacity-25' },
    { mostrar:true,   descripcion:'Formulario con Validación incorporada (template driven)', clasesCss:'bg-primary bg-opacity-10' },
    { mostrar:false,  descripcion:'FormControl',                                             clasesCss:'bg-info bg-opacity-25' },
    { mostrar:false,  descripcion:'FormGroup',                                               clasesCss:'bg-primary bg-opacity-25' },
    { mostrar:false,  descripcion:'Formulario reactivo, sin validaciones',                   clasesCss:'bg-secondar bg-opacity-25y' },
    { mostrar:false,  descripcion:'FormBuilder',                                             clasesCss:'bg-danger bg-opacity-25' },
    { mostrar:false,  descripcion:'Validaciones formulario reactivo',                        clasesCss:'bg-secondary text-white' },
    { mostrar:false,  descripcion:'Validador personalizado en driven template',              clasesCss:'bg-info text-white' },
    { mostrar:false,  descripcion:'Validación cross-field en reactive form',                 clasesCss:'bg-success text-white' },
    { mostrar:false,  descripcion:'Validación cross-field en template driven',               clasesCss:'bg-warning ' },
    { mostrar:false,  descripcion:'Validación asíncrona en reactive form',                   clasesCss:'bg-danger text-white' }
  ];

  activarDesactivarEjemplo(n:number):void{
    if(this.ejemplos[n].mostrar)
      this.ejemplos[n].mostrar = false;
    else
      this.ejemplos[n].mostrar = true;
  }

}
