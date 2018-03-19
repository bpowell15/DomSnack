import DomNodeCollection from './dom_node_collection.js';

window.DomNodeCollection = DomNodeCollection;

window.snack = (selector) => {
  // creates a function on the window called $l
  // $l is a function that takes a selector
  // receives one argument

  if ( typeof selector === 'string') {
    return new DomNodeCollection(Array.from(document.querySelectorAll(selector)));
  } else if ( selector instanceof HTMLElement){
    return new DomNodeCollection([selector]);
  } else {
    return [selector];
  }
};
