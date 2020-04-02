import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GIECComponent } from './giec.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'GIEC', component: GIECComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);