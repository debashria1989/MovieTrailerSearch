import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getTopMoviesfromIMDB() : Observable<any> {
    const url = "https://imdb-top-100-movies.p.rapidapi.com/";
    return this.http.get<any>(url,
      {headers:{'X-RapidAPI-Key':'c1d15b911dmsh38bac786f51252cp1f3a56jsn1dc9a664a26c',
                      'X-RapidAPI-Host':'imdb-top-100-movies.p.rapidapi.com'}});
  }

  getMovieInfofromIMDB(movieName:any) : Observable<any>{
    const url = "https://imdb-top-100-movies.p.rapidapi.com/";
    return this.http.get<any>(url,
      {headers:{'X-RapidAPI-Key':'c1d15b911dmsh38bac786f51252cp1f3a56jsn1dc9a664a26c',
                      'X-RapidAPI-Host':'imdb-top-100-movies.p.rapidapi.com'}});
  }
}
