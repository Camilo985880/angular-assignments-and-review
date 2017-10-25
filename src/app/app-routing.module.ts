import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NavigateComponent} from "./navigate.component";

const routes: Routes = [
    {
        path: 'nav/:id',
        component: NavigateComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}