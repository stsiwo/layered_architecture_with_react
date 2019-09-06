import { gql } from "apollo-boost";
import { injectable } from "inversify";
import "reflect-metadata"; // only include once, so put entry class in src directory
import { IQueryGenerator } from "../IQueryGenerator";

@injectable()
export class GetCartByIdQueryGenerator implements IQueryGenerator {

    generate<DataType>(): DataType {
        return (
            gql`
                query Dog($breed: String!) {
                    dog(breed: $breed) {
                        id
                        displayImage
                    }
                }
            `);
    }
}
