import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {
  private apiUrl = 'your_server_api_url';
  constructor(private http:HttpClient) { }
  transferMoney(transferData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/transfer`, transferData);
  }
}
