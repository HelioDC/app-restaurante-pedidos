import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  async getByCategoria(id:number): Promise<Producto[]>{
    const res = await fetch("./../../../assets/data/database.json");
    const resJson:Categoria[] = await res.json();
    const productos =resJson.find(categoria => categoria.id === id)?.productos;
    return productos ? productos : [];
  }
}
