import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { GameComponent } from './game/game.component';
import { IntroComponent } from './intro/intro.component';

const APP_Routes: Routes = [
    { path: '', component: IntroComponent },
    { path: 'game', component: GameComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_Routes);
