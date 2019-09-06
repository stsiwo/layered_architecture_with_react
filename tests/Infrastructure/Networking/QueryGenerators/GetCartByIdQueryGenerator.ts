import { QueryGeneratorBase } from "./QueryGeneratorBase";
import { gql } from "apollo-boost";
import { QueryObjectType } from "./QueryObjectType";
import { injectable } from "inversify";
import "reflect-metadata"; // only include once, so put entry class in src directory

@injectable()
export class GetCartByIdQueryGenerator extends QueryGeneratorBase {

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
                    breed: "GetCartByIdQueryGenerator",
                }
            } as QueryObjectType
        )
    }

}