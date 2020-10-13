import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {JokesService} from '../jokes.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
})
export class CategoriesComponent implements OnInit {

  categories;

  onSelectedCategory($event): void {
    this.jokesService.selectedCategory = $event.target.textContent;
    this.jokesService.onRandomJokeComponentGetJoke();
  }

  constructor(private jokesService: JokesService) { }

  ngOnInit(): void {
    this.categories = this.jokesService.getCategories();
  }

}
