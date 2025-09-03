import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: "seecond-thing",
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: "./second-thing.component.html"
})


export class SecondThing implements OnInit {
    public form!: FormGroup
    private MAX_LENGHT_PASSWORD = 8

    constructor(private _fb: FormBuilder) {

    }

    ngOnInit(): void {
        this.form = this.createForm();
    }

    createForm(): FormGroup {
        return this._fb.group({
            username: ['', [Validators.required, Validators.maxLength(this.MAX_LENGHT_PASSWORD)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.maxLength(this.MAX_LENGHT_PASSWORD)]],
        })
    }

    sendForm() {
        if (this.form.valid) {
            const formValue = this.form.getRawValue();
            console.log("✅ Formulario válido:", formValue);
            // Aquí puedes hacer el submit al backend (ej. servicio HTTP)
        } else {
            console.log("❌ Formulario inválido");
            this.form.markAllAsTouched(); // Marca todos los campos para mostrar errores
        }
    }


}