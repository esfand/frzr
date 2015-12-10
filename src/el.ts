/**
 * HTMLElement helper
 * @param  {String} [tagName='div'] HTMLElement tag name
 * @param  {Object} [attributes={}]   attributes/text/HTML
 * @return {HTMLElement}         Returns pure HTMLElement
 */
export function el (tagName: string = 'div', attributes: Object = {}): HTMLElement {
  const _el: HTMLElement = document.createElement(tagName);

  for (const key in attributes) {
    if (key === 'text') {
      _el.textContent = attributes[key];
    } else if (key === 'html') {
      _el.innerHTML = attributes[key];
    } else {
      _el.setAttribute(key, attributes[key]);
    }
  }
  return _el;
}
