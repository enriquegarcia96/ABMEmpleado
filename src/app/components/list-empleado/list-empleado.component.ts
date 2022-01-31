import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { MatDialog } from '@angular/material/dialog';
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-empleado',
  templateUrl: './list-empleado.component.html',
  styleUrls: ['./list-empleado.component.css'],
})
export class ListEmpleadoComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = [
    'NombreCompleto',
    'Correo',
    'EstadoCivil',
    'FechadeIngreso',
    'Sexo',
    'Telefono',
    'Acciones',
  ];
  dataSource = new MatTableDataSource<Empleado>();
  listEmpleado!: Empleado[];

  // para hacer una referencia  aun componente hijo
  // en este caso el map-paginator
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private empleadoService: EmpleadoService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  ngAfterViewInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarEmpleados() {
    this.listEmpleado = this.empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource<Empleado>(this.listEmpleado);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  eleminarEmpleado(index: number) {
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: { mensaje: '¿ Esta seguro que desa eliminar el Empleado ?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result === 'aceptar') {
        this.empleadoService.eliminarEmpleado(index);

        // para que recarge la grilla o sea la lista
        this.cargarEmpleados();
        this.snackBar.open('El empleado fue eliminado con exito', '', {
          duration: 3000
        })
      }
    });
  }
}
