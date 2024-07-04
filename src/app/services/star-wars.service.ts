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

  private imageBaseUrl = 'https://starwars-visualguide.com/assets/img';

  constructor(private http: HttpClient) { }

  getStarShipList(url: string = `${this.baseUrl}/starships`): Observable<StarshipResults> {
    return this.http.get<StarshipResults>(url);
  }

  getStarshipImage(id: string) {
    return `${this.imageBaseUrl}/starships/${id}.jpg`;
  }

  getStarshipDetails(id: string): Observable<Starship> {
    return this.http.get<Starship>(`${this.baseUrl}/starships/${id}`);
  }
}
