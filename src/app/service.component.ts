import {Component, OnInit} from "@angular/core";
import {TestService} from "./test.service";
import {TestObject} from "./TestObject";
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Component({
    selector: 'service-compo',
    template: `
        <h1>----------------------</h1>
        <h1>Normal service</h1>
        <ul>
            <li *ngFor="let object of testObjects">
                {{object.id}} - {{object.name}}
            </li>
        </ul>
        <h4>Another list</h4>
        <ul>
            <li *ngFor="let aData of data">
                {{aData.name}}
            </li>
        </ul>
        <h4>Again but better</h4>
        <ul>
            <li *ngFor="let aData of moreAndMore">
                {{aData.id}} - {{aData.name}}
            </li>
        </ul>
        <h4>More Data</h4>
        <ul>
            <li *ngFor="let aData of moreData">
                {{aData.id}}
            </li>
        </ul>
    `
})

export class ServiceComponent implements OnInit {

    constructor(
        private testService: TestService,
        http: Http
    ) {
        http.get('http://jsonplaceholder.typicode.com/users/')
            .flatMap(data => data.json())
            .subscribe(data => {
                this.data.push(data);
            });
    }

    ngOnInit(): void {
        this.resolveTestObjects();
        this.resolveTestObjectsAgainBetter();
        this.resolveMoreData();
    }

    testObjects: TestObject[];
    data = [];
    moreData = [];
    moreAndMore = [];

    resolveTestObjects(): void {
        this.testService.getTestObjects()
            .then(objects => this.testObjects = objects);
    }

    resolveMoreData(): void {
        this.testService.getActivities().subscribe(
            data => this.moreData.push(data)
        );
    }

    resolveTestObjectsAgainBetter(): void {
        this.testService.getTestObjectsObservable().subscribe(
            data => this.moreAndMore = data
        );
    }
}