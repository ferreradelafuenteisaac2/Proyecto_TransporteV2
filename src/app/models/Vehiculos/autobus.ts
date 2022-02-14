import { Vehiculo } from './vehiculo';
import { Trabajador } from '../Trabajadores/trabajador';

export class Autobus extends Vehiculo {
  private _tipoBus: string;
  private _bano: boolean;
  private _numPlantas: number;
  constructor(
    matricula: string,
    numPlazas: number,
    fechaInicio: Date,
    pagoTarjeta: boolean,
    trabajadores: Array<Trabajador>,
    tipoBus: string,
    bano: boolean,
    numPlantas: number
  ) {
    super(matricula, numPlazas, fechaInicio, pagoTarjeta, trabajadores);
    this._tipoBus = tipoBus;
    this._bano = bano;
    this._numPlantas = numPlantas;
  }
  get tipoBus(): string {
    return this._tipoBus;
  }
  set tipoBus(tipoBus: string) {
    this._tipoBus = tipoBus;
  }

  get bano(): boolean {
    return this._bano;
  }
  set bano(bano: boolean) {
    this._bano = bano;
  }

  get numPlantas(): number {
    return this._numPlantas;
  }
  set numPlantas(numPlantas: number) {
    this._numPlantas = numPlantas;
  }
}


export type iAutobus = {
  matricula: String | null,
  numPlazas: Number | null,
  fechaInicio: Date | null,
  pagoTarjeta: Boolean | null,
  trabajadores: Array<string> | null,
  bano: Boolean | null,
  numPlantas: Number | null,
  tipoT: String | null
}
