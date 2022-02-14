import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Mecanico } from '../../models/Trabajadores/mecanico';
import { TransporteService } from '../../services/transporte.service';

@Component({
  selector: 'app-listar-mecanicos',
  templateUrl: './listar-mecanicos.component.html',
  styleUrls: ['./listar-mecanicos.component.css']
})
export class ListarMecanicosComponent implements OnInit {

  listMecanicos: Mecanico[] = [];
  sueldoB: any;
  constructor(private TransporteService: TransporteService,
              private toastr: ToastrService
    ) {}
 
  ObtenerMecanicos() {
    this.TransporteService.getMecanicos().subscribe((data) => {
      this.listMecanicos = data;
    });
  }

    deleteMecanico(DNI: any) {
      this.TransporteService.deleteTrabajador(DNI).subscribe(data => {
        this.toastr.error('El mecanico fue eliminado correctamente')
        this.ObtenerMecanicos();
      })
    }




  ngOnInit(): void {
    this.ObtenerMecanicos();
  }
}
