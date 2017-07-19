import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContentService } from './services/content.service';
import { ConentComponent } from './components/content.component'

@NgModule({
  declarations: [
    AppComponent,
    ConentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
