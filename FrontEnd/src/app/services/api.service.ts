import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IList } from '../models/List';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpCient: HttpClient) { }



  getList(): Observable<any>{
  
    return this.httpCient.get(environment.urlList);
  }
}
