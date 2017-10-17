import { AgendaPage } from './../agenda/agenda';
import { NavController, NavParams, AlertController, NavOptions } from 'ionic-angular';
import { Component } from '@angular/core';

import { Encontro } from './../../providers/encontro';

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

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
        
    }

    marcarEncontro() {
        this.encontro.descricao = this.descricao;
        this.encontro.data = this.data;
        this.encontro.hora = this.hora;
        this.encontro.local = this.local;

        // this.encontros = this.navParams.get('listaEncontros');

        if(this.descricao != undefined && this.data != undefined && this.hora != undefined && this.local != undefined) {
            this.encontros.push(this.encontro);
            this.navCtrl.push(AgendaPage, {
                param: this.encontros
            });
        } else {
            this.showAlert();
        }
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