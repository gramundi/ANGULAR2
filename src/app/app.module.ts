import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { RouterModule } from '@angular/router'; 

import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService} from './hero.service';

import { TaskComponent } from './task.component';
import { GridComponent } from './grid.component'
import { TaskService} from './task.service';

import { AppRoutingModule }     from './app-routing.modules';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';

import { NgGridModule } from 'angular2-grid';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskComponent, 
    GridComponent,
    HeroesComponent,
    HeroDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService,{passThruUnknownUrl: true}),
    AppRoutingModule,
    NgGridModule
    ],
  providers: [HeroService,TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
