import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLookHistoryComponent } from '../../component/client-look-history/client-look-history.component';

@NgModule({
  declarations: [
    ClientLookHistoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClientLookHistoryComponent
  ]
})
export class ClientLookHistoryModule { }
