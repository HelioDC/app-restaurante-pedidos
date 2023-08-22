import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarjetaProductoComponent } from 'src/app/core/components/tarjeta-producto/tarjeta-producto.component';
import { Producto } from 'src/app/core/interfaces/producto';
import { HeaderService } from 'src/app/core/services/header.service';
import { ProductosService } from 'src/app/core/services/productos.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss'],
  standalone:true,
  imports:[TarjetaProductoComponent, CommonModule]
})
export class CartaComponent implements OnInit {

  productos: Producto[] = [];
  ngOnInit(): void {
    this.headerService.titulo.set("Carta");
    //this.productosService.getByCategoria();
    this.activatedRoute.params.subscribe(params => {
      if(params['id']) {
        this.productosService.getByCategoria(parseInt(params['id']))
        .then(productos => this.productos = productos)
      }

    })
  }

  constructor(
      private headerService: HeaderService,
      private productosService: ProductosService,
      private activatedRoute: ActivatedRoute,
    ){}

}
