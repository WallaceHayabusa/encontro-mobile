import { LoadingController, Loading } from "ionic-angular";

export class LoadingSpinner {

    loading: Loading;

    constructor(public loadingCtrl: LoadingController) {

    }

    presentLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor aguarde...',
            spinner: 'bubbles',
            dismissOnPageChange: true,
            enableBackdropDismiss: false
        });

        this.loading.present();

        /*setTimeout(() => {
            loading.dismiss();
        }, 3000) */
    }

    presentLoadingCustom(time: number) {
        this.loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content:`
                <div class="custom-spinner-container">
                    <div class="custom-spinner-box">Por favor aguarde.</div>
                </div>
            `,
            duration: time,
        });
        this.loading.present();
    }

    closeLoading(){
        this.loading.dismiss();
    }
}