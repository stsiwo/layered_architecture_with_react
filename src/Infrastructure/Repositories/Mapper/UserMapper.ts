import { injectable } from "inversify";
import { IMapper } from "./IMapper";
import { User } from "../../../Domain/UserAgg";

@injectable()
export class UserMapper implements IMapper<User> {

    mapToAggregate<SrcType>(src: SrcType): User {
        throw new Error("Method not implemented.");
    }    mapTo<DestType>(src: User): DestType {
        throw new Error("Method not implemented.");
    }
}