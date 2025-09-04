import { Routes } from '@angular/router';
import { FirstThing } from './first-thing/first-thing.component';
import { SecondThing } from './second-thing/second-thing.component';
import { ThirdThing } from './third-thing/third-thing.component';
import { FourthThing } from './fourth-thing/fourth-thing.component';
import { ProductsList } from './products-list/products-list.component';
import { Todos } from './todos/todos.component';


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
    },
    {
        path: "productos",
        component: ProductsList
    },
    {
        path:"todos",
        component: Todos
    }

];
