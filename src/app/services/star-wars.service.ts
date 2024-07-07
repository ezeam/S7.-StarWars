import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { expand, forkJoin, map, mergeMap, Observable, of, reduce, EMPTY  } from 'rxjs';
import { Starship, StarshipResults } from '../interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  private baseUrl = 'https://swapi.dev/api/';
  //If this API does not work, try https://swapi.py4e.com/

  private imageBaseUrl = 'https://starwars-visualguide.com/assets/img';

  constructor(private http: HttpClient) { }

  getStarShipList(): Observable<StarshipResults> {
    return this.http.get<StarshipResults>(`${this.baseUrl}/starships`)
      .pipe(
        expand((data: StarshipResults) => {
          // If there is a 'next' URL, continue expanding
          return data.next ? this.http.get<StarshipResults>(data.next) : EMPTY;
        }),
        reduce((acc: Starship[], data: StarshipResults) => {
          // Accumulate results from each page into a single array
          return acc.concat(data.results);
        }, []),
        map((results: Starship[]) => {
          // Create the final StarshipResults object
          return {
            count: results.length,
            next: null, // Assuming we do not need to paginate further in the UI
            previous: null, // Assuming we do not need to paginate back in the UI
            results: results
          };
        })
      );
  }

  getStarshipImage(id: string) {
    return `${this.imageBaseUrl}/starships/${id}.jpg`;
  }

  getStarshipDetails(id: string): Observable<Starship> {
    return this.http.get<Starship>(`${this.baseUrl}/starships/${id}`);
  } 
}
