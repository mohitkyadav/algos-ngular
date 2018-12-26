import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatMenuModule, MatSidenavModule, MatTabsModule,
   MatCheckboxModule, MatToolbarModule, MatIconModule, MatCardModule, MatListModule, MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ContentService } from './services/content.service';
import { ContentComponent } from './components/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  providers: [
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
