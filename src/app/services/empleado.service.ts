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
      sexo: 'Femenino',
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
      sexo: 'Femenino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'Greisy Najera',
      correo: 'grey@gmail.com',
      telefono: 9037723,
      sexo: 'Femenino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero',
    },
    {
      nombreCompleto: 'Shelsea',
      correo: 'shell@gmail.com',
      telefono: 93812,
      sexo: 'Femenino',
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

  agregarEmpleado(empleado: Empleado){
    this.listEmpleado.unshift(empleado)
  }

  getEmpleado(index: number){
    return this.listEmpleado[index];
  }


  editEmpledo(empleado: Empleado, idEmpleado: number){
    this.listEmpleado[idEmpleado].nombreCompleto = empleado.nombreCompleto;
    this.listEmpleado[idEmpleado].correo = empleado.correo;
    this.listEmpleado[idEmpleado].telefono = empleado.telefono;
    this.listEmpleado[idEmpleado].sexo = empleado.sexo;
    this.listEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso;
    this.listEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil

  }
}
