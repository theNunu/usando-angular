import { Routes } from '@angular/router';
import { FirstThing } from './first-thing/first-thing.component';
import { SecondThing } from './second-thing/second-thing.component';

export const routes: Routes = [
    {
        path: "",
        component:  FirstThing
    },
    {
        path: "",
        component: SecondThing
    }
];
