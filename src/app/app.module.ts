import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EventsComponent} from "./events.component";
import {InputOutputComponent} from "./input-output.component";
import {TemplateComponent} from "./template.component";
import {ServiceComponent} from "./service.component";
import {TestService} from "./test.service";
import {HttpModule} from "@angular/http";
import {PipesComponent} from "./pipes.component";
import {CustomPipe} from "./custom.pipe";
import {RoutingNavigationComponent} from "./routing-navigation.component";
import {NavigateComponent} from "./navigate.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent,
        EventsComponent,
        InputOutputComponent,
        TemplateComponent,
        ServiceComponent,
        PipesComponent,
        CustomPipe,
        RoutingNavigationComponent,
        NavigateComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [TestService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
