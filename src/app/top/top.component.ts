import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { PlayerService } from './shared/player.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
  players: any;
  key: any;
  constructor(private tS: PlayerService) { }

  ngOnInit() {
    this.players = this.tS.getAll();
    console.log(this.players);
  }
  onDelete(raktas: string) {
    this.tS.delete(raktas);
  }
}

