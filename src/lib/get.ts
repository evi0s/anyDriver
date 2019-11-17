import { StoreType, DataType, OperatorObject, Operator }  from "../dataTypes";


function _get(data: StoreType, key: string | OperatorObject)
    : DataType | boolean {

    if (typeof key === "string") {
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

    // TODO: MongoDB like document query
}

export { _get };
