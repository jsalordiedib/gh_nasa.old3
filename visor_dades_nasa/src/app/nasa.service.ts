import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface NasaData {
  title: string;
  url: string;
  explanation: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'DZbgaxexmi8LcfEXVie40fBuWlG7PadJ7OfH9Wyp'; // Substitueix per la teva clau API

  constructor(private http: HttpClient) {}

  getNasaData(dates: string[]): Observable<NasaData[]> {
    const requests = dates.map(date => {
      const params = new HttpParams()
        .set('api_key', this.apiKey)
        .set('date', date);
      return this.http.get<NasaData>(this.apiUrl, { params });
    });
    return forkJoin(requests).pipe(
      tap(data => console.log('Dades rebudes de l\'API:', data)),
      catchError(error => {
        console.error('Error en la petició a l\'API:', error);
        return of([] as NasaData[]); // Retorna un array buit en cas d'error
      })
    );
  }

  getApod(): Observable<NasaData> {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get<NasaData>(this.apiUrl, { params }).pipe(
      tap(data => console.log('Dada APOD rebuda de l\'API:', data)),
      catchError(error => {
        console.error('Error en la petició a l\'API:', error);
        return of({ title: '', url: '', explanation: '', date: '' } as NasaData); // Retorna un objecte buit en cas d'error
      })
    );
  }
}
