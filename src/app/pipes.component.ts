import {Component} from "@angular/core";

@Component({
    selector: 'pipes-comp',
    template: `
        <h1>Pipes!!!</h1>
        <h2>My name in {{name | uppercase}} uppercase</h2>
        <h2>Description: {{description | summary:10}}</h2>
    `
})

export class PipesComponent {

    name: string = 'Camilo';
    description: string = 'This is a really cool description';

}