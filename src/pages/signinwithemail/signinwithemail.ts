import { LoadingController } from 'ionic-angular';
import { LoadingSpinner } from './../../providers/loading-spinner/loading-spinner';
import { ResetPasswordPage } from './../resetpassword/resetpassword';
import { HomePage } from './../home/home';
import { AuthService } from './../../providers/auth/auth.service';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { User } from './../../providers/auth/user';
import { Component, ViewChild } from '@angular/core';

@IonicPage()
@Component({
    selector: 'sign-in-with-email-page',
    templateUrl: './signinwithemail.html'
})

export class SigninWithEmailPage {

    user: User = new User();
    loadingSpinner: LoadingSpinner = new LoadingSpinner(this.loadingCtrl);

    @ViewChild('form')
    form: NgForm;

    constructor(public navCtrl: NavController, public toastCtrl: ToastController,
        public authService: AuthService, public loadingCtrl: LoadingController) { }

    signIn() {
        if (this.form.form.valid) {
            this.loadingSpinner.presentLoading();
            this.authService.signIn(this.user)
                .then(() => {
                    this.navCtrl.setRoot(HomePage);
                })
                .catch((error: any) => {
                    this.loadingSpinner.closeLoading();
                    let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
                    if (error.code == 'auth/invalid-email') {
                        toast.setMessage('O e-mail digitado é inválido.');
                    } else if (error.code == 'auth/user-disabled') {
                        toast.setMessage('O usuário está desativado.');
                    } else if (error.code == 'auth/user-not-found') {
                        toast.setMessage('O usuário não foi encontrado.');
                    } else if (error.code == 'auth/wrong-password') {
                        toast.setMessage('A senha digitada não é valida.');
                    } 

                    toast.present();
                });
        }
    }

    resetPassword() {
        this.navCtrl.push(ResetPasswordPage);
    }

}