import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TransporteService } from 'src/app/services/transporte.service';
import { Conductor, iConductor } from '../../models/Trabajadores/conductor'

@Component({
  selector: 'app-crear-conductores',
  templateUrl: './crear-conductores.component.html',
  styleUrls: ['./crear-conductores.component.css']
})
export class CrearConductoresComponent implements OnInit {

  conductorForm: FormGroup;
  titulo = 'Agregar conductor';
  DNI: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    public transporteService: TransporteService,
    private aRouter: ActivatedRoute
    ) {
    this.conductorForm = this.fb.group({
      DNI: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaNac: ['', Validators.required],
      salHora: ['', Validators.required],
      cargo: ['', Validators.required],
      licencias: ['', Validators.required],
      incidencias: ['', Validators.required],
      tipoT: ['', Validators.required]
    })
    this.DNI = this.aRouter.snapshot.paramMap.get('DNI');
  }

  ngOnInit(): void {
    this.editarConductor();
  }

 
  postConductor() {
    const Conductor: iConductor = {
      DNI: this.conductorForm.get('DNI')?.value,
      nombre: this.conductorForm.get('nombre')?.value,
      apellidos: this.conductorForm.get('apellidos')?.value,
      fechaNac: this.conductorForm.get('fechaNac')?.value,
      salHora: this.conductorForm.get('salHora')?.value,
      cargo: this.conductorForm.get('cargo')?.value,
      licencias: this.conductorForm.get('licencias')?.value,
      incidencias: this.conductorForm.get('incidencias')?.value,
      tipoT: this.conductorForm.get('tipoT')?.value,
    }

    if(this.DNI !== null){
      this.transporteService.updateConductor(this.DNI, Conductor).subscribe()
        this.toastr.info('El conductor fue actualizado correctamente');
        this.conductorForm.reset()
    } else {
      this.transporteService.postConductor(Conductor).subscribe()
      this.toastr.success('Añadido correctamente');
      this.conductorForm.reset()
    }

    }


    editarConductor() {
      if(this.DNI !== null) {
        this.titulo = 'Editar conductor';
        this.transporteService.getTrabajador(this.DNI).subscribe(data => {
          console.log(data);
          this.conductorForm.setValue({
            DNI: data.DNI,
            nombre: data.nombre,
            apellidos: data.apellidos,
            fechaNac: data.fechaNac,
            salHora: data.salHora,
            cargo: data.cargo,
            licencias: data.licencias,
            incidencias: data.incidencias,
            tipoT: data.tipoT,
          })
        })
      }
    }
}
