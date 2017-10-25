import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <events></events>
        <communication [whoAreYou]="iam" (onVoted)="onVote($event)">
            <h3 class="content1">Content projection in action</h3>
            <h4 class="content2">more Content projection</h4>
        </communication>
        The vote is: {{vote}}
        <template-comp></template-comp>
        <service-compo></service-compo>
        <pipes-comp></pipes-comp>
        <router-outlet></router-outlet>
    `,
    styles: []
})
export class AppComponent {

    iam = 'I am you father';
    vote: string = '';

    onVote(agreed: boolean) {
        this.vote = agreed ? 'like' : 'dislike';
    }

}
