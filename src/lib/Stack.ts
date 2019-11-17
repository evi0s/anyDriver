import { DataType } from "../dataTypes";

class Stack <T extends DataType> {

    private _stack: T[];
    private _top: number;
    private _capacity: number;

    constructor(_capacity: number) {
        this._capacity = _capacity;
        this._stack = new Array<T>(_capacity);
        this._top = -1;
    }

    isFull(): boolean {
        return this._top === this._capacity - 1;
    }

    isEmpty(): boolean {
        return this._top === -1;
    }

    size(): number {
        return this._top + 1;
    }

    top(): T | boolean {
        if(this.isEmpty()) {
            return false
        }

        return this._stack[this._top];
    }

    pop(): T | boolean {
        if(this.isEmpty()) {
            return false
        }

        let data: T;

        data = this._stack[this._top];
        this._top = this._top - 1;

        return data;
    }

    push(_data: T): boolean {
        if(this.isFull()) {
            return false;
        }

        this._top = this._top + 1;
        this._stack[this._top] = _data;

        return true;
    }
}

export { Stack };
