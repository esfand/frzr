import { Observable } from './observable';
import { View } from './view';
export declare class ViewList extends Observable {
    /**
     * @typedef {Object} ViewListOptions
     * @property {View} [View=View] View Class to create new Views with
     * @property {Function} [init] 'init' callback shortcut
     * @property {Function} [inited] 'inited' callback shortcut
     * @property {Function} [mount] 'mount' callback shortcut
     * @property {Function} [mounted] 'mounted' callback shortcut
     * @property {Function} [sort] 'sort' callback shortcut
     * @property {Function} [sorted] 'sorted' callback shortcut
     * @property {Function} [update] 'update' callback shortcut
     * @property {Function} [updated] 'updated' callback shortcut
     * @property {Function} [destroy] 'destroy' callback shortcut
     * @property {*} [*] Anything else you want to pass on to View
     */
    /**
     * Views by key, if key provided
     * @type {Object}
     */
    lookup: Object;
    /**
     * list of Views
     * @type {Array}
     */
    views: View[];
    /**
     * Creates list of Views to be mounted to a View
     * @param  {ViewListOptions} options ViewList options
     * @return {ViewList}
     */
    constructor(options: Object);
    /**
     * Sync list of Views with data provided
     * @param {Array} data Data for syncing list of Views
     */
    setData(data: any[]): void;
}
