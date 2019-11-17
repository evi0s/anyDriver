import { anyDriver, Stack } from "../index";
import { expect } from 'chai';
import 'mocha';


describe('Stack data structure test', () => {

    it('should create a Stack', () => {
        let store = {};
        let tmp = new anyDriver(store);

        const setResult = tmp.set('a', new Stack<number>(10));
        const getStack = <Stack<number>> tmp.get('a');

        console.log(setResult);
        expect(setResult).to.be.true;
        expect(getStack).to.be.an.instanceof(Stack);
    });

    it('should push a string into Stack', () => {
        let store = {};
        let tmp = new anyDriver(store);

        const setResult = tmp.set('a', new Stack<string>(10));
        const getStack = <Stack<string>> tmp.get('a');
        const pushResult = getStack.push('b');

        console.log(setResult);
        expect(setResult).to.be.true;
        expect(getStack).to.be.an.instanceof(Stack);
        expect(pushResult).to.be.true;
    });

    it('should pop a string from Stack', () => {
        let store = {};
        let tmp = new anyDriver(store);

        const setResult = tmp.set('a', new Stack<string>(10));
        const getStack = <Stack<string>> tmp.get('a');
        const pushResult = getStack.push('b');
        const popResult = getStack.pop();

        console.log(setResult);
        expect(setResult).to.be.true;
        expect(getStack).to.be.an.instanceof(Stack);
        expect(pushResult).to.be.true;
        expect(popResult).to.deep.equal('b');
        expect(getStack.size()).to.deep.equal(0);
    });

    it('should get front string of the Stack', () => {
        let store = {};
        let tmp = new anyDriver(store);

        const setResult = tmp.set('a', new Stack<string>(10));
        const getStack = <Stack<string>> tmp.get('a');
        const pushResult = getStack.push('b');
        const frontResult = getStack.top();

        console.log(setResult);
        expect(setResult).to.be.true;
        expect(getStack).to.be.an.instanceof(Stack);
        expect(pushResult).to.be.true;
        expect(frontResult).to.deep.equal('b');
        expect(getStack.size()).to.deep.equal(1);
    });

    it('should pop failed', () => {
        let store = {};
        let tmp = new anyDriver(store);

        const setResult = tmp.set('a', new Stack<string>(10));
        const getStack = <Stack<string>> tmp.get('a');
        const popResult = getStack.pop();

        console.log(setResult);
        expect(setResult).to.be.true;
        expect(getStack).to.be.an.instanceof(Stack);
        expect(popResult).to.be.false;
        expect(getStack.size()).to.deep.equal(0);
    });

    it('should push failed', () => {
        let store = {};
        let tmp = new anyDriver(store);

        const setResult = tmp.set('a', new Stack<string>(10));
        const getStack = <Stack<string>> tmp.get('a');
        for (let i = 0; i < 10; i++) {
            getStack.push('b');
        }
        const pushResult = getStack.push('b');

        console.log(setResult);
        expect(setResult).to.be.true;
        expect(getStack).to.be.an.instanceof(Stack);
        expect(pushResult).to.be.false;
        expect(getStack.size()).to.deep.equal(10);
    });

    it('should get nothing front', () => {
        let store = {};
        let tmp = new anyDriver(store);

        const setResult = tmp.set('a', new Stack<string>(10));
        const getStack = <Stack<string>> tmp.get('a');
        const frontResult = getStack.top();

        console.log(setResult);
        expect(setResult).to.be.true;
        expect(getStack).to.be.an.instanceof(Stack);
        expect(frontResult).to.be.false;
    });

    it('should a set', () => {
        let store = {};
        let tmp = new anyDriver(store);

        const setResult = tmp.set('a', new Stack<string>(10));
        const getStack = <Stack<string>> tmp.get('a');

        expect(setResult).to.be.true;
        expect(getStack).to.be.an.instanceof(Stack);

        expect(getStack.push('1')).to.be.true;
        expect(getStack.push('2')).to.be.true;
        expect(getStack.push('3')).to.be.true;
        expect(getStack.push('4')).to.be.true;
        expect(getStack.push('5')).to.be.true;
        expect(getStack.pop()).to.deep.equal('5');
        expect(getStack.pop()).to.deep.equal('4');
        expect(getStack.pop()).to.deep.equal('3');
        expect(getStack.pop()).to.deep.equal('2');
        expect(getStack.pop()).to.deep.equal('1');

        expect(getStack.size()).to.deep.equal(0);
    });

});
