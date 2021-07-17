/*
    SenseLogs TypeScript definitions
*/

type Destination = {
    write: (log: SenseLogs, context: {}) => void
};

type ConstructorOptions = {
    destination?: string | Destination
    filter?: string | string[]
    levels?: string | string[]
    name?: string
    redact?: (context: {}) => void
    timestamp?
};

export default class SenseLogs {
    context: {};
    constructor(options?: ConstructorOptions, context?: {});
    addContext(contexts: {} | {}[]): SenseLogs;
    addDestination(dest: function): SenseLogs;
    addFilter(filter: string | string[]): SenseLogs;
    addLevels(levels: string | string[]): SenseLogs;
    child(context?: {}): SenseLogs;
    clearContext(): SenseLogs;
    emit(level: string, message: string, context?: {}): void;
    flush(): {}[];
    metrics(namespace: string, values: {}, dimensions?: any[][]): void;
    setFilter(filter: string | string[]): SenseLogs;
    setOverride(filter: string | string[]): SenseLogs;
    setSample(filter: string | string[]): SenseLogs;

    //  Default levels
    data(message: string | Error, context?: {}): void;
    debug(message: string | Error, context?: {}): void;
    error(message: string | Error, context?: {}): void;
    fatal(message: string | Error, context?: {}): void;
    info(message: string | Error, context?: {}): void;
    trace(message: string | Error, context?: {}): void;
    warn(message: string | Error, context?: {}): void;
};
