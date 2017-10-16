
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AgendaPage } from './../pages/agenda/agenda';
import { MarcarEncontroPage } from './../pages/marcar-encontro/marcar-encontro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebaseConfig= {
  apiKey: "AIzaSyCe89mtfwb4_AGVWDo8RlNOy8U0QL1viAw",
  authDomain: "aplicativo-marcar-encontro.firebaseapp.com",
  databaseURL: "https://aplicativo-marcar-encontro.firebaseio.com",
  projectId: "aplicativo-marcar-encontro",
  storageBucket: "aplicativo-marcar-encontro.appspot.com",
  messagingSenderId: "245848451215"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AgendaPage,
    MarcarEncontroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
      'Outubro', 'Novembro', 'Dezembro']
    }),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgendaPage,
    MarcarEncontroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
