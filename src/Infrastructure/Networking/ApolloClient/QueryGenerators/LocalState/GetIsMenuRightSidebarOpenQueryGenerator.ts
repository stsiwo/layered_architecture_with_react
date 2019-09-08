import { gql, DocumentNode } from "apollo-boost";
import { injectable } from "inversify";
import "reflect-metadata"; // only include once, so put entry class in src directory
import { IQueryGenerator } from "../IQueryGenerator";

@injectable()
export class GetIsMenuRightSidebarOpenQueryGenerator implements IQueryGenerator {

    generate<DataType>(): DocumentNode {
        return (
            gql`
                query GetIsMenuRightSidebarOpen {
					isMenuRightSidebarOpen @client
                }
            `);
    }
}
