import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { result } from './result';
import { JsonPipe } from '@angular/common';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class ApiserveService {

  constructor(private http: HttpClient) { }
  post(path: String, body: Object = {}): Observable<result> {
    console.log(JSON.stringify(body));
    console.log(`${environment.api_url}${path}`);
    return this.http.post<result>(`${environment.api_url}${path}`, body);
  }

  get(path: String, value: string): Observable<result> {
    return this.http.get<result>(`${environment.api_url}${path}/${value}`, httpOptions);
  }
  doOperation(operand1: number, operand2: number, operation: string): Observable<result> {
    return this.post(operation, { "operand1": operand1, "operand2": operand2 });
 }
}
