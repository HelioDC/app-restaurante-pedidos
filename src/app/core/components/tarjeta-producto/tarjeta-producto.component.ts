import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Categoria } from '../../interfaces/categoria';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.scss'],
  standalone:true,
  imports: [CommonModule],
})
export class TarjetaProductoComponent {
  @Input({required:true}) producto!:Producto;
}
