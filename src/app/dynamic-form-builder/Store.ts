import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { distinctUntilChanged, pluck } from 'rxjs/operators';

const state: State = {
    stateObj: undefined
};

export class Store {

    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable().pipe(distinctUntilChanged());

    get value() {
        return this.subject.value;
    }

    set(name: string, state: any) {
        this.subject.next({
            ...this.value, [name]: state
        });
    }

    select<T>(name: string): Observable<T> {
        return this.store.pipe(pluck(name));
    }


}


export interface State {
    stateObj: any[];
}