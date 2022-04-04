import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'test';
  ngOnInit() {
    console.log(
      '🚀 ~ file: app.component.ts ~ line 13 ~ AppComponent ~ ngOnInit ~ globalConfig',
      window.configGlobal
    );
  }
}
