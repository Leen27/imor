declare function buildProxy(poj: any, callback: (data: {
    action: 'set' | 'get' | 'delete';
    path: string;
    target: any;
    newValue: any;
    previousValue: any;
}) => any, tree?: never[]): any;
export default buildProxy;
