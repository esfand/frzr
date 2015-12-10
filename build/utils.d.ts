/**
 * Faster way to iterate array
 * @param  {Array} array    source array
 * @param  {Function} iterator gets called: iterator(array[i], i)
 */
export declare function each(array: any[], iterator: (item: any, idx: number) => void): void;
/**
 * Fisher-Yates shuffle helper
 * @param  {Array} array Array to be shuffled
 * @return {Array}       Shuffled Array
 */
export declare function shuffle(array: any[]): any[];
/**
 * Makes Class extendable by adding Class.extend
 * @param  {Class} Class source Class
 * @return {ExtendedClass}       resulted ExtendedClass
 */
export declare function extendable(Class: any): void;
