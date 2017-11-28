import { EventEmitter, Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

import { PlatformInformationProvider } from './platformInformation.provider';

@Injectable()
export class CpuValueService {

    public onNewCpuValue = new EventEmitter<string>();

    constructor(
        private electronService: ElectronService,
        platformInformationProvider: PlatformInformationProvider) {

        if (platformInformationProvider.isElectron) {
            this.registerCpuEvent();
        }
    }

    private registerCpuEvent() {
        if (this.electronService.ipcRenderer) {
            this.electronService.ipcRenderer.on('newCpuValue', (event: any, data: any) => {
                console.log(event);
                this.onNewCpuValue.emit(data);
            });
        }
    }
}
