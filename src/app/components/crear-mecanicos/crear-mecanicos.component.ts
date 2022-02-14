import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TransporteService } from 'src/app/services/transporte.service';
import { iMecanico } from '../../models/Trabajadores/mecanico'

@Component({
  selector: 'app-crear-mecanicos',
  templateUrl: './crear-mecanicos.component.html',
  styleUrls: ['./crear-mecanicos.component.css']
})
export class CrearMecanicosComponent implements OnInit {

  mecanicoForm: FormGroup;
  titulo = 'Agregar mecanico';
  DNI: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    public transporteService: TransporteService,
    private aRouter: ActivatedRoute
    ) {
    this.mecanicoForm = this.fb.group({
      DNI: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaNac: ['', Validators.required],
      salHora: ['', Validators.required],
      cargo: ['', Validators.required],
      especialidad: ['', Validators.required],
      ubicacion: ['', Validators.required],
      tipoT: ['', Validators.required],
    })
    this.DNI = this.aRouter.snapshot.paramMap.get('DNI');
  }

  ngOnInit(): void {
    this.editarMecanico();
  }

 
  postMecanico() {
    const Mecanico: iMecanico = {
      DNI: this.mecanicoForm.get('DNI')?.value,
      nombre: this.mecanicoForm.get('nombre')?.value,
      apellidos: this.mecanicoForm.get('apellidos')?.value,
      fechaNac: this.mecanicoForm.get('fechaNac')?.value,
      salHora: this.mecanicoForm.get('salHora')?.value,
      cargo: this.mecanicoForm.get('cargo')?.value,
      especialidad: this.mecanicoForm.get('especialidad')?.value,
      ubicacion: this.mecanicoForm.get('ubicacion')?.value,
      tipoT: this.mecanicoForm.get('tipoT')?.value,
    }

    if(this.DNI !== null){
      this.transporteService.updateMecanico(this.DNI, Mecanico).subscribe()
        this.toastr.info('El mecanico fue actualizado correctamente');
        this.mecanicoForm.reset()
    } else {
      this.transporteService.postMecanico(Mecanico).subscribe()
      this.toastr.success('Añadido correctamente');
      this.mecanicoForm.reset()
    }

    }


    editarMecanico() {
      if(this.DNI !== null) {
        this.titulo = 'Editar mecanico';
        this.transporteService.getTrabajador(this.DNI).subscribe(data => {
          console.log(data);
          this.mecanicoForm.setValue({
            DNI: data.DNI,
            nombre: data.nombre,
            apellidos: data.apellidos,
            fechaNac: data.fechaNac,
            salHora: data.salHora,
            cargo: data.cargo,
            especialidad: data.especialidad,
            ubicacion: data.ubicacion,
            tipoT: data.tipoT,
          })
        })
      }
    }
}
