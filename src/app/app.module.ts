import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';


// Paste in your credentials that you saved earlier
var firebaseConfig = {
  apiKey: "AIzaSyDuP6z1Rcq5kJ5ipdJeBTuNO_FVwfBS3-w",
    authDomain: "contact-list-65cce.firebaseapp.com",
    databaseURL: "https://contact-list-65cce.firebaseio.com",
    projectId: "contact-list-65cce",
    storageBucket: "contact-list-65cce.appspot.com",
    messagingSenderId: "298826820032"
  };

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
export class AppModule {}