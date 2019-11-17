import { Queue } from './lib/Queue';

class Object {
    [key: string]: string | number;
}

type NumArrays = {
    [index: number]: number;
}

type StrArrays = {
    [index: number]: string;
}

type ObjArrays = {
    [index: number]: Object;
}

class Operator extends Object {
    $ne? : string | number;
    $lt? : string | number;
    $lte?: string | number;
    $gt? : string | number;
    $gte?: string | number;
}

type OperatorObject = {
    [key: string]: string | Operator;
}

type BaseType =
    string | number | Object | StrArrays | ObjArrays | NumArrays;

type DataType =
    BaseType | Queue<BaseType>;

type StoreType = {
    [key: string]: DataType;
}

export {
    Object,
    NumArrays,
    StrArrays,
    ObjArrays,
    Operator,
    OperatorObject,
    StoreType,
    DataType
}
