import { Injectable } from '@angular/core';


//importuoja zaidimo zodziu faila:
import * as data from '../assets/js/words.json';

//firebase:
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RandomizeWordsService {

 word:any = (<any>data); //gauna duomenis is json failo
 randWord: any;
 randomWords: any = []; //galutinis masyvas, kuriame laikomi 4 random žodžiai

  items: any; //laiko firebase duomenis
  words_db: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {
    this.items = db.list('words');
    this.words_db = db.list('words');
   }


   // ---------------------------------------------------------------------------------
   // Elena: bandau gauti duomenis is firedatabase
  getAll() {
    return this.words_db.snapshotChanges().map(
      changes => {
        return changes.map(
          mainChanges => ({
            key: mainChanges.payload.key,
            ...mainChanges.payload.val()
          })
        );
      }
    );
  }
  getOneTodo(key: any) {
    const wordsDb = `/words/${key}`;
    return this.db.object(wordsDb).snapshotChanges();
  }
// ---------------------------------------------------------------------------------------


  getOneRandomWord() {
    let oneRandomWord = this.word[Math.floor(Math.random() * this.word.length)];
    return oneRandomWord;

  }

  //gauna random zodi ir tikrina ji
  getRandomWords() {
  //  this.randWord = this.items[Math.floor(Math.random() * this.items.length) + 1];
   this.randWord = this.word[Math.floor(Math.random() * this.word.length)];
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
