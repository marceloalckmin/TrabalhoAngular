import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../models/i-movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly URI_MOVIES = 'assets/exemplo_movies.json';

  constructor(private http: HttpClient) { }

  public findAll(): Observable<IMovie[]>{
    return this.http.get<IMovie[]>( this.URI_MOVIES );
  }
}
