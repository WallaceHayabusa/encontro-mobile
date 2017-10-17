import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

import { MarcarEncontroPage } from './../marcar-encontro/marcar-encontro';
import { Encontro } from './../../providers/encontro';

@Component({
    selector: 'agenda-page',
    templateUrl: './agenda.html'
})
export class AgendaPage {

    encontros: Encontro[] = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.encontros = this.navParams.get('param');
    }

    goToMarcarEncontro() {
        this.navCtrl.push(MarcarEncontroPage, {
            listaEncontros: this.encontros
        });
    }


}