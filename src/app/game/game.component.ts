// Elena: papildomai importuoju Input, ElementRef, tam, kad type script'as suprastu plane js koda.
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { RandomizeWordsService } from '../randomize-words.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(
    private _random: RandomizeWordsService,
    private elRef: ElementRef) { }

  ngOnInit() {

    this._random.words();

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
      console.log(document.getElementsByClassName('empty_letter'));
      console.log(container);
    }
    makeCrossword(6);
    // funkcija skirta atvaizduoti raides langeliuos... Dar neveikia, todėl uzkomentuoju
    // function selectLetter(x) {
    //   let first_empty = document.getElementById('0').innerHTML;
    //   first_empty = document.getElementById(x).innerHTML;
    // }

  }

}
