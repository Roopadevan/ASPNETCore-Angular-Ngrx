import { Component, NgZone } from '@angular/core';

import { CpuValueService } from '../../core/services/cpuValue.service';
import { PlatformInformationProvider } from '../../core/services/platformInformation.provider';

@Component({
    selector: 'emeal-footer',
    templateUrl: 'eMeal-footer.component.html'
})

export class EMealFooterComponent {

    percentage: number;

    constructor(
        cpuValueService: CpuValueService,
        public platformInformationProvider: PlatformInformationProvider,
        ngZone: NgZone) {

        cpuValueService.onNewCpuValue.subscribe((cpuValue: number) => {
            ngZone.run(() => {
                this.percentage = cpuValue;
            });
        });
    }
}
