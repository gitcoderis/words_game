import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { IntroComponent } from './intro/intro.component';

import { RandomizeWordsService } from './randomize-words.service';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  providers: [RandomizeWordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
