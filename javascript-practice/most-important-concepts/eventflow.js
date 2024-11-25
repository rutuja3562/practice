// Event flow is the order in which event is received on the web page.
// When you click an element that is nested in various other elements,
// before your click actually reaches its destination, or target element,
// it must trigger the click event for each of its parent elements first,
// starting at the top with the global window object.

// There are two ways of event flow

// Top to Bottom(Event Capturing)
// Bottom to Top (Event Bubbling)

// Event Bubbling

// Event bubbling is a type of event propagation where the event first triggers
// on the innermost target element, and then successively triggers on the ancestors
// (parents) of the target element in the same nesting hierarchy till it reaches
// the outermost DOM element(i.e, global window object).

// Event Capturing

// Event capturing is a type of event propagation where the event is first captured
// by the outermost element, and then successively triggers on the descendants
// (children) of the target element in the same nesting hierarchy till it reaches
// the innermost target DOM element.
