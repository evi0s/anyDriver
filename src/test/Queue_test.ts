import { anyDriver, Queue } from "../index";
import { expect } from 'chai';
import 'mocha';


describe('Queue data structure test', () => {

    it('should create a queue', () => {
        let store = {};
        let tmp = new anyDriver(store);

        const setResult = tmp.set('a', new Queue<number>(10));
        const getQueue = <Queue<number>> tmp.get('a');

        console.log(setResult);
        expect(setResult).to.be.true;
        expect(getQueue).to.be.an.instanceof(Queue);
    });

    it('should push a string into queue', () => {
        let store = {};
        let tmp = new anyDriver(store);

        const setResult = tmp.set('a', new Queue<string>(10));
        const getQueue = <Queue<string>> tmp.get('a');
        const pushResult = getQueue.push('b');

        console.log(setResult);
        expect(setResult).to.be.true;
        expect(getQueue).to.be.an.instanceof(Queue);
        expect(pushResult).to.be.true;
    });

    it('should pop a string from queue', () => {
        let store = {};
        let tmp = new anyDriver(store);

        const setResult = tmp.set('a', new Queue<string>(10));
        const getQueue = <Queue<string>> tmp.get('a');
        const pushResult = getQueue.push('b');
        const popResult = getQueue.pop();

        console.log(setResult);
        expect(setResult).to.be.true;
        expect(getQueue).to.be.an.instanceof(Queue);
        expect(pushResult).to.be.true;
        expect(popResult).to.deep.equal('b');
        expect(getQueue.size()).to.deep.equal(0);
    });

    it('should get front string of the queue', () => {
        let store = {};
        let tmp = new anyDriver(store);

        const setResult = tmp.set('a', new Queue<string>(10));
        const getQueue = <Queue<string>> tmp.get('a');
        const pushResult = getQueue.push('b');
        const frontResult = getQueue.front();

        console.log(setResult);
        expect(setResult).to.be.true;
        expect(getQueue).to.be.an.instanceof(Queue);
        expect(pushResult).to.be.true;
        expect(frontResult).to.deep.equal('b');
        expect(getQueue.size()).to.deep.equal(1);
    });

    it('should pop failed', () => {
        let store = {};
        let tmp = new anyDriver(store);

        const setResult = tmp.set('a', new Queue<string>(10));
        const getQueue = <Queue<string>> tmp.get('a');
        const popResult = getQueue.pop();

        console.log(setResult);
        expect(setResult).to.be.true;
        expect(getQueue).to.be.an.instanceof(Queue);
        expect(popResult).to.be.false;
        expect(getQueue.size()).to.deep.equal(0);
    });

    it('should push failed', () => {
        let store = {};
        let tmp = new anyDriver(store);

        const setResult = tmp.set('a', new Queue<string>(10));
        const getQueue = <Queue<string>> tmp.get('a');
        for (let i = 0; i < 10; i++) {
            getQueue.push('b');
        }
        const pushResult = getQueue.push('b');

        console.log(setResult);
        expect(setResult).to.be.true;
        expect(getQueue).to.be.an.instanceof(Queue);
        expect(pushResult).to.be.false;
        expect(getQueue.size()).to.deep.equal(9);
    });

    it('should get nothing front', () => {
        let store = {};
        let tmp = new anyDriver(store);

        const setResult = tmp.set('a', new Queue<string>(10));
        const getQueue = <Queue<string>> tmp.get('a');
        const frontResult = getQueue.front();

        console.log(setResult);
        expect(setResult).to.be.true;
        expect(getQueue).to.be.an.instanceof(Queue);
        expect(frontResult).to.be.false;
    });

});
