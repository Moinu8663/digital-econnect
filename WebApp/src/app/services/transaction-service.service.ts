import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  constructor(private httpsvc:HttpClient) { }

  GetTransaction()
  {
    return this.httpsvc.get(environment.apiURL);
  }
}
