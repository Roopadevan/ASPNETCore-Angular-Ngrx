import { Configuration } from './../../configuration/app.configuration';
import { Component } from '@angular/core';

@Component({
    selector: 'navigation',
    templateUrl: 'navigation.component.html'
})

export class NavigationComponent {

    constructor(public configuration: Configuration) { }

    doNothing($event: any) {
        $event.preventDefault();
    }
}
