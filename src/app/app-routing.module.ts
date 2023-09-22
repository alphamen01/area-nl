import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AreasComponent } from './componentes/areas/areas.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';

const routes: Routes = [
  {path:'', redirectTo:'Areas', pathMatch:'full'},
  {path:'Areas',component: AreasComponent},
  {path:'Clientes',component:ClientesComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
