import { Trabajador } from '../Trabajadores/trabajador';

export class Vehiculo {
  protected _matricula: string;
  protected _numPlazas: number;
  protected _fechaInicio: Date;
  protected _pagoTarjeta: boolean;
  protected _trabajadores: Array<Trabajador>;

  constructor(
    matricula: string,
    numPlazas: number,
    fechaInicio: Date,
    pagoTarjeta: boolean,
    trabajadores: Array<Trabajador>
  ) {
    this._matricula = matricula;
    this._numPlazas = numPlazas;
    this._fechaInicio = fechaInicio;
    this._pagoTarjeta = pagoTarjeta;
    this._trabajadores = new Array<Trabajador>();
  }
  get matricula(): string {
    return this._matricula;
  }
  public get numPlazas(): number {
    return this._numPlazas;
  }
  public get fechaInicio(): Date {
    return this._fechaInicio;
  }
  public get pagoTarjeta(): boolean {
    return this._pagoTarjeta;
  }
  public get trabajadores(): Array<Trabajador> {
    return this._trabajadores;
  }
}