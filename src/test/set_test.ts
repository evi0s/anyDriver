import { anyDriver } from "../index";
import { expect } from 'chai';
import 'mocha';


describe('set function test', () => {

    it('should set a number', () => {
        let tmp = new anyDriver({});
        const result = tmp.set('a', 1);
        const value = tmp.data['a'];

        console.log(result);
        expect(result).to.be.true;
        expect(value).to.deep.equal(1);
    });

    it('should set a string', () => {
        let tmp = new anyDriver({});
        const result = tmp.set('a', 'b');
        const value = tmp.data['a'];

        console.log(result);
        expect(result).to.be.true;
        expect(value).to.deep.equal('b');
    });

    it('should set a object', () => {
        let tmp = new anyDriver({});
        const result = tmp.set('a', {'foo': 'bar'});
        const value = tmp.data['a'];

        console.log(result);
        expect(result).to.be.true;
        expect(value).to.deep.equal({'foo': 'bar'});
    });

    it('should set a number array', () => {
        let tmp = new anyDriver({});
        const result = tmp.set('a', [123, 456]);
        const value = tmp.data['a'];

        console.log(result);
        expect(result).to.be.true;
        expect(value).to.deep.equal([123, 456]);
    });

    it('should set a string array', () => {
        let tmp = new anyDriver({});
        const result = tmp.set('a', ['b', 'c']);
        const value = tmp.data['a'];

        console.log(result);
        expect(result).to.be.true;
        expect(value).to.deep.equal(['b', 'c']);
    });

    it('should set a object array', () => {
        let tmp = new anyDriver({});
        const result = tmp.set('a', [{'foo': 'bar'}, {'fooo': 'barr'}]);
        const value = tmp.data['a'];

        console.log(result);
        expect(result).to.be.true;
        expect(value).to.deep.equal([{'foo': 'bar'}, {'fooo': 'barr'}]);
    });
});
