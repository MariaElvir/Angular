import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Dato } from './actividad9';

@Injectable({
  providedIn: 'root'
})
export class Actividad9Service {

  private urlEndPoint: string = 'https://jsonplaceholder.typicode.com/posts';
  
  constructor(private http: HttpClient) { }
  
  getDatos(): Observable<any> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Dato[])
    );
  }
  }
