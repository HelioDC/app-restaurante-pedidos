import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TarjetaCategoriaComponent } from 'src/app/core/components/tarjeta-categoria/tarjeta-categoria.component';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CategoriasService } from 'src/app/core/services/categorias.service';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [TarjetaCategoriaComponent, CommonModule, RouterModule]
})
export class HomeComponent implements OnInit,OnDestroy {
 
  categorias: Categoria[] = [];
 
  ngOnInit(): void {
    this.headerService.titulo.set("Home");
    this.headerService.extendido.set(true);
    this.categoriasService.getAll().then(res => this.categorias = res);
  }

  ngOnDestroy(): void {
    this.headerService.extendido.set(false);
  }
  
  constructor(private headerService: HeaderService,
     private categoriasService: CategoriasService ){}
}
