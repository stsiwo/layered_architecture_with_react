interface NetworkResponseType {
    data: object | any[];
    error?: NetworkErrorType;
}

interface NetworkErrorType {
    message: string;
}