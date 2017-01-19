import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule  } from '@angular/router';

import { HeroesComponent }  from './heroes.component';
import { HeroDetailComponent} from "./hero-detail.component";
import { AppComponent } from './app.component';
import { HeroService} from './hero.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,  
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
      }
    ])
     ],
  declarations: [
    AppComponent, 
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
     ],
  providers: [HeroService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
