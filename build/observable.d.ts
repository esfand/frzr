export declare class Observable {
    /**
      * Listeners cache
      * @type {Object}
      */
    listeners: Object;
    /**
     * Inits listeners
     * @return {Observable}
     */
    constructor();
    /**
     * Add listener by name
     * @param  {String}   name Listener name
     * @param  {Function} callback   Listener callback
     * @return {Observable}
     */
    on(name: string, callback: Function): Observable;
    /**
     * Add listener by name, which triggers only one
     * @param  {String}   name Listener name
     * @param  {Function} callback   Listener callback
     * @return {Observable}
     */
    one(name: string, callback: Function): Observable;
    /**
     * Triggers listeners by name
     * @param  {String} name    [description]
     * @param  {*} [...args] [description]
     * @return {Observable}
     */
    trigger(name: string, ...args: any[]): Observable;
    /**
     * Remove all listeners, or by name, or by name & callback
     * @param  {String}   [name]     Listener name
     * @param  {Function} [callback] Listener callback
     * @return {Observable}
     */
    off(name: string, callback: Function): Observable;
}
