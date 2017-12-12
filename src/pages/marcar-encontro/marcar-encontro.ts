import { EncontroService } from './../../providers/encontro-service/encontro-service';
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
    //encontros: Encontro[] = [];

    encontroKey: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
        public encontroService: EncontroService) {
        
            this.encontroKey = null;
            this.encontro;
        
            if (this.navParams.data.encontro) {
              this.encontro = this.navParams.data.encontro;
              this.encontroKey = this.navParams.data.contact.$key;
            }
    }

    marcarEncontro() {
        this.encontro.descricao = this.descricao;
        this.encontro.data = this.data;
        this.encontro.hora = this.hora;
        this.encontro.local = this.local;
        // this.encontros = this.navParams.get('listaEncontros');

        if(this.descricao != undefined && this.data != undefined && this.hora != undefined && this.local != undefined) {
            this.encontroService.save(this.encontro);
            this.navCtrl.push(AgendaPage);
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