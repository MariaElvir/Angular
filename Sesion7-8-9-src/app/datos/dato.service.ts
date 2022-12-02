import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Dato } from './dato';

@Injectable({
  providedIn: 'root'
})
export class DatoService {

private urlEndPoint: string = 'https://jsonplaceholder.typicode.com/posts';

constructor(private http: HttpClient) { }

getDatos(): Observable<any> {
  return this.http.get(this.urlEndPoint).pipe(
    map(response => response as Dato[])
  );
}
}