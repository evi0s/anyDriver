import { Queue } from "./Queue";
import { Stack } from "./Stack";
import { Objects } from "./Objects";
import { Arrays } from "./Arrays";
import { Operator, OperatorObjects } from "./Operator";

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
    BaseType,
    DataType,
    StoreType,
    Stack,
    Queue
}
