import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FilestackModule } from './../../../filestack-angular/src/public-api';

import { HighlightModule } from 'ngx-highlightjs';

import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // HighlightModule,
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
export class AppModule {}
