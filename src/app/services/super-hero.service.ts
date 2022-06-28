import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { SuperHeros } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  private url = "SuperHero";

  constructor(private http:HttpClient) { }

  public getSuperHeroes () : Observable<SuperHeros[]> {
    return this.http.get<SuperHeros[]>(`${environment.apiUrl}/${this.url}`);
  }
}
