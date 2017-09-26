import { AngularFireModule } from 'angularfire2';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { AppComponent }  from './app.component';
import { HttpModule }    from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
   apiKey: "AIzaSyCt3MlKksspitVIbUsMs5T9_FyTuG0PHJA",
    authDomain: "myapp-07.firebaseapp.com",
    databaseURL: "https://myapp-07.firebaseio.com",
    projectId: "myapp-07",
    storageBucket: "myapp-07.appspot.com",
    messagingSenderId: "892492656854"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule ,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
// <-- import the FormsModule before binding with [(ngModel)]
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ],
  providers :[]
  
})
export class AppModule { }

