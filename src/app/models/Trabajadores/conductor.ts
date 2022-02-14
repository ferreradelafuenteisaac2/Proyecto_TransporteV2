import { Trabajador } from './trabajador';

export class Conductor extends Trabajador {
  private _licencias: Array<string>;
  private _incidencias: Array<string>;
  constructor(
    DNI: string,
    nombre: string,
    apellidos: string,
    fechaNac: Date,
    salHora: number,
    cargo: string,
    licencias: Array<string>,
    incidencias: Array<string>
  ) {
    super(DNI, nombre, apellidos, fechaNac, salHora, cargo);
    this._licencias = licencias;
    this._incidencias = incidencias;
  }
  get licencias(): Array<string> {
    return this._licencias;
  }
  set licencias(licencias: Array<string>) {
    this._licencias = licencias;
  }

  get incidencias(): Array<string> {
    return this._incidencias;
  }
  set incidencias(incidencias: Array<string>) {
    this._incidencias = incidencias;
  }
  override sueldoTrabajador() {
    let sueldoMes = this._salHora * 40 * 4 + 300
    console.log("Sueldo:"+sueldoMes)
    return sueldoMes
  }
  }

export type iConductor = {
  DNI: String | null,
  nombre: String | null,
  apellidos: String | null,
  fechaNac: Date | null,
  salHora: Number | null,
  cargo: String | null,
  tipoT: String | null,
  licencias: Array<string> | null,
  incidencias: Array<string> | null
}

export type tConductor = {
  _DNI: string;
  _nombre: string;
 _apellidos: string;
  _fechaNac: Date;
  _salHora: number;
  _cargo: string;
  _especialidad: Array<string>,
  _ubicacion: string
}
