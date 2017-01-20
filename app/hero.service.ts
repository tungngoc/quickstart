import {Injectable} from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Hero } from './hero';
import { HEROES } from './mock-heros';

@Injectable()

export class HeroService {
    private heroesUrl = 'api/heroes';

    constructor(private http: Http) {
       
    }

    getHeros(): Promise<Hero[]> {
         return this.http.get(this.heroesUrl)
        .toPromise()
        .then(response => response.json().data as Hero[])
        .catch(this.handleError);
    }
    
    getHero(id: Number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Hero)
        .catch(this.handleError);
    }

    handleError(error: any): Promise<any> {
        console.error("an error orcurred", error);
        return Promise.reject(error.message || error);
    }
}