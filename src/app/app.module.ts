import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

// Componentes
import { ListarTrenesComponent } from './components/listar-trenes/listar-trenes.component';
import { CrearTrenesComponent } from './components/crear-trenes/crear-trenes.component';
import { ListarAutobusesComponent } from './components/listar-autobuses/listar-autobuses.component';
import { CrearAutobusesComponent } from './components/crear-autobuses/crear-autobuses.component';
import { ListarConductoresComponent } from './components/listar-conductores/listar-conductores.component';
import { ListarMecanicosComponent } from './components/listar-mecanicos/listar-mecanicos.component';
import { CrearConductoresComponent } from './components/crear-conductores/crear-conductores.component';
import { CrearMecanicosComponent } from './components/crear-mecanicos/crear-mecanicos.component';
import { MenuComponent } from './components/menu/menu.component';
import { GraficoComponent } from './components/grafico/grafico.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarTrenesComponent,
    CrearTrenesComponent,
    ListarAutobusesComponent,
    CrearAutobusesComponent,
    ListarConductoresComponent,
    ListarMecanicosComponent,
    CrearConductoresComponent,
    CrearMecanicosComponent,
    MenuComponent,
    GraficoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ChartModule,
    HighchartsChartModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
