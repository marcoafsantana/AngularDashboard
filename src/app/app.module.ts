import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { GraphsComponent } from './graphs/graphs.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InfoCardsComponent,
    GraphsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
