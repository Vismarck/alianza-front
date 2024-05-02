import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-client-modal',
  templateUrl: './new-client-modal.component.html',
  styleUrl: './new-client-modal.component.css'
})
export class NewClientModalComponent {

  // Define las propiedades para almacenar los datos ingresados por el usuario
  name: string = '';
  phone: string = '';
  email: string = '';
  startDate: Date = new Date;
  endDate: Date = new Date;

  constructor(
    public dialogRef: MatDialogRef<NewClientModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onOkClick(): void {
    // Aquí puedes emitir un evento que envíe los datos ingresados de vuelta al componente padre
    this.dialogRef.close({
      name: this.name,
      phone: this.phone,
      email: this.email,
      startDate: this.startDate,
      endDate: this.endDate
    });
  }

}
