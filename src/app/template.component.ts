import {Component} from "@angular/core";

@Component({
    selector: 'template-comp',
    template: `
        <h1>this is a template expression => {{2 + 3 + 4}}</h1>
        <h2>Since it produces a value</h2>
    `
})

export class TemplateComponent {

}