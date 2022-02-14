import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Tren } from '../../models/Vehiculos/tren';
import { TransporteService } from '../../services/transporte.service';

@Component({
  selector: 'app-listar-trenes',
  templateUrl: './listar-trenes.component.html',
  styleUrls: ['./listar-trenes.component.css']
})
export class ListarTrenesComponent implements OnInit {

  listTrenes: Tren[] = [];
  constructor(private TransporteService: TransporteService,
              private toastr: ToastrService
    ) {}
 
  ObtenerTrenes() {
    this.TransporteService.getTrenes().subscribe((data) => {
      this.listTrenes = data;
    });
  }

    deleteTren(matricula: any) {
      this.TransporteService.deleteVehiculo(matricula).subscribe(data => {
        this.toastr.error('El tren fue eliminado correctamente')
        this.ObtenerTrenes();
      })
    }




  ngOnInit(): void {
    this.ObtenerTrenes();
  }

}
