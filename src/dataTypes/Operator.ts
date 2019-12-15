import { Objects } from "./Objects";

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

export { Operator, OperatorObjects };
