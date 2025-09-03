import { Routes } from '@angular/router';
import { FirstThing } from './first-thing/first-thing.component';
import { SecondThing } from './second-thing/second-thing.component';
import { ThirdThing } from './third-thing/third-thing.component';
import { FourthThing } from './fourth-thing/fourth-thing.component';

export const routes: Routes = [
    {
        path: "",
        component:  FirstThing
    },
    {
        path: "second-thing",
        component: SecondThing
    },
    {
        path: "third-thing",
        component: ThirdThing
    },
    {
        path: "fourth-thing",
        component: FourthThing
    }

];
