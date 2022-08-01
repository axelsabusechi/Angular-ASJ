import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {Contacto} from "../../dominio/contacto";
import {FormBuilder, FormGroup, NgForm, Validator, Validators} from "@angular/forms";
import {validarEspacios} from "../../validaciones/espacios.validator";

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})


export class ContactoComponent implements OnInit {

  contacto: Contacto = new Contacto();
  formGroup: FormGroup;
  minimosCaracteres = 2;

  constructor(private formBuilder:FormBuilder) {

    this.formGroup = formBuilder.group({
      email:['', Validators.compose([
        Validators.required,
        Validators.minLength(this.minimosCaracteres),
        validarEspacios
      ])],
      consulta:''
    })}

  ngOnInit(): void {
    console.log('init de Fomrcomponent')
  }

  enviarFormulario(formTD: any){
    console.log(this.contacto);

    // limpiar inputs del formulario
    formTD.form.reset();

  }

  enviarFormRF() {
    console.log(this.formGroup);
    this.contacto.email = this.formGroup.value.email;
    this.contacto.consulta = this.formGroup.value.consulta;
    console.log("contacto: " + this.contacto.email);
    this.formGroup.reset();
  }
}
