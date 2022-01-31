import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../../models/empleado';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ],
})
export class AddEditEmpleadoComponent implements OnInit {
  estadosCiviles: any[] = ['Soltero', 'Casado', 'Divorciado'];
  idEmpleado: any;
  accion: string = 'Crear';

  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private router: Router,
    private snackBar: MatSnackBar,
    private aRoute: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.maxLength(20)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaIngreso: ['', Validators.required],
      telefono: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      sexo: ['', Validators.required],
    });

    this.idEmpleado = aRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.idEmpleado !== undefined) {
      this.accion = 'Editar';
      this.esEditar();
    }
  }

  validarCampo(campo: string) {
    return (
      this.myForm.get(campo)?.hasError('required') &&
      this.myForm.get(campo)?.touched
    );
  }

  validarTipoValidacion(campo: string) {
    return (
      this.myForm.get(campo)?.hasError('maxlength') &&
      this.myForm.get(campo)?.touched
    );
  }

  guardarEmpleado() {
    const empleado: Empleado = {
      //capturo los datos del formulario
      nombreCompleto: this.myForm.get('nombreCompleto')?.value,
      correo: this.myForm.get('correo')?.value,
      fechaIngreso: this.myForm.get('fechaIngreso')?.value,
      telefono: this.myForm.get('telefono')?.value,
      estadoCivil: this.myForm.get('estadoCivil')?.value,
      sexo: this.myForm.get('sexo')?.value,
    };

    if (this.idEmpleado !== undefined) {
      this.editarEmpleado(empleado);
    } else {
      this.agregarEmpleado(empleado);
    }
  }

  agregarEmpleado(empleado: Empleado) {
    this.empleadoService.agregarEmpleado(empleado);
    this.snackBar.open('El empleado fue eliminado con exito', '', {
      duration: 3000,
    });
    this.router.navigate(['/']);
  }

  editarEmpleado(empleado: Empleado) {
    this.empleadoService.editEmpledo(empleado, this.idEmpleado);
    this.snackBar.open('El empleado fue actualizado con exito', '', {
      duration: 3000,
    });
    this.router.navigate(['/']);
  }

  esEditar() {
    const empleado: Empleado = this.empleadoService.getEmpleado(
      this.idEmpleado
    );

    console.log(empleado);

    // para que carge los datos en el formulario al momento de editar
    this.myForm.patchValue({
      nombreCompleto: empleado.nombreCompleto,
      correo: empleado.correo,
      fechaIngreso: empleado.fechaIngreso,
      telefono: empleado.telefono,
      estadoCivil: empleado.estadoCivil,
      sexo: empleado.sexo,
    });
  }
}
