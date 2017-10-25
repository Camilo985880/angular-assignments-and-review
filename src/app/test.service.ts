import {Injectable} from "@angular/core";
import {TestObject} from "./TestObject";
import {TEST_OBJECTS} from "./mock-test-object";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class TestService {

    constructor(private http:Http) {}

    // Using Promise
    getTestObjects(): Promise<TestObject[]> {
        return Promise.resolve(TEST_OBJECTS);
    }

    getActivities(): Observable<any> {
        return this.http.get('https://api.github.com/users/jlooper/events')
            .flatMap(res => res.json());
    }

    getTestObjectsObservable(): Observable<any> {
        return Observable.of(TEST_OBJECTS);
    }

}