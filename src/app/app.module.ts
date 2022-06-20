import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { NotfounComponent } from './notfoun/notfoun.component';
import { ShortPipe } from './short.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SportsComponent,
    ScienceComponent,
    NotfounComponent,
    ShortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
