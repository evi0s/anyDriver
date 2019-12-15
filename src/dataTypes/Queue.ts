import { DataType } from "../dataTypes";

class Queue <T extends DataType> {

    private _queue: T[];
    private _front: number;
    private _rear : number;
    private _capacity: number;

    constructor(_capacity: number) {
        this._capacity = _capacity;
        this._queue = new Array<T>(_capacity);
        this._front = 0;
        this._rear = 0;
    }

    isFull(): boolean {
        return (((this._rear + 1) % this._capacity) == this._front);
    }

    isEmpty(): boolean {
        return (this._front == this._rear);
    }

    size(): number {
        // Max size should less than capacity
        // max size = capacity - 1
        return ((this._rear - this._front + this._capacity) % this._capacity);
    }

    front(): T | boolean {
        if(this.isEmpty()) {
            return false
        }

        return this._queue[this._front];
    }

    pop(): T | boolean {

        if(this.isEmpty()) {
            return false
        }

        let data: T;

        data = this._queue[this._front];
        this._front = (this._front + 1) % this._capacity;

        return data;
    }

    push(_data: T): boolean {
        if(this.isFull()) {
            return false;
        }

        this._queue[this._rear] = _data;
        this._rear = (this._rear + 1) % this._capacity;

        return true;
    }
}

export { Queue };
