import { TestBed } from '@angular/core/testing';

import { ClientsService } from './clients.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClientModel } from '../../shared/models/clients.model';
import { API_BASE_URL } from '../../config/config';


describe('ClientsService', () => {
  let clientsService: ClientsService;
  let httpTestingController: HttpTestingController;
  let apiUrl = API_BASE_URL;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientsService]
    });

    
    clientsService = TestBed.inject(ClientsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should retrieve client by shared key', () => {

    let SharedKey = 'jgutierrez';

    const mockClient = new ClientModel(
      'jgutierrez',
      'Juliana Gutierrez',
      'jgutierrez@gmail.com', 
      '3216876543', 
      new Date('20-05-2019'), 
      new Date(),
      new Date()
    );
    				

    clientsService.getSharedKeyById(SharedKey).subscribe(client => {
      expect(client).toEqual(mockClient);
    });

    const req = httpTestingController.expectOne(`${apiUrl}/search/${SharedKey}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockClient);
  });

  it('should add new client', () => {

    const newClientData = new ClientModel(
      'jperez',
      'Juan Perez',
      'jperez@gmail.com', 
      '3216876543', 
      new Date('20-05-2019'),
      new Date(),
      new Date()
    );

    clientsService.createNewClient(newClientData).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${apiUrl}/create`);
    expect(req.request.method).toEqual('POST');
    req.flush(newClientData);
  });

  it('should perform advanced search', () => {

    const searchCriteria = new ClientModel(
      '',
      'Juliana Gutierrez',
      '', 
      '', 
      new Date(), 
      new Date(),
      new Date()
    );

    clientsService.advancedSearch(searchCriteria).subscribe(results => {
      expect(results.length).toBeGreaterThan(0);
    });

    const req = httpTestingController.expectOne(`${apiUrl}/advancedsearch`);
    expect(req.request.method).toEqual('POST');
    req.flush(searchCriteria);
  });

  it('should retrieve all clients', () => {
    
    const mockClients: ClientModel[] = [
      new ClientModel('jperez','Juan Perez','jperez@gmail.com','3216876543', new Date(), new Date(), new Date()),
      new ClientModel( 'jgutierrez','Juliana Gutierrez','jgutierrez@gmail.com','3216876543', new Date(), new Date(), new Date())
    ];

    clientsService.getClients().subscribe(clients => {
      expect(clients).toEqual(mockClients);
    });

    const req = httpTestingController.expectOne(`${apiUrl}/allclients`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockClients);
  });
});