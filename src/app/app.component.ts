import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/heroes">Heroes</a>
        <a routerLink="/tasks">Tasks</a>
        <a routerLink="/grid">Grid Example</a>
        <a routerLink="/webcam">WebCamStreaming</a>
        <a routerLink="/webcamplayer">WebCamPlayer</a>
        <a routerLink="/barchart">BAR CHART</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}
