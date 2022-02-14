import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTrenesComponent } from './components/crear-trenes/crear-trenes.component';
import { ListarTrenesComponent } from './components/listar-trenes/listar-trenes.component';
import { CrearAutobusesComponent } from './components/crear-autobuses/crear-autobuses.component';
import { ListarAutobusesComponent } from './components/listar-autobuses/listar-autobuses.component';
import { ListarMecanicosComponent } from './components/listar-mecanicos/listar-mecanicos.component';
import { CrearMecanicosComponent } from './components/crear-mecanicos/crear-mecanicos.component';
import { ListarConductoresComponent } from './components/listar-conductores/listar-conductores.component';
import { CrearConductoresComponent } from './components/crear-conductores/crear-conductores.component';
import { MenuComponent } from './components/menu/menu.component';
import { GraficoComponent } from './components/grafico/grafico.component';
// Componentes

const routes: Routes = [
  { path: 'listar-tren', component: ListarTrenesComponent},
  { path: 'crear-tren', component: CrearTrenesComponent},
  { path: 'editar-tren/:matricula', component: CrearTrenesComponent},
  { path: 'listar-autobus', component: ListarAutobusesComponent},
  { path: 'crear-autobus', component: CrearAutobusesComponent},
  { path: 'editar-autobus/:matricula', component: CrearAutobusesComponent},
  { path: 'listar-mecanico', component: ListarMecanicosComponent},
  { path: 'crear-mecanico', component: CrearMecanicosComponent},
  { path: 'editar-mecanico/:DNI', component: CrearMecanicosComponent},
  { path: 'listar-conductor', component: ListarConductoresComponent},
  { path: 'crear-conductor', component: CrearConductoresComponent},
  { path: 'editar-conductor/:DNI', component: CrearConductoresComponent},
  { path: 'grafico', component: GraficoComponent},
  { path: '', component: MenuComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
