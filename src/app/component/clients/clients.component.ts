import { Component } from '@angular/core';
import { ClientsService } from '../../service/clients/clients.service';
import { saveAs } from 'file-saver';
import { ClientModel } from '../../shared/models/clients.model';
import { MatDialog } from '@angular/material/dialog';
import { NewClientModalComponent } from '../new-client-modal/new-client-modal.component';
import { FormGroup, FormBuilder } from '@angular/forms'; 



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  showAdvancedSearchCard: boolean = false;

  advancedSearchForm: FormGroup;

  sharedKey: string = '';

  dataSource: any[] = []; 
  displayedColumns: string[] = ['sharedKey', 'businessId', 'email', 'phone', 'dateAdded', 'modified'];

  clients: ClientModel[] = [];

  constructor(private clientService: ClientsService, public dialog: MatDialog,
    private formBuilder: FormBuilder
  ) { 
    
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
      
      this.clientService.getSharedKeyById(this.sharedKey).subscribe(data => {
        
        console.log(data);
        this.dataSource = [];
        this.dataSource.push(data);
      }, error => {
        
        console.error(error);
      });
    } else {
      
      console.log('El campo Shared Key está vacío');
    }
  }

  searchAdvanced(): void {
    const formData = this.advancedSearchForm.value;

    this.clientService.advancedSearch(formData).subscribe(data => {
      this.dataSource = data;
    }, error => {
      
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
      width: '300px', 
      height:'600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
      if (result) {
        
        this.clientService.createNewClient(result).subscribe(response => {
          
          console.log('New client created:', response);
        });
      }
    });


  }
}
