// Elena: papildomai importuoju Input, ElementRef, tam, kad type script'as suprastu plane js koda.
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { RandomizeWordsService } from '../randomize-words.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  randomWords: any; // laiko random zodzio reiksme
  randomLetters: any; // masyvas random raidems
  wordsDb: any;
  constructor(
    private _random: RandomizeWordsService,
    private elRef: ElementRef) { }

  ngOnInit() {

    // ---------------------------------------------------------
    this.wordsDb = this._random.getAll();
    console.log(this.wordsDb);
    const wordTest = this.wordsDb;
    function test() {
      for (let i = 0; i < wordTest.length; i++) {
        console.log(wordTest[i]);
      }
    }
    test();
    // ----------------------------------------------------------
    // Marius: gauna viena random zodi:
    this.randomWords = this._random.getOneRandomWord().word;
    console.log(this.randomWords);
    // priskiriu kintamajam random_word
    const random_word = this.randomWords;
    // Elena: funkcija tusciam kryziazodziui atvaizduoti
    const container = this.elRef.nativeElement.querySelector('#crossword-grid'); // randa div, kuriame kursiu langelius
    function makeCrossword(x) {
      for (let i = 0; i < x; i++) {
        const letter = document.createElement('div'); // sukuria langelius
        letter.setAttribute('id', '' + i); // priskiria kiekvienam id
        letter.setAttribute('class', 'empty_letter'); // priskiria kiekvienam klase
        letter.style.border = '1px solid #000'; // trys eilutes skirtos aprasyti langeliu stiliui
        letter.style.width = '50px';
        letter.style.height = '50px';
        container.appendChild(letter); // langelius ideda i pagrindini div'a
      }
    }
    // Elena: funkcija raidziu langeliams atvaizduoti
    const contLetter = this.elRef.nativeElement.querySelector('#randomLetters');
    function makeLetterBoxes(x) {
      for (let i = 0; i < x.length; i++) {
        const box = document.createElement('div');
        box.setAttribute('id', 'b' + i);
        box.innerHTML = x[i];
        contLetter.appendChild(box);
        box.style.border = '1px solid #000'; // trys eilutes skirtos aprasyti langeliu stiliui
        box.style.width = '50px';
        box.style.height = '50px';
        box.style.display = 'inline-block';
        box.style.textAlign = 'center';
      }
    }
// funkcija, kuri ismaiso zodzio raides
    function shuffle(word: any) {
      const word_split = word.split('');
      const n = word_split.length;

      for (let i = n - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = word_split[i];
        word_split[i] = word_split[j];
        word_split[j] = tmp;
      }
      return word_split.join('');
    }
// funkcija paspausti ant pasirinktos raides, kad ja irasytu i kryziazodi
    function selectLetter() {
      for (let i = 0; i < shuffled.length; i ++) {
        const empty_letter = document.getElementsByClassName('empty_letter');
        let isCorect = '';
        // ckick ant langeliu su raidemis
         document.getElementById('b' + i).addEventListener('click', function () {
           for (let k = 0; k < random_word.length; k++) {
             if (empty_letter[k].innerHTML === '') {
              empty_letter[k].innerHTML = this.innerHTML;
              this.innerHTML = '';
            }
             if (empty_letter[k].innerHTML === random_word[k]) {
               isCorect += empty_letter[k].innerHTML;
              //  console.log(isCorect);
             }
           }
           // tikrina ar teisingas zodis
           if (isCorect.indexOf(random_word) !== -1) {
             alert('Teisingai');
           }
         });
      }
    }
    // funkcija paspausti ant pasirinktos raides kryziazodyje, kad isvalytu kryziazodzio langeli
    function clearLetter() {
      // click ant kryziazodyje irasytu raidziu
      for (let i = 0; i < random_word.length; i++) {
      const empty_letter = document.getElementsByClassName('empty_letter');
      empty_letter[i].addEventListener('click', function () {
        for (let n = 0; n < shuffled.length; n++) {
          if (document.getElementById('b' + n).innerHTML === '') {
            document.getElementById('b' + n).innerHTML = this.innerHTML;
            this.innerHTML = '';
          }
        }
      });
    }
    }
    const randomLetters = ['a', 'b', 'c', 'd']; // bandomasis raidziu masyvas
    let threeLetters = '';
    // funkcija gauna tris random raides is raidziu masyvo
    function getThreeRandomLetters() {
      let oneLetter;
      for (let i = 0; i < 3; i++) {
        oneLetter = randomLetters[Math.floor(Math.random() * randomLetters.length)];
        threeLetters += oneLetter;
      }
      console.log(threeLetters);
      return threeLetters;
    }
    getThreeRandomLetters();
    const word_letters = random_word + threeLetters;
    const shuffled = shuffle(word_letters); // kintamajam priskiriu gauta zodi ismaisytomis raidemis
    console.log(shuffled);
    makeCrossword(random_word.length); // nupiesia tuscia kryziazodi
    makeLetterBoxes(shuffled); // nupiesia raides apacioje
    selectLetter();
    clearLetter();
  }

}
