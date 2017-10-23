import { LoadingSpinner } from './../../providers/loading-spinner/loading-spinner';
import { HomePage } from './../home/home';
import { AuthService } from './../../providers/auth/auth.service';
import { User } from './../../providers/auth/user';

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
    selector: 'signup-page',
    templateUrl: 'signup.html'
})

export class SignupPage {
    
    user: User = new User();
    
    @ViewChild('form')
    form: NgForm

    loadingSpinner = new LoadingSpinner(this.loadingCtrl);

    constructor(public navCtrl: NavController, public toastCtrl: ToastController, 
        public authService: AuthService, public loadingCtrl: LoadingController) {

     }

     createAccount() {
         if (this.form.form.valid) {
            this.loadingSpinner.presentLoading();
            let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });

             this.authService.createUser(this.user)
                .then((user: any) => {
                    this.loadingSpinner.presentLoading();
                    user.sendEmailVerification();

                    toast.setMessage('Usuário criado com sucesso!');
                    toast.present();

                    this.navCtrl.setRoot(HomePage);
                })
                .catch((error: any) => {
                    this.loadingSpinner.closeLoading();
                    if (error.code == 'auth/email-already-in-use') {
                        toast.setMessage('O email digitado já está em uso.');
                    } else if (error.code == 'auth/invalid-email') {
                        toast.setMessage('O email digitado não é válido.');
                    } else if (error.code == 'auth/operation-not-allowed') {
                        toast.setMessage('Não está habilitado criar usuários.');
                    } else if (error.code == 'auth/weak-password') {
                        toast.setMessage('A senha digitada é muito fraca.');
                    }
                    //toast.setMessage(error.message); pega a mensagem de erro diretamente do Firebase
                    toast.present();
                });
         }
     }

}