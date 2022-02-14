import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TransporteService } from 'src/app/services/transporte.service';
import { iAutobus } from '../../models/Vehiculos/autobus'

@Component({
  selector: 'app-crear-autobuses',
  templateUrl: './crear-autobuses.component.html',
  styleUrls: ['./crear-autobuses.component.css']
})
export class CrearAutobusesComponent implements OnInit {
    autobusForm: FormGroup;
    titulo = 'Agregar autobus';
    matricula: string | null;
  
    constructor(
      private fb: FormBuilder,
      private router: Router,
      private toastr: ToastrService,
      public transporteService: TransporteService,
      private aRouter: ActivatedRoute
      ) {
      this.autobusForm = this.fb.group({
        matricula: ['', Validators.required],
        numPlazas: ['', Validators.required],
        fechaInicio: ['', Validators.required],
        pagoTarjeta: ['', Validators.required],
        trabajadores: ['', Validators.required],
        bano: ['', Validators.required],
        numPlantas: ['', Validators.required],
        tipoT: ['', Validators.required],
      })
      this.matricula = this.aRouter.snapshot.paramMap.get('matricula');
    }
  
    ngOnInit(): void {
      this.editarAutobus();
    }
  
   
    postAutobus() {
      const Autobus: iAutobus = {
        matricula: this.autobusForm.get('matricula')?.value,
        numPlazas: this.autobusForm.get('numPlazas')?.value,
        fechaInicio: this.autobusForm.get('fechaInicio')?.value,
        pagoTarjeta: this.autobusForm.get('pagoTarjeta')?.value,
        trabajadores: this.autobusForm.get('trabajadores')?.value,
        bano: this.autobusForm.get('bano')?.value,
        numPlantas: this.autobusForm.get('numPlantas')?.value,
        tipoT: this.autobusForm.get('tipoT')?.value,
      }
  
      if(this.matricula !== null){
        this.transporteService.updateAutobus(this.matricula, Autobus).subscribe()
          this.toastr.info('El autobus fue actualizado correctamente');
          this.autobusForm.reset()
      } else {
        this.transporteService.postAutobus(Autobus).subscribe()
        this.toastr.success('Añadido correctamente');
        this.autobusForm.reset()
      }
  
      }
  
  
      editarAutobus() {
        if(this.matricula !== null) {
          this.titulo = 'Editar autobus';
          this.transporteService.getVehiculo(this.matricula).subscribe(data => {
            console.log(data);
            this.autobusForm.setValue({
              matricula: data.matricula,
              numPlazas: data.numPlazas,
              fechaInicio: data.fechaInicio,
              pagoTarjeta: data.pagoTarjeta,
              trabajadores: data.trabajadores,
              bano: data.bano,
              numPlantas: data.numPlantas,
              tipoT: data.tipoT,
            })
          })
        }
      }

}
