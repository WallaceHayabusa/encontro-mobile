import { NgForm } from '@angular/forms';
import { AuthService } from './../../providers/auth/auth.service';
import { NavController, ToastController } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'reset-password-page',
    templateUrl: './resetpassword.html'
})

export class ResetPasswordPage {

    userEmail: string = '';

    @ViewChild('form')
    form: NgForm;

    constructor(public navCtrl: NavController, public toastCtrl: ToastController,
        public authService: AuthService) { 

    }

    resetPassword() {
        if (this.form.form.valid) {
            let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
            this.authService.resetPassword(this.userEmail)
                .then(() => {
                    toast.setMessage('Solicitação foi enviada para o seu e-mail.');
                    toast.present();

                    this.navCtrl.pop();
                })
                .catch((error: any) => {
                    if (error.code == 'auth/invalid-email') {
                        toast.setMessage('O e-mail digitado não é valido.');
                    } else if (error.code == 'auth/user-not-found') {
                        toast.setMessage('O usuário não foi encontrado.');
                    }

                    toast.present();
                });
        }
    }

}