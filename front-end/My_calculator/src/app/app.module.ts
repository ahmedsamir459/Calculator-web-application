import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ApiserveService } from './apiserve.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ApiserveService,HttpClient],

  bootstrap: [AppComponent]
})
export class AppModule { }
