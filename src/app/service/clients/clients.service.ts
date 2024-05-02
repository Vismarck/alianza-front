import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ClientModel } from '../../shared/models/clients.model';
import { API_BASE_URL } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

private apiUrl = API_BASE_URL;

  clientSerchAdvanced: ClientModel = new ClientModel('','','','',new Date(), new Date(), new Date());

  constructor(private http: HttpClient) { }

  getClients(): Observable<ClientModel[]> {
    return this.http.get<ClientModel[]>(`${this.apiUrl}/allclients`);
  }

  getSharedKeyById(id: string): Observable<ClientModel> {
    const url = `${this.apiUrl}/search/${id}`;
    return this.http.get<ClientModel>(url);
  }

  advancedSearch(formData: any): Observable<ClientModel[]> {
    this.clientSerchAdvanced = new ClientModel(formData.sharedKey,formData.name,formData.phone,formData.email,formData.startDate, formData.endDate, new Date());
    return this.http.post<ClientModel[]>(`${this.apiUrl}/advancedsearch`, this.clientSerchAdvanced);
  }

  createNewClient(newClientData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, newClientData)
      .pipe(
        catchError(this.handleError) // Maneja cualquier error
      );
  }

  // Puedes definir otros métodos del servicio aquí

  private handleError(error: any): Observable<any> {
    console.error('Error:', error);
    // Maneja el error como desees, por ejemplo, puedes lanzar una alerta o registrar el error en un servicio de registro
    throw error; // Lanza el error nuevamente para que el componente que lo llama también pueda manejarlo si es necesario
  }
}
