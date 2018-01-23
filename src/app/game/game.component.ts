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
  constructor(
    private _random: RandomizeWordsService,
    private elRef: ElementRef) { }

  ngOnInit() {

    // Marius: gauna viena random zodi:
    this.randomWords = this._random.getOneRandomWord().word;
    console.log(this.randomWords);

    // Elena: pradedu rasyti funkcija kryziazodziui atvaizduoti
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
    // Elena: pradedu rasyti funkcija raidziu langeliams atvaizduoti
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
      }
    }
    const shuffled = shuffle(this.randomWords); // kintamajam priskiriu gauta zodi ismaisytomis raidemis
    makeCrossword(this.randomWords.length);
    makeLetterBoxes(shuffled);
// ismaiso zodzio raides
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
    // funkcija raidems irasyti i tuscius langelius
    function selectLetter(id) {
      const selected_letter = document.getElementById(id).innerHTML;
      const empty_letter = document.getElementById('0');
      empty_letter.innerHTML = selected_letter;
    }
  }

}
