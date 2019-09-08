import { myContainer } from "./IocContainerConfig";

/**
 * (hard to combine with react functional component so currently not using this)
 * bind registered components in IocContainer with a function 
 * 
 * @param func
 * @param dependencies
 */
export const bindDependencies = (func: (...args: any) => any, dependencies: any[]) => {
    let injections = dependencies.map((dependency: any) => {
        return myContainer.get(dependency);
    });
    return func.bind(func, ...injections);
}