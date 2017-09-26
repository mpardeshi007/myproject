import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
@Component({
  selector: 'app-root',
  templateUrl : './app.component.html'
})

export class AppComponent implements OnInit {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  results: string[];
  constructor(private http: HttpClient,public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
    
    this.user = this.afAuth.authState;
  }
  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('http://www.myapifilms.com/imdb/idIMDB?name=Shah+Rukh+Khan&token=5b4a5a87-273b-456a-9c88-711b44ef0896&format=json&language=en-us&filmography=1&exactFilter=0&limit=10&bornDied=0&starSign=0&uniqueName=0&actorActress=0&actorTrivia=0&actorPhotos=0&actorVideos=0&salary=0&spouses=0&tradeMark=0&personalQuotes=0&starMeter=0&fullSize=0&alternateNames=0').subscribe(data => {
      console.log(data);
    });
  }
  login() {
    this.afAuth.auth.signInAnonymously();
   }

    logout() {
        this.afAuth.auth.signOut();
    }

    Send(desc: string) {
        this.items.push({ message: desc});
        this.msgVal = '';
    }
}

// const imdb = require('imdb-api');

// imdb.get('The Toxic Avenger', {apiKey: 'foo', timeout: 30}).then(console.log).catch(console.log);
// imdb.getById('tt0090190', {apiKey: 'foo', timeout: 30}).then(console.log).catch(console.log);
// imdb.getReq({ name: 'The Toxic Avenger', opts: {apiKey: 'foo', timeout: 30} }).then(console.log).catch(console.log);
