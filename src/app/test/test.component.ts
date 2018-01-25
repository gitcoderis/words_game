import { Component, OnInit } from '@angular/core';
import { RandomizeWordsService } from '../randomize-words.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

   items: any; // laiko firebase duomenis is RandomizeWordsService

  constructor(private _random: RandomizeWordsService) { }

  ngOnInit() {
    this._random.getWords(); // gauna keturiu random zodziu masyva
    this.items = this._random.getDbWords(); // gauna duomenis is firebase
  }

}
