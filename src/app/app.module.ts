import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdMenuModule, MdSidenavModule, MdTabsModule,
   MdCheckboxModule, MdToolbarModule, MdIconModule, MdCardModule } from '@angular/material'

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
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdTabsModule,
    MdIconModule,
    MdCardModule
  ],
  providers: [
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
