import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { GameComponent } from './game/game.component';
import { IntroComponent } from './intro/intro.component';
import { TestComponent } from './test/test.component';

const APP_Routes: Routes = [
    { path: '', component: IntroComponent },
    { path: 'game', component: GameComponent },
    { path: 'test', component: TestComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_Routes);
