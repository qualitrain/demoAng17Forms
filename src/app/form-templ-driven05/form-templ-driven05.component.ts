import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ValidatorTelsEqDirective } from '../validator-tels-eq.directive';
import { DatosTelService } from '../datos-tel.service';
import { ValidatorAsyncDirective } from '../validator-async.directive';


@Component({
  selector: 'app-form-templ-driven05',
  standalone: true,
  imports: [
    FormsModule,
    ValidatorTelsEqDirective,
    ValidatorAsyncDirective
  ],
  templateUrl: './form-templ-driven05.component.html',
  styleUrl: './form-templ-driven05.component.css'
})
export class FormTemplDriven05Component implements AfterViewInit{
  @ViewChild("spyTel")
  refTelefono1:ElementRef|null=null;

  clasesTel1:string="";

  //Encender o apagar para que salga una explicacion del demo en la vista
  explicacionOn:boolean = false;
  //Encender o apagar para monitorear comportamiento del formulario
  depuracionOn:boolean=true;

  //objeto-modelo
  telefonos = {
    tel1:"",
    tel2:""
  }

  telefonosRegistrados:string[]=[];

  constructor(private provDatos:DatosTelService) { 
    provDatos.telefonos.forEach(rTel=>this.telefonosRegistrados.push(rTel.tel1 + ", " + rTel.tel2));
  }

  ngAfterViewInit(): void {
    setTimeout( ()=>this.clasesTel1 = (this.refTelefono1?.nativeElement as HTMLInputElement).className, 0);
  }

  insertarTelefonos(formulario:NgForm){
    this.telefonosRegistrados.push(this.telefonos.tel1 + ", " + this.telefonos.tel2);
    this.provDatos.agregarTelefono(this.telefonos.tel1,this.telefonos.tel2);
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
