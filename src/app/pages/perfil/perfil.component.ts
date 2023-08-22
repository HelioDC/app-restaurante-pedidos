import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit{
  ngOnInit(): void {
    this.headerService.titulo.set("Perfil");
  }
  constructor( private headerService: HeaderService){}
}
