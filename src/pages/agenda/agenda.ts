import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

import { MarcarEncontroPage } from './../marcar-encontro/marcar-encontro';

@Component({
    selector: 'agenda-page',
    templateUrl: './agenda.html'
})
export class AgendaPage {

    encontros: Array<String>;

    constructor(public navCtrl: NavController) {
        
    }

    goToMarcarEncontro() {
        this.navCtrl.push(MarcarEncontroPage);
    }
}