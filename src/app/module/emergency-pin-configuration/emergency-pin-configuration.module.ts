import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { EmergencyPinConfigurationComponent } from '../../component/emergency-pin-configuration/emergency-pin-configuration.component';

@NgModule({
  declarations: [
    EmergencyPinConfigurationComponent
  ],
  imports: [
    CommonModule,
    FormsModule // Agrega FormsModule aquí
  ],
  exports: [
    EmergencyPinConfigurationComponent
  ]
})
export class EmergencyPinConfigurationModule { }
