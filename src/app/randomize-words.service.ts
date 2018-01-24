import { Injectable } from '@angular/core';


//importuoja zaidimo zodziu faila:
import * as data from '../assets/js/words.json';

//firebase:
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RandomizeWordsService {

 word:any = (<any>data); //gauna duomenis is json failo
 randWord: any;
 randomWords: any = []; //galutinis masyvas, kuriame laikomi 4 random žodžiai

  items: any; //laiko firebase duomenis
  constructor(private db: AngularFireDatabase) {
    this.items = db.list('words');
   }

  getOneRandomWord() {
    let oneRandomWord = this.word[Math.floor(Math.random() * this.word.length) + 1];
    return oneRandomWord;

  }

  //gauna random zodi ir tikrina ji
  getRandomWords() {
  //  this.randWord = this.items[Math.floor(Math.random() * this.items.length) + 1];
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

  getDbWords() {
    return this.items.valueChanges();
  }
}
