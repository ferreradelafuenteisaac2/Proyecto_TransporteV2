import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { iTren } from '../models/Vehiculos/tren';
import { iAutobus } from '../models/Vehiculos/autobus';
import { iMecanico } from '../models/Trabajadores/mecanico'
import { iConductor } from '../models/Trabajadores/conductor'

@Injectable({
  providedIn: 'root'
})
export class TransporteService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


  // GET
  getTrenes(): Observable<any> {
    const url = `${this.url}/trenes`;
    return this.http.get(url);
  }

  getAutobus(): Observable<any> {
    const url = `${this.url}/autobuses`;
    return this.http.get(url);
  }

  getConductores(): Observable<any> {
    const url = `${this.url}/conductores`;
    return this.http.get(url);
  }

  getMecanicos(): Observable<any> {
    const url = `${this.url}/mecanicos`;
    return this.http.get(url);
  }

  getTrabajador(DNI: string): Observable<any> {
    const url = `${this.url}/trabajador/${DNI}`;
    return this.http.get(url);
  }

  getVehiculo(matricula: string): Observable<any> {
    const url = `${this.url}/vehiculo/${matricula}`
    return this.http.get(url);
  }

  // POST
  postConductor(doc: any): Observable<any> {
    const url = `${this.url}/conductor`;
    return this.http.post(url, doc);
  }

  postMecanico(doc: any): Observable<any> {
    const url = `${this.url}/mecanico`;
    return this.http.post(url, doc);
  }

  postTren(doc: any): Observable<any> {
    const url = `${this.url}/tren`;
    return this.http.post(url, doc);
  }

  postAutobus(doc: any): Observable<any> {
    const url = `${this.url}/autobus`;
    return this.http.post(url, doc);
  }

  // PUT
  updateTren(matricula: string, tren: iTren): Observable<any> {
    const url = `${this.url}/updateTren/${matricula}`
    return this.http.put(url, tren);
  }

  updateAutobus(matricula: string, autobus: iAutobus): Observable<any> {
    const url = `${this.url}/updateAutobus/${matricula}`;
    return this.http.put(url, autobus);
  }

  updateConductor(DNI: string, conductor: iConductor): Observable<any> {
    const url = `${this.url}/updateConductor/${DNI}`;
    return this.http.put(url, conductor);
  }

  updateMecanico(DNI: string, mecanico: iMecanico): Observable<any> {
    const url = `${this.url}/updateMecanico/${DNI}`;
    return this.http.put(url, mecanico);
  }

  // DELETE
  deleteTrabajador(DNI: string): Observable<any> {
    const url = `${this.url}/deleteTrabajador/${DNI}`;
    return this.http.delete(url);
  }

  deleteVehiculo(matricula: string): Observable<any> {
    const url = `${this.url}/deleteVehiculo/${matricula}`;
    return this.http.delete(url);
  }



}
