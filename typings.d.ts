declare module 'swaddle' {
    interface IAliases {
        [method: string ]: string;
    }
    interface ISwaddleOpts {
        fn?: Function;
        headers?: Object;
        aliases?: IAliases;
        returnBody?: boolean;
        sendAsBody?: boolean;
        json?: boolean;
        camelCase?: boolean;
        extension?: string;
        whitelist?: string[];
    }
    interface ISwaddleRequestOpts extends ISwaddleOpts {
        body?: any;
    }
    export type SwaddleRequestArgs = string | ISwaddleRequestOpts | any;

    type SwaddleFn<T> = (...opts?: SwaddleRequestArgs[]) => Promise<T>;

    export interface IWrapper {
        get: SwaddleFn<T>;
        post: SwaddleFn<T>;
        put: SwaddleFn<T>;
        patch: SwaddleFn<T>;
        delete: SwaddleFn<T>;
        head: SwaddleFn<T>;
        options: SwaddleFn<T>;
    }
    export default function(url: string, opts?: ISwaddleOpts): ProxyHandler<IWrapper>;
}
