import { StoreType, DataType, OperatorObjects, Operator }  from "../dataTypes";


function _get(data: StoreType, key: string | OperatorObjects)
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
