import { Component, OnInit } from '@angular/core';
import { RandomizeWordsService } from '../randomize-words.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private _random: RandomizeWordsService) { }

  ngOnInit() {

    this._random.getWords();

  }

}
