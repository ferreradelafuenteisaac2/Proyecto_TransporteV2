import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Conductor } from '../../models/Trabajadores/conductor';
import { TransporteService } from '../../services/transporte.service';

@Component({
  selector: 'app-listar-conductores',
  templateUrl: './listar-conductores.component.html',
  styleUrls: ['./listar-conductores.component.css']
})
export class ListarConductoresComponent implements OnInit {

  listConductores: Conductor[] = [];
  constructor(private TransporteService: TransporteService,
              private toastr: ToastrService
    ) {}
 
  ObtenerConductores() {
    this.TransporteService.getConductores().subscribe((data) => {
      this.listConductores = data;
    });
  }

    deleteConductor(DNI: any) {
      this.TransporteService.deleteTrabajador(DNI).subscribe(data => {
        this.toastr.error('El conductor fue eliminado correctamente')
        this.ObtenerConductores();
      })
    }

    



  ngOnInit(): void {
    this.ObtenerConductores();
  }
  
}



