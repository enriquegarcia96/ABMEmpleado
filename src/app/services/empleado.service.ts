import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  listEmpleado: Empleado[] = [
    {
      nombreCompleto: 'Enrique García',
      correo: 'es_romero@gmail.com',
      telefono: 34518822,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'Diana Gonzales',
      correo: 'dinaRivere@gmail.com',
      telefono: 99238822,
      sexo: 'Femenina',
      fechaIngreso: new Date(),
      estadoCivil: 'Casada',
    },
    {
      nombreCompleto: 'Omar Lopez',
      correo: 'omar@gmail.com',
      telefono: 788222,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'Doris Caseres',
      correo: 'doris@gmail.com',
      telefono: 3939122,
      sexo: 'Femenina',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltera',
    },
    {
      nombreCompleto: 'Greisy Najera',
      correo: 'grey@gmail.com',
      telefono: 9037723,
      sexo: 'Femenina',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltera',
    },
    {
      nombreCompleto: 'Shelsea',
      correo: 'shell@gmail.com',
      telefono: 93812,
      sexo: 'Femenina',
      fechaIngreso: new Date(),
      estadoCivil: 'Casada',
    },
  ];

  constructor() {}

  getEmpleados() {
    return this.listEmpleado.slice();
  }

  eliminarEmpleado(index: number) {
    this.listEmpleado.splice(index, 1);
  }
}
