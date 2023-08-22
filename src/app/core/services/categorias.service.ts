import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor() { }

  // Obtiene todas las categorías desde el archivo database.json
  async getAll():Promise<Categoria[]>{
   const res = await fetch("./../../../assets/data/database.json");
   const resJson = await res.json();
   return resJson;
  }
}
