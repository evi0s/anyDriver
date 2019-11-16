import { Object, StrArrays, ObjArrays, NumArrays, DataType } from "../dataTypes";

function _set(data: DataType, key: string, value: string | number | Object | StrArrays | ObjArrays | NumArrays)
    : boolean {
    try {
        data[key] = value;
    } catch (err) {
        console.error(err);
        return false;
    }
    return true;
}

export { _set };
