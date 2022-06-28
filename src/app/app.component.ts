import { Component } from '@angular/core';
import { SuperHeros } from './models/super-hero';
import { SuperHeroService } from './services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHeros.UI';
  heroes: SuperHeros[] = [];

  constructor(private superHeroService: SuperHeroService) {}

  ngOnInit() : void {
    this.superHeroService.getSuperHeroes()
    .subscribe((result: SuperHeros[]) => (this.heroes = result));
  }
}
