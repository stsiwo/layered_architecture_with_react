import { QueryGeneratorBase } from "./QueryGeneratorBase";
import { gql } from "apollo-boost";
import { QueryObjectType } from "./QueryObjectType";

export class GetCartByUserIdQueryGenerator extends QueryGeneratorBase {

    public constructor() {
        super(
            gql`
                query Dog($breed: String!) {
                    dog(breed: $breed) {
                        id
                        displayImage
                    }
                }  
            ` 
            , {
                variables: {
                    breed: "GetCartByUserIdQueryGenerator"
                }
            } as QueryObjectType
        )
    }

}