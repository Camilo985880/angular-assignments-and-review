import {Component, OnInit} from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'nav-compo',
    template: `
        <h1>Finally Navigating!!!</h1>
        <h2>And the value is: {{value}}</h2>
    `
})

export class NavigateComponent implements OnInit {

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => params.get('id'))
            .subscribe(id => this.value = +id);
    }

    constructor(
        private route: ActivatedRoute
    ) {}

    value: number = 0;

}