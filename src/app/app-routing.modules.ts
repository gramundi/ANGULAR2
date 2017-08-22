import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { TaskComponent }        from './task.component';
import { GridComponent }        from './grid.component';
import { WebCamComponent } from './webcam.components';

import { SingleMediaPlayer } from './singlemediaplayer.component';

import { BarChartComponent } from './barChart.component'

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'tasks',      component: TaskComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'grid',     component: GridComponent },
  { path: 'webcam',   component:WebCamComponent},
  { path: 'webcamplayer',   component:SingleMediaPlayer},
  { path: 'barchart',   component:BarChartComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

