import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ValidatorTelsEqDirective } from '../validator-tels-eq.directive';

@Component({
  selector: 'app-form-templ-driven04',
  standalone: true,
  imports: [
    FormsModule,
    ValidatorTelsEqDirective
  ],
  templateUrl: './form-templ-driven04.component.html',
  styleUrl: './form-templ-driven04.component.css'
})
export class FormTemplDriven04Component implements AfterViewInit{
  @ViewChild("spyTel")
  refTelefono1:ElementRef|null=null;

  clasesTel1:string="";

  //Encender o apagar para que salga una explicacion del demo en la vista
  explicacionOn:boolean = false;
  //Encender o apagar para monitorear comportamiento del formulario
  depuracionOn:boolean=false;

  //objeto-modelo
  telefonos = {
    tel1:"",
    tel2:""
  }

  telefonosRegistrados:string[]=[];

  constructor() { 
  }
  ngAfterViewInit(): void {
    setTimeout( ()=>this.clasesTel1 = (this.refTelefono1?.nativeElement as HTMLInputElement).className, 0);
  }

  insertarTelefonos(formulario:NgForm){
    console.log(formulario.value);
    // let telefono1 = formulario.form.get('tel1')?.getRawValue() as string;
    // let telefono2 = formulario.form.get('tel2')?.getRawValue() as string;
    this.telefonosRegistrados.push(this.telefonos.tel1 + ", " + this.telefonos.tel2);
    formulario.reset();
  }

  getNvosEstilos(estilos: string) {
    return estilos.replace('form-control text-center','');
  }
    
  prenderApagarExplicacion(){
    if(this.explicacionOn)
      this.explicacionOn = false;
    else
      this.explicacionOn = true;
  }
  
  prenderApagarDepuracion(){
    if(this.depuracionOn)
      this.depuracionOn = false;
    else
      this.depuracionOn = true;
  }

}
