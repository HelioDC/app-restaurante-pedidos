import { Component } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
  ngOnInit(): void {
    this.headerService.titulo.set("Carrito");
  }

  constructor(private headerService: HeaderService){}
}
