import { NavController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';

import { Encontro } from './../../app/encontro/encontro';

@Component({
    selector: 'marcar-encontro-page',
    templateUrl: './marcar-encontro.html'
})
export class MarcarEncontroPage {

    descricao: string;
    data: Date;
    hora: Date;
    local: string;
    encontro: Encontro = new Encontro();
    encontros: Encontro[] = [];

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    }

    marcarEncontro() {
        this.encontro.descricao = this.descricao;
        this.encontro.data = this.data;
        this.encontro.hora = this.hora;
        this.encontro.local = this.local;

        if(this.descricao == null || this.data == null || this.hora == null || this.local == null) {
            this.showAlert();
        }
            this.encontros.push(this.encontro);

    }

    showAlert() {
        let alert = this.alertCtrl.create({
          title: 'Erro',
          subTitle: 'Preencha todos os campos!',
          buttons: ['OK']
        });
        alert.present();
      }

}