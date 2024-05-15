import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserModule,
    BrowserAnimationsModule, // Adicione esta linha para suporte à animação
    IonicModule.forRoot(),
    AppRoutingModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }) // Importe esta linha
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
  
export class AppModule {}

const firebaseConfig = {

  apiKey: "AIzaSyBSXjdSzW3ihiZ531nzShlSOWVtW8IhhC0",

  authDomain: "apptreiny.firebaseapp.com",

  projectId: "apptreiny",

  storageBucket: "apptreiny.appspot.com",

  messagingSenderId: "334859476772",

  appId: "1:334859476772:web:b3e3d05eb187ef96c11db1",

  measurementId: "G-QXWPJ40R0X"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);