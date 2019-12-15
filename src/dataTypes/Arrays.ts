import { Objects } from "./Objects";

type T = string | number | Objects;

interface Arrays extends Array<T> {
    [index: number]: T;
}

export { Arrays };
