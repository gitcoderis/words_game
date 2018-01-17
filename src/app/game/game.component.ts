import { Component, OnInit } from '@angular/core';

import { RandomizeWordsService } from '../randomize-words.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private _random: RandomizeWordsService) { }

  ngOnInit() {
    this._random.arVeikia();
  }

}
