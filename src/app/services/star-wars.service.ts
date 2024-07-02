import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Starship, StarshipResults } from '../interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  private baseUrl = 'https://swapi.dev/api/';
  //If this API does not work, try https://swapi.py4e.com/

  constructor(private http: HttpClient) { }

  getStarShipList(url: string = `${this.baseUrl}/starships`): Observable<StarshipResults> {
    return this.http.get<StarshipResults>(url);
  }
}
