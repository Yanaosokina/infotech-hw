import { classNames } from "./class-names";

describe('classNames', () => {
    it('should retrun empty string if object is empty', () => {
        expect(classNames({})).toBe('');
    })

    it('should join classes with space', () => {
        expect(classNames({
            'class-1': true,
            'class-2': true
        })).toBe('class-1 class-2');
    })
})