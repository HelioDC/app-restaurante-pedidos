import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.scss']
})
export class ArticuloComponent implements OnInit{
  ngOnInit(): void {
    this.headerService.titulo.set("Articulo");
  }

  constructor(private headerService: HeaderService){}

}
