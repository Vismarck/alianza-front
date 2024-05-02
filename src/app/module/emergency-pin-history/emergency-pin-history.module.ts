import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmergencyPinHistoryComponent } from '../../component/emergency-pin-history/emergency-pin-history.component';

@NgModule({
  declarations: [
    EmergencyPinHistoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmergencyPinHistoryComponent
  ]
})
export class EmergencyPinHistoryModule { }
