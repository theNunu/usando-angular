import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Esto hace que el servicio esté disponible en toda la aplicación
})
export class ProductsService {
  private products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Mouse', price: 25 },
    { id: 3, name: 'Keyboard', price: 75 }
  ];

  constructor() { }

  // Método para obtener todos los productos
  getProducts() { // método público
    console.log(`desde el service, contenido de productos ${this.products}`)
    return this.products;

  }
}