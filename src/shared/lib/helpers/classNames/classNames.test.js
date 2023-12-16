import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass').trim()).toBe('someClass');
    });
    test('with additional', () => {
        const result = 'someClass cls1 cls2';
        expect(classNames('someClass', {}, ['cls1', 'cls2']).trim()).toBe(result);
    });
    test('with mods', () => {
        const result = 'someClass cls1 cls2 hovered';
        expect(classNames('someClass', { hovered: true }, ['cls1', 'cls2']).trim()).toBe(result);
    });
    test('with mods undefined', () => {
        const result = 'someClass cls1 cls2 hovered';
        expect(classNames('someClass', { hovered: true, hidden: undefined }, ['cls1', 'cls2']).trim()).toBe(result);
    });
});
