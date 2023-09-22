import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { AreasComponent } from './componentes/areas/areas.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { DetalleAreaComponent } from './componentes/modal/detalle-area/detalle-area.component';
import { EliminarAreaComponent } from './componentes/modal/eliminar-area/eliminar-area.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    AreasComponent,
    ClientesComponent,
    DetalleAreaComponent,
    EliminarAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
