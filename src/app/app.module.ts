
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AgendaPage } from './../pages/agenda/agenda';
import { MarcarEncontroPage } from './../pages/marcar-encontro/marcar-encontro';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SigninPageModule } from './../pages/signin/signin.module';
import { SignupPageModule } from './../pages/signup/signup.module';
import { LoginPageModule } from './../pages/signinwithemail/signinwithemail.module';
import { HomePageModule } from './../pages/home/home.module';
import { ResetPasswordPageModule } from './../pages/resetpassword/resetpassword.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AuthService } from '../providers/auth/auth.service';

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
    AgendaPage,
    MarcarEncontroPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
      'Outubro', 'Novembro', 'Dezembro']
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    HomePageModule,
    SignupPageModule,
    SigninPageModule,
    LoginPageModule,
    ResetPasswordPageModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AgendaPage,
    MarcarEncontroPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    
    
  ],
})
export class AppModule {}
