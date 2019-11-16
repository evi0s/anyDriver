import { Object, StrArrays, ObjArrays, NumArrays, DataType } from "./dataTypes";
import * as lib from './lib';


class anyDriver {

    data: DataType;

    constructor(_data: DataType) {
        this.data = _data;
    }

    public set(key: string, value: string | number | Object | StrArrays | ObjArrays | NumArrays)
        : boolean {
        return lib._set(this.data, key, value);
    }

    public get(key: string)
        : string | number | Object | StrArrays | ObjArrays | NumArrays | boolean {
        return lib._get(this.data, key);
    }
}

export { anyDriver }
