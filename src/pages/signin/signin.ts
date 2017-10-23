import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/auth/user';
import { AuthService } from '../../providers/auth/auth.service';
import { LoadingSpinner } from './../../providers/loading-spinner/loading-spinner';
import { SigninWithEmailPage } from './../signinwithemail/signinwithemail';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  user: User = new User();

  @ViewChild('form') 
  form: NgForm;

  loadingSpinner: LoadingSpinner = new LoadingSpinner(this.loadingCtrl);

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, 
    private authService: AuthService, private loadingCtrl: LoadingController) {

  }

  createAccount() {
    this.navCtrl.push(SignupPage);
  }

  signInWithEmailPage() {
    this.navCtrl.push(SigninWithEmailPage);
  }

  signInWithFacebook() {
    this.authService.signInWithFaceBook()
      .then(() => {
        this.loadingSpinner.presentLoading();
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error) => {
        this.loadingSpinner.presentLoadingCustom(100);
        this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Erro ao efetuar o login.' })
        .present();
      });
  }

//   signInWithGoogle() {
//     this.authService.signInWithGoogle()
//       .then(() => {
//         this.navCtrl.setRoot(HomePage);
//       })
//       .catch((error) => {
//         this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Erro ao efetuar o login' })
//           .present();
//       });
//   }

//   signInWithTwitter() {
//     this.authService.signInWithTwitter()
//       .then(() => {
//         this.navCtrl.setRoot(HomePage);
//       })
//       .catch((error) => {
//         this.toastCtrl.create({ duration: 3000, position: 'bottom', message: 'Erro ao efetuar o login' })
//           .present();
//       });
//   }
}