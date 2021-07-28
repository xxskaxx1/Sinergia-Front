import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from '../../interface/persona';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  submit: any;
  persona: { nit: string;nombre: string;consecutivo: number;estado: string;cod_personal: number;cantidad_personal: number;categoria: string; presupuesto: string };
  formConsulta!: FormGroup;

  constructor(private personaService: PersonaService, private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
  }
  buscar(){
    this.personaService.getPersona(this.formConsulta.value.consecutivo).subscribe((response: Persona[]) => {
      if(response.length == 0){
        Swal.fire('No se encontraron coincidencias', '', 'error');
      }else{
        console.log(response);
        this.persona = {
          nit: response['nit'],
          nombre: response['nombre'],
          consecutivo: response['consecutivo'],
          estado: response['estado'],
          cod_personal: response['cod_personal'],
          cantidad_personal: response['cantidad_personal'],
          categoria: response['categoria'],
          presupuesto: response['presupuesto'],
        }
      }
    },error => {
      Swal.fire('No se encontraron coincidencias', '', 'error');
    });
  }
  private initForm(): void {
    this.formConsulta = this.fb.group({
      consecutivo: ['']
    })
  }
}
