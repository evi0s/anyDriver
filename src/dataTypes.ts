interface Object {
    [key: string]: string | number;
}

interface NumArrays {
    [index: number]: number;
}

interface StrArrays {
    [index: number]: string;
}

interface ObjArrays {
    [index: number]: Object;
}

interface DataType {
    [key: string]: string | number | Object | StrArrays | ObjArrays | NumArrays;
}

export {
    Object,
    NumArrays,
    StrArrays,
    ObjArrays,
    DataType
}
