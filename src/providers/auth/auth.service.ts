import { LoadingController } from 'ionic-angular';
import { LoadingSpinner } from './../loading-spinner/loading-spinner';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

    user: Observable<firebase.User>;
    loadingSpinner: LoadingSpinner = new LoadingSpinner(this.loadingCtrl);

    constructor(private angularFireAuth: AngularFireAuth, private facebook: Facebook, private loadingCtrl: LoadingController) {
        this.user = angularFireAuth.authState;
    }

    createUser(user: User) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }

    signIn(user: User) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    }

    signInWithFaceBook() {
        return this.facebook.login(['public_profile', 'email'])
            .then((res: FacebookLoginResponse) => {
                return this.angularFireAuth.auth.signInWithCredential(firebase.auth.FacebookAuthProvider
                    .credential(res.authResponse.accessToken));
            });
    }

    signOut(): Promise<any> {
        if (this.angularFireAuth.auth.currentUser.providerData.length) {
            for (var i = 0; i < this.angularFireAuth.auth.currentUser.providerData.length; i++) {
                var provider = this.angularFireAuth.auth.currentUser.providerData[i];

                if (provider.providerId == firebase.auth.FacebookAuthProvider.PROVIDER_ID) {
                    return this.facebook.logout();
                }
            }
        }
        return this.angularFireAuth.auth.signOut();
    }

    resetPassword(email: string) {
        return this.angularFireAuth.auth.sendPasswordResetEmail(email);
    }
}