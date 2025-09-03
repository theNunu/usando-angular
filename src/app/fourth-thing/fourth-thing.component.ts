import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-fourth-thing',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './fourth-thing.html',
  styleUrl: './fourth-thing.css'
})
export class FourthThing {

  profileForm = new FormGroup({
    nombreProducto: new FormControl(''),
    precioProducto: new FormControl(''),
  });

  handleSubmit() {
    alert(
      this.profileForm.value.nombreProducto + ' | ' + this.profileForm.value.precioProducto
    );

    console.log(` nombre del producto: ${this.profileForm.value.nombreProducto} |
    precio del producto: ${this.profileForm.value.precioProducto}`)
  }

  myProfileForm = new FormGroup({
  nameUser: new FormControl('', Validators.required),
  lastNameUser: new FormControl(''),
  emailUser: new FormControl('', [Validators.required, Validators.email]),
});

}
