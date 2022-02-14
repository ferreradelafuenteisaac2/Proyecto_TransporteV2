import { Trabajador } from './trabajador';

export class Mecanico extends Trabajador {
  private _especialidad: Array<string>;
  private _ubicacion: string;
  constructor(
    DNI: string,
    nombre: string,
    apellidos: string,
    fechaNac: Date,
    salHora: number,
    cargo: string,
    especialidad: Array<string>,
    ubicacion: string
  ) {
    super(DNI, nombre, apellidos, fechaNac, salHora, cargo);
    this._especialidad = especialidad;
    this._ubicacion = ubicacion;
  }
  get especialidad(): Array<string> {
    return this._especialidad;
  }
  set especialidad(especialidad: Array<string>) {
    this._especialidad = especialidad;
  }

  get ubicacion(): string {
    return this._ubicacion;
  }
  set ubicacion(ubicacion: string) {
    this._ubicacion = ubicacion;
  }
  override sueldoTrabajador() {
    let sueldoMes = this._salHora * 40 * 4 + 100
    console.log("Sueldo:"+sueldoMes)
    return sueldoMes
  }
}

export type iMecanico = {
  DNI: String | null,
  nombre: String | null,
  apellidos: String | null,
  fechaNac: Date | null,
  salHora: Number | null,
  cargo: String | null,
  tipoT: String | null,
  especialidad: Array<string> | null,
  ubicacion: String | null
}

export type tMecanico = {
  _DNI: string;
  _nombre: string;
 _apellidos: string;
  _fechaNac: Date;
  _salHora: number;
  _cargo: string;
  _especialidad: Array<string>,
  _ubicacion: string
}
