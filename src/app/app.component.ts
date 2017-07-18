import { Component, Input, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HeroService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
      this.getHeroes();
    }
}
