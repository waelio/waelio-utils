import { deepClone } from '../src/utils';

describe('deepClone', () => {
    it('should clone primitive values', () => {
        expect(deepClone(123)).toBe(123);
        expect(deepClone('hello')).toBe('hello');
        expect(deepClone(true)).toBe(true);
        expect(deepClone(null)).toBeNull();
        expect(deepClone(undefined)).toBeUndefined();
        // Symbols are unique by identity; ensure the clone is still a symbol
        expect(typeof deepClone(Symbol('test'))).toBe('symbol');
    });

    it('should deep clone a plain object', () => {
        const obj = { a: 1, b: 'test', c: { d: 4 } };
        const clonedObj = deepClone(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj); // Should be a new object
        expect(clonedObj.c).not.toBe(obj.c); // Nested objects should also be new
    });

    it('should deep clone an array', () => {
        const arr = [1, 'test', { a: 2 }];
        const clonedArr = deepClone(arr);

        expect(clonedArr).toEqual(arr);
        expect(clonedArr).not.toBe(arr); // Should be a new array
        expect(clonedArr[2]).not.toBe(arr[2]); // Nested objects should also be new
    });

    it('should deep clone objects containing arrays and vice versa', () => {
        const data = {
            id: 1,
            items: [{ name: 'item1', value: 10 }, { name: 'item2', value: 20 }],
            tags: ['a', 'b', 'c'],
        };
        const clonedData = deepClone(data);

        expect(clonedData).toEqual(data);
        expect(clonedData).not.toBe(data);
        expect(clonedData.items).not.toBe(data.items);
        expect(clonedData.items[0]).not.toBe(data.items[0]);
        expect(clonedData.tags).not.toBe(data.tags);
    });

    it('should clone Date objects', () => {
        const date = new Date();
        const obj = { d: date };
        const clonedObj = deepClone(obj);

        expect(clonedObj.d).toEqual(date);
        expect(clonedObj.d).not.toBe(date); // Should be a new Date object
    });

    it('should clone RegExp objects', () => {
        const regex = /abc/gi;
        const obj = { r: regex };
        const clonedObj = deepClone(obj);

        expect(clonedObj.r).toEqual(regex);
        expect(clonedObj.r).not.toBe(regex); // Should be a new RegExp object
    });

    it('should handle circular references', () => {
        const obj1: any = {};
        const obj2: any = { a: obj1 };
        obj1.b = obj2; // Circular reference: obj1 -> obj2 -> obj1

        const clonedObj1 = deepClone(obj1);

        expect(clonedObj1).toEqual(obj1);
        expect(clonedObj1).not.toBe(obj1);
        expect(clonedObj1.b).not.toBe(obj1.b);
        expect(clonedObj1.b.a).toBe(clonedObj1); // The circular reference should be maintained in the clone
    });

    it('should copy functions by reference', () => {
        const func = () => { };
        const obj = { f: func };
        const clonedObj = deepClone(obj);

        expect(clonedObj.f).toBe(func); // Functions are copied by reference
    });

    it('should handle complex nested structures with circular references', () => {
        const a: any = { name: 'A' };
        const b: any = { name: 'B', parent: a };
        a.child = b;
        const clonedA = deepClone(a);
        expect(clonedA.child.parent).toBe(clonedA);
        expect(clonedA.child.name).toBe('B');
    });
});