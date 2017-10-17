import { SigninPage } from './../signin/signin';
import { AuthService } from './../../providers/auth/auth.service';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contatosRoot = 'ContatosPage';


  constructor(public navCtrl: NavController, public authService: AuthService) {

  }

  signOut() {
    return this.authService.signOut()
      .then(() =>{
        this.navCtrl.setRoot(SigninPage);
      })
      .catch((error) => {
        console.error(error);
      })
  }

}