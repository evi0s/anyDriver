import { Queue } from './lib/Queue';
import { Stack } from './lib/Stack';

class Objects {
    [key: string]: string | number;
}

type Arrays = {
    [index: number]: string | number | Objects;
}

class Operator extends Objects {
    $ne? : string | number;
    $lt? : string | number;
    $lte?: string | number;
    $gt? : string | number;
    $gte?: string | number;
}

type OperatorObjects = {
    [key: string]: string | Operator;
}

type BaseType =
    string | number | Objects | Arrays;

type DataType =
    BaseType | Queue<BaseType> | Stack<BaseType>;

type StoreType = {
    [key: string]: DataType;
}

export {
    Objects,
    Arrays,
    Operator,
    OperatorObjects,
    StoreType,
    DataType,
    Queue,
    Stack
}
