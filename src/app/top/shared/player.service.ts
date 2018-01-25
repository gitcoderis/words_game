/**
 * Created by Indrė on 2018-01-25.
 */
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
import { Player } from './player';
import 'rxjs/add/operator/map';
@Injectable()
export class PlayerService {
  players: AngularFireList<any>;
  player: any;
  constructor(private afd: AngularFireDatabase) {
    this.player = afd.list('players');
  }
  getAll() {
    return this.player.snapshotChanges().map(
      changes => {
        return changes.map(
          belekas => ({
            key: belekas.payload.key,
            ...belekas.payload.val()
          })
        );
      }
    );
  }
  getOneTodo(key: any) {
    const todoPath = `players/${key}`;
    return this.afd.object(todoPath).snapshotChanges();
  }
  create(form: any) {
    this.players.push(form);
  }
  update(key: any, form: any) {
    this.players.update(key, form);
  }
  delete(spynele: string) {
    this.players.remove(spynele);
    console.log('it\'s deleted!');
  }
}
