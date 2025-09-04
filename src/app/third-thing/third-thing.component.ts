import { Component, inject } from '@angular/core';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-third-thing',
  imports: [],
  templateUrl: './third-thing.html',
  styleUrl: './third-thing.css'
})

@Injectable({
  providedIn: 'root'
})


export class ThirdThing {

  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];


  getCars(): string[] {
    console.log(`contenido de cars: ${this.cars}`)
    return this.cars;
  
  }

  getCar(id: number) {
    console.log(`contenido de un car: ${this.cars[id]}`)
    return this.cars[id];
  }



}
