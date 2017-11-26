import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Component } from '@angular/core';

import { Configuration } from './shared/configuration/app.configuration';

@Component({
    selector: 'foodChooser-app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    title: string;

    constructor(public oidcSecurityService: OidcSecurityService, public configuration: Configuration) {
        this.title = configuration.title;
        if (this.oidcSecurityService.moduleSetup) {
            this.doCallbackLogicIfRequired();
        } else {
            this.oidcSecurityService.onModuleSetup.subscribe(() => {
                this.doCallbackLogicIfRequired();
            });
        }
    }

    private doCallbackLogicIfRequired() {
        if (window.location.hash) { // <-- add gartenhaken here, too
            this.oidcSecurityService.authorizedCallback();
        }
    }
}
