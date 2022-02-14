import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Autobus } from '../../models/Vehiculos/autobus';
import { TransporteService } from '../../services/transporte.service';

@Component({
  selector: 'app-listar-autobuses',
  templateUrl: './listar-autobuses.component.html',
  styleUrls: ['./listar-autobuses.component.css']
})
export class ListarAutobusesComponent implements OnInit {

  listAutobuses: Autobus[] = [];
  constructor(private TransporteService: TransporteService,
              private toastr: ToastrService
    ) {}
 
  ObtenerAutobus() {
    this.TransporteService.getAutobus().subscribe((data) => {
      this.listAutobuses= data;
    });
  }

    deleteAutobus(matricula: any) {
      this.TransporteService.deleteVehiculo(matricula).subscribe(data => {
        this.toastr.error('El autobus fue eliminado correctamente')
        this.ObtenerAutobus();
      })
    }




  ngOnInit(): void {
    this.ObtenerAutobus();
  }
}
