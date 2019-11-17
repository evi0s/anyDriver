import { StoreType, DataType, OperatorObjects, Queue, Stack } from "./dataTypes";
import * as lib from './lib';


class anyDriver {

    data: StoreType;

    constructor(_data: StoreType) {
        this.data = _data;
    }

    public set(key: string, value: DataType): boolean {
        return lib._set(this.data, key, value);
    }

    public get(key: string | OperatorObjects): DataType | boolean {
        return lib._get(this.data, key);
    }
}

export {
    anyDriver,
    Queue,
    Stack
}
