import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { NgxElectronModule } from 'ngx-electron';

import { AuthModule, OidcSecurityService, OpenIDImplicitFlowConfiguration } from 'angular-auth-oidc-client';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        ToasterModule,
        AuthModule.forRoot(),
        RouterModule.forRoot(AppRoutes, { useHash: false, preloadingStrategy: PreloadAllModules }),
        SharedModule,
        NgxElectronModule,
        HomeModule,
        CoreModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
    ],

    declarations: [
        AppComponent
    ],

    bootstrap: [AppComponent]
})

export class AppModule {
    constructor(public oidcSecurityService: OidcSecurityService) {

        const openIDImplicitFlowConfiguration = new OpenIDImplicitFlowConfiguration();
        openIDImplicitFlowConfiguration.stsServer = 'http://localhost:5000';
        openIDImplicitFlowConfiguration.redirect_url = 'http://localhost:4200';
        openIDImplicitFlowConfiguration.client_id = 'AngularFoodClient';
        openIDImplicitFlowConfiguration.response_type = 'id_token token';
        openIDImplicitFlowConfiguration.scope = 'openid WebAPI roles profile';
        openIDImplicitFlowConfiguration.post_logout_redirect_uri = 'http://localhost:4200';
        openIDImplicitFlowConfiguration.start_checksession = false;
        openIDImplicitFlowConfiguration.silent_renew = true;
        openIDImplicitFlowConfiguration.silent_renew_offset_in_seconds = 0;
        openIDImplicitFlowConfiguration.post_login_route = '/home';
        // openIDImplicitFlowConfiguration.forbidden_route = '/Forbidden';
        // openIDImplicitFlowConfiguration.unauthorized_route = '/Unauthorized';
        openIDImplicitFlowConfiguration.auto_userinfo = true;
        openIDImplicitFlowConfiguration.log_console_warning_active = true;
        openIDImplicitFlowConfiguration.log_console_debug_active = true;
        openIDImplicitFlowConfiguration.max_id_token_iat_offset_allowed_in_seconds = 10;
        openIDImplicitFlowConfiguration.override_well_known_configuration = false;
        // openIDImplicitFlowConfiguration.override_well_known_configuration_url = 'https://localhost:44386/wellknownconfiguration.json';
        // openIDImplicitFlowConfiguration.storage = localStorage;

        this.oidcSecurityService.setupModule(openIDImplicitFlowConfiguration);

        // if you need custom parameters
        // oidcSecurityService.setCustomRequestParameters({ 't4': 'ABC abc 123', 't3': 'wo' });
    }
}
