import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CurrentUserService } from '../../../core/services/currentUser.service';
import * as CoreActions from '../../../core/store/actions/core.actions';
import { CoreState } from '../../../core/store/reducer/core.reducer';
import { Configuration } from './../../configuration/app.configuration';

@Component({
    selector: 'app-navigation',
    templateUrl: 'navigation.component.html'
})

export class NavigationComponent {
    coreState$: Observable<CoreState>;

    constructor(
        public configuration: Configuration,
        public currentUserService: CurrentUserService,
        private store: Store<any>) {
        this.coreState$ = this.store.select<CoreState>(state => state.core.coreReducer);
    }

    logout($event: Event) {
        $event.preventDefault();
        this.store.dispatch(new CoreActions.LogoutAction());
    }

    doNothing($event: Event) {
        $event.preventDefault();
    }
}
