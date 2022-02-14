import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TransporteService } from 'src/app/services/transporte.service';
import { iTren } from '../../models/Vehiculos/tren'

@Component({
  selector: 'app-crear-trenes',
  templateUrl: './crear-trenes.component.html',
  styleUrls: ['./crear-trenes.component.css']
})

export class CrearTrenesComponent implements OnInit {
  trenForm: FormGroup;
  titulo = 'Agregar tren';
  matricula: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    public transporteService: TransporteService,
    private aRouter: ActivatedRoute
    ) {
    this.trenForm = this.fb.group({
      matricula: ['', Validators.required],
      numPlazas: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      pagoTarjeta: ['', Validators.required],
      trabajadores: ['', Validators.required],
      tipoTren: ['', Validators.required],
      estaciones: ['', Validators.required],
      tipoT: ['', Validators.required],
    })
    this.matricula = this.aRouter.snapshot.paramMap.get('matricula');
  }

  ngOnInit(): void {
    this.editarTren();
  }

 
  postTren() {
    const Tren: iTren = {
      matricula: this.trenForm.get('matricula')?.value,
      numPlazas: this.trenForm.get('numPlazas')?.value,
      fechaInicio: this.trenForm.get('fechaInicio')?.value,
      pagoTarjeta: this.trenForm.get('pagoTarjeta')?.value,
      trabajadores: this.trenForm.get('trabajadores')?.value,
      tipoTren: this.trenForm.get('tipoTren')?.value,
      estaciones: this.trenForm.get('estaciones')?.value,
      tipoT: this.trenForm.get('tipoT')?.value,
    }

    if(this.matricula !== null){
      this.transporteService.updateTren(this.matricula, Tren).subscribe()
        this.toastr.info('El tren fue actualizado correctamente');
        this.trenForm.reset()
    } else {
      this.transporteService.postTren(Tren).subscribe()
      this.toastr.success('Añadido correctamente');
      this.trenForm.reset()
    }

    }


    editarTren() {
      if(this.matricula !== null) {
        this.titulo = 'Editar tren';
        this.transporteService.getVehiculo(this.matricula).subscribe(data => {
          console.log(data);
          this.trenForm.setValue({
            matricula: data.matricula,
            numPlazas: data.numPlazas,
            fechaInicio: data.fechaInicio,
            pagoTarjeta: data.pagoTarjeta,
            trabajadores: data.trabajadores,
            tipoTren: data.tipoTren,
            estaciones: data.estaciones,
            tipoT: data.tipoT,
          })
        })
      }
    }
  }


