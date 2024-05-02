import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ClientsComponent } from './component/clients/clients.component';
import { ClientLookHistoryComponent } from './component/client-look-history/client-look-history.component';
import { EmergencyPinConfigurationComponent } from './component/emergency-pin-configuration/emergency-pin-configuration.component';
import { EmergencyPinHistoryComponent } from './component/emergency-pin-history/emergency-pin-history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { NewClientModalComponent } from './component/new-client-modal/new-client-modal.component';
import {MatDividerModule} from '@angular/material/divider'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SidebarModule } from './module/sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ClientsComponent,
    ClientLookHistoryComponent,
    EmergencyPinConfigurationComponent,
    EmergencyPinHistoryComponent,
    NewClientModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatDialogRef,
    SidebarModule
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
