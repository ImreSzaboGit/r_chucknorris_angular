import {EventEmitter, Injectable, OnChanges} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {IRandomJoke} from './IRandom-joke';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  options = {
    headers: new HttpHeaders({
      'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
      'x-rapidapi-key': 'f50841a3bamsh35b2cb62aa4fdc8p163de9jsne7fdd1f4c278',
      accept: 'application/json'
    })
  };
  baseUrl = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/';
  filterUrl = '';
  selectedCategory = '';
  selectedCategoryUpdated = new EventEmitter();
  searchTerm = '';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<object>{
    return this.http.get(`${this.baseUrl}categories`, this.options );
  }

  getRandomJoke(): Observable<object> {
    if (this.selectedCategory) {
      this.filterUrl = `?category=${this.selectedCategory}`;
    }
    return this.http.get(
      `${this.baseUrl}random${this.filterUrl}`,
      this.options);
  }

  getSearchedJoke(): Observable<object>{
    return this.http.get<IRandomJoke>(
      `${this.baseUrl}search?query=${this.searchTerm}`, this.options );
  }

  onRandomJokeComponentGetJoke(): void {
    this.selectedCategoryUpdated.emit();
  }
}
