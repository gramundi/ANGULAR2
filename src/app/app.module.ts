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

import { WebCamComponent } from './webcam.components';

import { AppRoutingModule }     from './app-routing.modules';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';

import { NgGridModule } from 'angular2-grid';

import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import {SingleMediaPlayer} from './singlemediaplayer.component';

import { ChartsModule } from 'ng2-charts';

import { BarChartComponent } from './barChart.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskComponent, 
    GridComponent,
    HeroesComponent,
    HeroDetailComponent,
    WebCamComponent,
    SingleMediaPlayer,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService,{passThruUnknownUrl: true}),
    AppRoutingModule,
    NgGridModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    ChartsModule
    ],
  providers: [HeroService,TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
