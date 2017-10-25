import {Component} from "@angular/core";

@Component({
    selector: 'events',
    template: `
        <h1>Events</h1>
        <button (click)="onClickMe()">Click me!</button>
        <p *ngIf="clickMessage">{{clickMessage}}</p>
        <input (keyup)="onKeyUp($event)">
        <input #myInputBox (keyup)="onKeyUpTemplateReferenceVariable(myInputBox.value)">
        <p>{{oneKeyUpMessage}}</p>
    `
})

export class EventsComponent {
    // We use event binding to respond to DOM events
    clickMessage: string;
    oneKeyUpMessage: string = '';

    onClickMe() {
        this.clickMessage = "button clicked!"
    }

    onKeyUp(event:any) {
        this.oneKeyUpMessage = event.target.value;
    }

    onKeyUpTemplateReferenceVariable(value:string) {
        this.oneKeyUpMessage = value;
    }
}