import { IDomainEvent } from "./IDomainEvent";

export class DE2 implements IDomainEvent {

    public address: string;

    public hobby: string;

    public constructor(address: string, hobby: string) {
        this.address = address;
        this.hobby = hobby;
    }
}