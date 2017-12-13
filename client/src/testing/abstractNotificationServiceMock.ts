import { MessageType } from '../app/core/services/notification.service';

export class AbstractNotificationServiceStub {
    showNotification(
        type: MessageType,
        title: string,
        message: string,
        icon?: string
    ): void {
        console.log(type);
        console.log(title);
        console.log(message);
        console.log(icon);
    }
}
