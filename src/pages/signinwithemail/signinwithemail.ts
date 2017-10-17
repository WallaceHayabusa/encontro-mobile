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

    @ViewChild('form')
    form: NgForm;

    constructor(public navCtrl: NavController, public toastCtrl :ToastController,
        public authService: AuthService) { }

    signIn() {
        if (this.form.form.valid) {
            this.authService.signIn(this.user)
                .then(() => {
                    this.navCtrl.setRoot(HomePage);
                })
                .catch((error: any) => {
                    let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
                    if (error.code == 'auth/invalid-email') {
                        toast.setMessage('auth/invalid-email.');
                    } else if (error.code == 'auth/user-disabled') {
                        toast.setMessage('O usuário está desativado.');
                    } else if (error.code == 'auth/user-not-found') {
                        toast.setMessage('O usuário não foi encontrado.');
                    } else if (error.code == 'auth/wrong-password') {
                        toast.setMessage('A senha digitada não é valida.');
                    } 
                });
        }
    }

    resetPassword() {
        this.navCtrl.setRoot(ResetPasswordPage);
    }

}