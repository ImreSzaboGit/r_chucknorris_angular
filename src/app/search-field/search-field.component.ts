import { Component, OnInit } from '@angular/core';
import {JokesService} from '../jokes.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
})
export class SearchFieldComponent implements OnInit {

  searchedJokes;
  constructor(private jokesService: JokesService) { }

  ngOnInit(): void {}

  onSearchInput($event): void {
    if ($event.target.value.length >= 4) {
      this.jokesService.searchTerm = $event.target.value;
      this.jokesService.getSearchedJoke().subscribe(data => {
        this.searchedJokes = (data as ISearchedJokes).result;
      });
    } else {
      this.searchedJokes = null;
    }
  }
}

interface ISearchedJokes {
  result: [];
  total: number;
}
