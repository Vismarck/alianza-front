import { TestBed } from '@angular/core/testing';

import { ClientsService } from './clients.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('', () => {
  let service: ClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


describe('GetAllClientService', () => {
  let service: ClientsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ClientsService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return clients', () => {
    const mockClients = [{ id: 1, name: 'Client 1' }, { id: 2, name: 'Client 2' }];

    service.getClients().subscribe(clients => {
      expect(clients).toEqual(mockClients);
    });

    const req = httpTestingController.expectOne('url/api/clients');
    expect(req.request.method).toEqual('GET');
    req.flush(mockClients);
  });
});



describe('Services', () => {
  let sharedKeyService: SharedKeyService;
  let newClientService: NewClientService;
  let advancedSearchService: AdvancedSearchService;
  let clientsService: ClientsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SharedKeyService, NewClientService, AdvancedSearchService, ClientsService]
    });

    sharedKeyService = TestBed.inject(SharedKeyService);
    newClientService = TestBed.inject(NewClientService);
    advancedSearchService = TestBed.inject(AdvancedSearchService);
    clientsService = TestBed.inject(ClientsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should retrieve client by shared key', () => {
    const mockClient = { id: 1, name: 'John Doe', sharedKey: '123' };

    sharedKeyService.getClientBySharedKey('123').subscribe(client => {
      expect(client).toEqual(mockClient);
    });

    const req = httpTestingController.expectOne('url/api/clients/123');
    expect(req.request.method).toEqual('GET');
    req.flush(mockClient);
  });

  it('should add new client', () => {
    const newClientData = { name: 'Jane Doe', phone: '1234567890', email: 'jane@example.com' };

    newClientService.addNewClient(newClientData).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne('url/api/clients');
    expect(req.request.method).toEqual('POST');
    req.flush({});
  });

  it('should perform advanced search', () => {
    const searchCriteria = { name: 'John', phone: '1234567890', email: 'john@example.com' };

    advancedSearchService.performAdvancedSearch(searchCriteria).subscribe(results => {
      expect(results.length).toBeGreaterThan(0);
    });

    const req = httpTestingController.expectOne('url/api/clients/advanced-search');
    expect(req.request.method).toEqual('POST');
    req.flush([/* Mocked search results */]);
  });

  it('should retrieve all clients', () => {
    const mockClients = [{ id: 1, name: 'Client 1' }, { id: 2, name: 'Client 2' }];

    clientsService.getAllClients().subscribe(clients => {
      expect(clients).toEqual(mockClients);
    });

    const req = httpTestingController.expectOne('url/api/clients');
    expect(req.request.method).toEqual('GET');
    req.flush(mockClients);
  });
});