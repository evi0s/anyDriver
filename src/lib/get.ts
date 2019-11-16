import { Object, StrArrays, ObjArrays, NumArrays, DataType } from "../dataTypes";

function _get(data: DataType, key: string)
    : string | number | Object | StrArrays | ObjArrays | NumArrays | boolean {

    if (!(key in data)) {
        return false;
    }

    try {
        return data[key];
    } catch (err) {
        console.error(err);
        return false;
    }
}

export { _get };
