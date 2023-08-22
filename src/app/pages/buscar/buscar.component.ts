import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit{
  ngOnInit(): void {
    this.headerService.titulo.set("Buscar");
  }

  constructor(private headerService: HeaderService){}

}
