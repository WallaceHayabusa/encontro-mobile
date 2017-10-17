import { AuthService } from './../../providers/auth/auth.service';
import { NavController, ToastController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'reset-password-page',
    templateUrl: './resetpassword.html'
})

export class ResetPasswordPage {
    constructor(public navCtrl: NavController, public toastCtrl: ToastController,
        public authService: AuthService) { 

    }

}