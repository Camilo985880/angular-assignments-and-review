import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'communication',
    template: `
        <h1>The answer is: {{whoAreYou}}</h1>
        <button (click)="vote(true)">Like</button>
        <button (click)="vote(false)">dislike</button>
        <ng-content select=".content1"></ng-content>
        <ng-content select=".content2"></ng-content>
    `
})

export class InputOutputComponent {

    @Input() whoAreYou: string;
    @Output() onVoted = new EventEmitter<boolean>();

    vote(agreed:boolean) {
        this.onVoted.emit(agreed)
    }

}