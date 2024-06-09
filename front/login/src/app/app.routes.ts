import { Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { CorpoComponent } from './components/corpo/corpo.component';

export const routes: Routes = [
    {
        path: '**',
        component:CorpoComponent
    },
    {
        path: '',
        component:CorpoComponent
    },
    {
        path: 'body',
        component:BodyComponent
    },
    {
        path: 'view',
        loadComponent:()=>import('./components/body/body.component').then(m=>m.BodyComponent)
    }
];
