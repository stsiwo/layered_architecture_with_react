import { IAggregate } from "../../../Domain/Base/IAggregate";

export interface IMapper<T extends IAggregate> {

    mapToAggregate<SrcType>(src: SrcType): T;  

    mapTo<DestType>(src: T): DestType;  
}