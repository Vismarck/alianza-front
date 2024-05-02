import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ClientsComponent } from './component/clients/clients.component';
import { ClientLookHistoryComponent } from './component/client-look-history/client-look-history.component';
import { EmergencyPinConfigurationComponent } from './component/emergency-pin-configuration/emergency-pin-configuration.component';
import { EmergencyPinHistoryComponent } from './component/emergency-pin-history/emergency-pin-history.component';


const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      { path: 'clients', component: ClientsComponent },
      { path: 'client-look-history', component: ClientLookHistoryComponent },
      { path: 'emergency-pin-configuration', component: EmergencyPinConfigurationComponent },
      { path: 'emergency-pin-history', component: EmergencyPinHistoryComponent },
      // Otras rutas de componentes principales van aquí
      { path: '', redirectTo: '/clients', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
