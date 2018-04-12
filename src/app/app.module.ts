import { AngularFirestoreModule } from 'angularfire2/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2";
import { FormsModule } from "@angular/forms";

const firebaseConfig = {
  apiKey: "AIzaSyD4OrT0AzykJslQjxlQzs3sPrS26U_v_OE",
  authDomain: "firequest-be47f.firebaseapp.com",
  databaseURL: "https://firequest-be47f.firebaseio.com",
  projectId: "firequest-be47f",
  storageBucket: "firequest-be47f.appspot.com",
  messagingSenderId: "405907346501"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
