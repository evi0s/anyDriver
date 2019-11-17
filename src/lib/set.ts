import { StoreType, DataType }  from "../dataTypes";

function _set(data: StoreType, key: string, value: DataType)
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
