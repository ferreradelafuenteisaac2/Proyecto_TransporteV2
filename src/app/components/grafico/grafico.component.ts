import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { TransporteService } from 'src/app/services/transporte.service';
import { Trabajador } from 'src/app/models/Trabajadores/trabajador';
import { Mecanico } from 'src/app/models/Trabajadores/mecanico';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: any = {
    chart:
    {
      backgroundColor: {
        linearGradient: [500, 500, 500, 500],
        stops: [
          [0, 'rgb(255, 255, 255)'],
        ]
      },
      type: 'column'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: []
    },
    credits: {
      enabled: false
    },
    series: [{
      name: '',
      data: []
    }]
  };


  constructor(private _transporteService: TransporteService) { }
  listMecanicos: Mecanico[] = [];
  ngOnInit(): void {
    this.getSalario()
  }

  //SeriesOptionsType
  getSalario() {
    this._transporteService.getMecanicos()
    .subscribe(
      (result: any) => {
        this.listMecanicos = result.map((mecanico: any) => {
          return new Mecanico(mecanico.DNI, mecanico.nombre, mecanico.apellidos, mecanico.fechaNac, mecanico.salHora, mecanico.cargo, mecanico.especialidad, mecanico.ubicacion);
        });
        console.log(this.listMecanicos)

// Creamos los objetos y usamos un método para representar el valor devuelto
        const dataSeries = this.listMecanicos.map((x: Mecanico) => x.DNI);
        const dataCategorias = this.listMecanicos.map((x: Mecanico) => x.salHora);
        if(dataSeries!=undefined && dataCategorias !=undefined && this.chartOptions.series!=undefined && this.chartOptions.xAxis!=undefined) {
        this.chartOptions.series[0]["data"] = dataCategorias;
        this.chartOptions.xAxis["categories"] = dataSeries;
        console.log(this.chartOptions.series[0]["data"])
        console.log(this.chartOptions.xAxis["categories"])
        this.chartOptions.title["text"] = "DNI";
        this.chartOptions.series["name"] = "SALARIO HORA"
        Highcharts.chart("miGrafico01", this.chartOptions);
        }
      },
      error => console.log(error)
    );
  }
}
