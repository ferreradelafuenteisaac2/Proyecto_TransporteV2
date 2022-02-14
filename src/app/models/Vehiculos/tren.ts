import { Vehiculo } from './vehiculo';
import { Trabajador } from '../Trabajadores/trabajador';

export class Tren extends Vehiculo {
  private _tipoTren: string;
  private _estaciones: Array<string>;
  constructor(
    matricula: string,
    numPlazas: number,
    fechaInicio: Date,
    pagoTarjeta: boolean,
    trabajadores: Array<Trabajador>,
    tipoTren: string,
    estaciones: Array<string>
  ) {
    super(matricula, numPlazas, fechaInicio, pagoTarjeta, trabajadores);
    this._tipoTren = tipoTren;
    this._estaciones = estaciones;
  }
  get tipoTren(): string {
    return this._tipoTren;
  }
  set tipoTren(tipoTren: string) {
    this._tipoTren = tipoTren;
  }

  get estaciones(): Array<string> {
    return this._estaciones;
  }
  set estaciones(estaciones: Array<string>) {
    this._estaciones = estaciones;
  
  }
}

export type iTren = {
  matricula: String | null,
  numPlazas: Number | null,
  fechaInicio: Date | null,
  pagoTarjeta: Boolean | null,
  trabajadores: Array<string> | null,
  tipoTren: String | null,
  estaciones: Array<string> | null,
  tipoT: String | null
}