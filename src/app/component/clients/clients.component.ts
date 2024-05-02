import { Component } from '@angular/core';
import { ClientsService } from '../../service/clients/clients.service';
import { saveAs } from 'file-saver';
import { ClientModel } from '../../shared/models/clients.model';
import { MatDialog } from '@angular/material/dialog';
import { NewClientModalComponent } from '../new-client-modal/new-client-modal.component';
import { FormGroup, FormBuilder } from '@angular/forms'; // Importa FormGroup y FormBuilder



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  showAdvancedSearchCard: boolean = false;

  advancedSearchForm: FormGroup;

  sharedKey: string = '';

  dataSource: any[] = []; // Reemplaza any[] con el tipo de tus datos
  displayedColumns: string[] = ['sharedKey', 'businessId', 'email', 'phone', 'dateAdded', 'modified'];

  clients: ClientModel[] = [];

  constructor(private clientService: ClientsService, public dialog: MatDialog,
    private formBuilder: FormBuilder
  ) { 
    // Inicializa el FormGroup en el constructor
    this.advancedSearchForm = this.formBuilder.group({
      name: [''],
      phone: [''],
      email: [''],
      startDate: [''],
      endDate: ['']
    });
  }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService.getClients().subscribe(
      data => {
        this.dataSource = data;
        this.clients = data;
      },
      error => {
        console.log('Error fetching clients:', error);
      }
    );
  }

  search(): void {
    if (this.sharedKey.trim() !== '') {
      // Llama al servicio para realizar la búsqueda por la clave compartida
      this.clientService.getSharedKeyById(this.sharedKey).subscribe(data => {
        // Aquí puedes manejar la respuesta del servicio, por ejemplo, mostrar los resultados en la tabla
        console.log(data);
        this.dataSource = [];
        this.dataSource.push(data);
      }, error => {
        // Maneja cualquier error de la llamada al servicio
        console.error(error);
      });
    } else {
      // Si el campo shared key está vacío, muestra un mensaje de error o realiza alguna acción adecuada
      console.log('El campo Shared Key está vacío');
    }
  }

  searchAdvanced(): void {
    const formData = this.advancedSearchForm.value;

    this.clientService.advancedSearch(formData).subscribe(data => {
      this.dataSource = data;
    }, error => {
      // Maneja cualquier error
      console.error(error);
    });
  }

  toggleAdvancedSearchCard() {
    this.showAdvancedSearchCard = !this.showAdvancedSearchCard;
  }

  exportToCSV(): void {
    const csvData = this.convertToCSV(this.clients);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'clients.csv');
  }

  private convertToCSV(data: ClientModel[]): string {
    const header = Object.keys(data[0]).join(',');
    const rows = data.map(client => Object.values(client).join(','));
    return `${header}\n${rows.join('\n')}`;
  }

  openNewClientModal(): void {
    const dialogRef = this.dialog.open(NewClientModalComponent, {
      width: '300px', // Puedes ajustar el ancho según tus necesidades
      height:'600px',
      data: {} // Puedes pasar datos al modal si es necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Aquí puedes hacer algo después de cerrar el modal si es necesario
      if (result) {
        // Si result es true, significa que se envió la información del modal
        this.clientService.createNewClient(result).subscribe(response => {
          // Maneja la respuesta del servicio si es necesario
          console.log('New client created:', response);
        });
      }
    });


  }
}
