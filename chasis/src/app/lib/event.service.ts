import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventBusService {
    subject$: Subject<any>;

    constructor() {
        this.subject$ = new Subject();
    }

    emit(event) {
        this.subject$.next(event);
    }

    on(eventName, action) {
        return this.subject$.pipe(
        filter( (e) => e['name'] === eventName),
        map( (e) => e["data"])).subscribe(action);
    }
}

/*
@Injectable({
  providedIn: 'root',
})
export default class EventBusService {

    subject$: Subject<any>;

    constructor() {
        this.subject$ = new Subject();
    }

    emit(event) {
        this.subject$.next(event);
    }

    on(eventName, action) {
        return this.subject$.pipe(
        filter( (e) => e['name'] === eventName),
        map( (e) => e["data"])).subscribe(action);
    }
}
*/