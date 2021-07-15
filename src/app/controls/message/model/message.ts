import { Messagetype } from './messagetype.enum';
export class Message {
    public message: string;
    public type: Messagetype;

    constructor(message: string, type: Messagetype) {
        this.message = message;
        this.type = type;
    }
}
