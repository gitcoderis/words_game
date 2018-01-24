import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Elena: added routing
import { RouterModule } from '@angular/router';
import { routing } from './app.routing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { IntroComponent } from './intro/intro.component';

import { RandomizeWordsService } from './randomize-words.service';
import { TestComponent } from './test/test.component';

// Marius: added firebase:
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    IntroComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    routing,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [RandomizeWordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
