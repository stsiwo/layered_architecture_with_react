import { IDomainEvent } from "./IDomainEvent";

export class DE1 implements IDomainEvent {

    public name: string;

    public price: number;

    public constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}