import { Injectable } from '@angular/core';

//importuoja zaidimo zodziu faila:
import * as data from '../assets/js/words.json';

@Injectable()
export class RandomizeWordsService {

 word:any = (<any>data);
 randomWords: any = [];

  constructor() { }

  getOneRandomWord() {
    let oneRandomWord = this.word[Math.floor(Math.random() * this.word.length) + 1];
    return oneRandomWord;

  }

  words() {

    for(let i = 0; i < 4; i++) {
      let getRandomWord = this.word[Math.floor(Math.random() * this.word.length) + 1];

      if(this.randomWords.length === 0) {
        this.randomWords.push(getRandomWord);

      } else {
        for(let j = 0; j < this.randomWords.length; j++){
          if(getRandomWord === this.randomWords[j]) {
            console.log(this.randomWords[j]);

          } else {
            this.randomWords.push(getRandomWord);
            // console.log('hello');
          }
        }

      }

    }
    console.log(this.randomWords);
    // console.log(this.randomWords.length);
    // console.log(this.getRandomWord);
    // console.log(this.randomWords);


  }
}
