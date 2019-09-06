import gql from 'graphql-tag';
import { INetwork } from '../Networking/INetwork';
import { TYPES } from '../../DI/types';
import { inject } from 'inversify';
import { QueryTypeConstants } from './QueryTypeConstants';

interface CartType = {
    id: string,
        displayImage: string;
};

interface GetCartByIdDataType = {
    dog: CartType[];
};

interface GetCartByIdVariablesType = {
    breed: string;
}

export class CartQuery implements ICartQuery {

    private _network: INetwork;

    public constructor(
        @inject(TYPES.INetwork) network: INetwork
    ) {
        this._network = network;
    }

    public getCartById(id: string): object {
        return this._network.requestQuery<GetCartById(QueryTypeConstants.GetCartById, : string);
    }
}
