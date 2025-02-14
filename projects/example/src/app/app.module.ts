import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FilestackModule } from './../../../filestack-angular/src/public-api';

import { HighlightModule } from 'ngx-highlightjs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HighlightModule,
    BrowserAnimationsModule,
    FilestackModule.forRoot({
      apikey: 'APEkwxKMZTsWNIP0XQsv2z'
    }),
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
