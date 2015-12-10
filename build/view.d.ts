import { Observable } from './observable';
import { ViewList } from './viewlist';
export declare class View extends Observable {
    /**
     * @external {HTMLElement} https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
     */
    /**
     * @typedef {Object} ViewOptions
     * @property {el|HTMLElement} [el=el('div')] DOM element
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
     * el attributes cache
     * @type {Object}
     */
    attrs: Object;
    /**
     * el classNames cache
     * @type {Object}
     */
    classes: Object;
    /**
     * HTMLElement
     * @type {el|HTMLElement}
     */
    el: HTMLElement;
    /**
     * Proxy event listeners cache
     * @type {Array}
     */
    eventListeners: Object[];
    /**
     * el innerHTML cache
     * @type {String}
     */
    html: string;
    /**
     * Listeners cache
     * @type {Object}
     */
    listeners: Object;
    /**
     * el styles cache
     * @type {Object}
     */
    styles: Object;
    /**
     * el textContent cache
     * @type {String}
     */
    text: string;
    /**
     * Creates View
     * @param  {ViewOptions} [options] View options
     * @param  {*} [data]    Any data to pass on to init()
     * @return {View}
     */
    constructor(options: Object, data: any);
    /**
     * Sets/removes View element attribute (only if changed)
     * @param {String} name   Attribute name
     * @param {*|null} value Attribute value or null to remove
     * @return {View}
     */
    setAttr(name: string, value: any): View;
    /**
     * Sets/removes View element class (only if changed)
     * @param {String} key   Class name
     * @param {Boolean} value true / false
     * @return {View}
     */
    setClass(key: string, value: boolean): View;
    /**
     * Sets/removes View element style (only if changed)
     * @param {String} key   Style name
     * @param {*|null} value Style value or null to remove
     * @return {View}
     */
    setStyle(key: string, value: any): View;
    /**
     * Sets View element textContent (only if changed)
     * @param {String} text Text to be applied to textContent
     * @return {View}
     */
    setText(text: string): View;
    /**
     * Sets View element innerHTML (only if changed)
     * @param {String} html HTML string
     * @return {View}
     */
    setHTML(html: string): View;
    /**
     * Adds proxy event listener to View
     * @param {[type]}   name       Listener name
     * @param {Function} callback         Listener callback
     * @param {Boolean}   useCapture Use capture or not
     * @return {View}
     */
    addListener(name: string, callback: Function, useCapture: boolean): View;
    /**
     * Removes all proxy event listeners from View, or by name, or by name and callback
     * @param  {String}   [name] Listener name
     * @param  {Function} [callback]   Listener callback
     * @return {View}
     */
    removeListener(name: string, callback: Function): View;
    /**
     * Adds child View/ViewList to View
     * @param {View|ViewList} child Child View/ViewList to be added
     * @return {View}
     */
    addChild(child: View | ViewList): View;
    /**
     * Adds child View before another View/HTMLElement
     * @param {View} child  Child View to be added
     * @param {View|HTMLElement} before Reference View/HTMLElement
     * @return {View}
     */
    addBefore(child: View, before: View | HTMLElement): View;
    /**
     * Replace children with Views or ViewList
     * @param {View|ViewList} ...views [description]
     * @return {View}
     */
    setChildren(...views: (View | ViewList)[]): View;
    /**
     * Remove child View / ViewList
     * @param  {View|ViewList} child Child View/ViewList to be removed
     * @return {View}
     */
    removeChild(child: View | ViewList): this;
    /**
     * Trigger 'update' with data
     * @param  {*} data Any data
     * @return {View}
     */
    update(data: any): void;
    /**
     * Destroy View (remove listeners, children, etc..)
     */
    destroy(): void;
}
