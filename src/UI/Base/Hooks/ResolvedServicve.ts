import { useState, useEffect } from "react";
import { myContainer } from "../../../DI/IocContainerConfig";

/**
 * resolve a dependency in react functional component (techinically this is not React Hook) 
 * 
 * @param type
 */
export const useResolvedService = <T>(type: symbol): T => {
    return myContainer.get<T>(type); 
}