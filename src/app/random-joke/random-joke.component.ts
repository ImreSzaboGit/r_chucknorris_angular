import { Component, OnInit } from '@angular/core';
import {JokesService} from '../jokes.service';
import {IRandomJoke} from '../IRandom-joke';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
})
export class RandomJokeComponent implements OnInit {
  randomJoke: IRandomJoke;

  constructor(private jokesService: JokesService) { }

  ngOnInit(): void {
    this.getJoke();
    this.jokesService.selectedCategoryUpdated.subscribe(() => this.getJoke());
  }

  getJoke(): void {
    this.jokesService.getRandomJoke().subscribe(data => {
      this.randomJoke = data as IRandomJoke; });
  }
}
