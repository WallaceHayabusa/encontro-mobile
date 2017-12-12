import { Encontro } from './../encontro';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class EncontroService {

    private path = '/encontros';
    itens: FirebaseListObservable<any[]>;
    encontro: Encontro;

    constructor(private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth, private fb: FirebaseApp) {
        this.path += this.angularFireAuth.auth.currentUser.uid;
        this.itens = db.list(this.path, {
          query: {
            orderByChild: 'encontro.descricao'
            //, equalTo: 'A' para fazer query com valor igual a "A"
          }
        });
      }

      public save(iten: any) {
        return new Promise((resolve, reject) => {
          if(iten.key) {
            this.db.object(this.path)
              .update({ descricao: this.encontro.descricao, data: this.encontro.data, hora: this.encontro.hora, 
                  local: this.encontro.local })
              .then(() => resolve())
              .catch((e) => reject(e));
          } else {
            this.db.list(this.path)
              .push({ descricao: this.encontro.descricao, data: this.encontro.data })
              .then(() => resolve());
          }
        })
      }

      private remove(iten: any) {
        return this.itens.remove(iten.$key);
      }
}