import { Injectable } from '@angular/core';

//importuoja zaidimo zodziu faila:
import * as data from '../assets/js/words.json';

@Injectable()
export class RandomizeWordsService {

 word:any = (<any>data);
 randWord: any;
 randomWords: any = [];

  constructor() { }

  getOneRandomWord() {
    let oneRandomWord = this.word[Math.floor(Math.random() * this.word.length) + 1];
    return oneRandomWord;

  }

  //gauna random zodi ir tikrina ji
  getRandomWords() {
    this.randWord = this.word[Math.floor(Math.random() * this.word.length) + 1];
    this.checkWords(this.randWord);
  }

  //tikrina, ar random zodis jau yra masyve. Jei yra - ipushina, jei ne - kviecia getRandomWords funkcija is naujo.
  checkWords(word: any) {
    if(this.randomWords.length === 0) {
      this.randomWords.push(word);
      this.getRandomWords();
      return false;
    }
    for(let i = 0; i < 4; i++) {
      if(word === this.randomWords[i]){
        this.getRandomWords();
        return false;
      } else {
        this.randomWords.push(word);
        i = 4;
        if(this.randomWords.length === 4) {
            this.displayWords();
            return false;
        } else {
          this.getRandomWords();
          return false;
        }
      }
    }


  }

  getWords() {


    this.getRandomWords();
  
  }

  displayWords() {
    console.log(this.randomWords);
  }
}
