import { Component, effect, signal } from '@angular/core';
import { HeaderService } from '../../services/header.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor( protected headerService: HeaderService){}

  claseAplicada = signal("");
  tituloMostrado = signal("");

  esconderTitulo = effect(() => {
    if(this.headerService.titulo()){
      this.claseAplicada.set("fade-out");   
    }
  },{allowSignalWrites: true})

  mostrarTituloNuevo(e: AnimationEvent){
    this.tituloMostrado.set(this.headerService.titulo());
    if(e.animationName.includes("fade-out")){
      this.claseAplicada.set("fade-in");
      setTimeout(() => this.claseAplicada.set("") , 250)
    }
  }


}
