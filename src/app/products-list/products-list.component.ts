import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  imports: [CommonModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css'
})
export class ProductsList {
  products: any[] = []; // 3. Propiedad para guardar los productos

  // 2. Inyecta el servicio en el constructor
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void { //que se ejecuta al inicializar el componente
    // 4. Llama al método del servicio para obtener los datos
    this.products = this.productsService.getProducts();
  }

  myHeroes = [
    {id: 5, name: "alexis", apellido: "cepeda"},
    {id: 6, name: "walter", apellido: "white"},
    {id: 7, name: "lalo", apellido: "salamanca"}
  ]

}
