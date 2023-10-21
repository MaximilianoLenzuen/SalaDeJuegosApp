import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss']
})
export class AhorcadoComponent {
  user: any = null;
  buttonLetters: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'Ñ',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  victory: boolean = false;
  activeGame: boolean = true;
  attempts: number = 6;
  image: number | any = 0;
  word: string = '';
  hyphenatedWord: string[] = [];

  listOfWords: string[] = [
    'ESMERALDA',
    'PERRO',
    'DIAMANTE',
    'DEMOCRACIA',
    'AVE',
    'PALOMA',
    'INVASOR',
    'AEREO',
    'SALSA',
    'CAOS',
    'TERRATENIENTE',
    'ESCALERA',
  ];
  
  constructor(
    private router: Router,
  ) {
    this.word =
      this.listOfWords[
        Math.round(Math.random() * (this.listOfWords.length - 1))
      ];
    this.hyphenatedWord = Array(this.word.length).fill('_');
  }

  volverAHome() {
    this.router.navigate(['/home']);
  }
  
  ngOnInit(): void {

  }

  restartGame() {
    this.word =
      this.listOfWords[
        Math.round(Math.random() * (this.listOfWords.length - 1))
      ];
    this.hyphenatedWord = Array(this.word.length).fill('_');
    this.activeGame = true;
    this.attempts = 6;
    this.image = 0;
    this.victory = false;
  } // end of restartGame

  sendLetter(letter: string) {
    let letterFlag: boolean = false;
    let winGame: boolean = false;

    if (this.activeGame) {
      const alreadyGuessedLetterFlag: boolean = this.hyphenatedWord.some(
        (c) => c === letter
      );
      for (let i = 0; i < this.word.length; i++) {
        const wordLetter = this.word[i];
        if (wordLetter === letter && !alreadyGuessedLetterFlag) {
          this.hyphenatedWord[i] = letter;
          letterFlag = true;
          winGame = this.hyphenatedWord.some((hyphen) => hyphen == '_');
          if (!winGame) {
            this.image = this.image + '_v';
            this.activeGame = false;
            this.victory = true;
            this.createResult();
            break;
          }
        }
      }

      if (!letterFlag && !alreadyGuessedLetterFlag) {
        if (this.attempts > 0) {
          this.attempts--;
          this.image++;
          if (this.attempts === 0) {
            this.activeGame = false;
            this.createResult();
          }
        }
      } else if (alreadyGuessedLetterFlag) {
      } else if (letterFlag) {
        if(!this.victory) {
        }
      }
    } else {
        
    }
  } // end of sendLetter

  createResult() {
    let date = new Date();
    let currentDate = date.toLocaleDateString();
    let result = {
      game: 'ahorcado',
      user: this.user,
      currentDate: currentDate,
      vitory: this.victory,
    };
  } 
}
