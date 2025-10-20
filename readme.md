1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

1.getElementById brings only a single element by calling its ID.As ids are unique, so it always returns a single element and its not a nodelist. 
getElementByClassName returns all the elements that have the same class name. It looks like an array, but it's not exactly an array.It is a HTML collection . querySelector returns only the first element that matches the CSS selector,  example div, p.It can be #Id or .class.
querySelectorAll returns all the elements that matches a CSS selector. 

2.For creating a new element  const newElement = document.createElement('tag') then insert it into DOM parent.appendChild(newElement)

3.When a event happens to an element it first occurs on the element then it moves up to its parent element and then its parent's parent and it goes on this is called Event bubbling. 
Think of having a button inside a div. When you click the button, the button’s event will happen first then it will automatically move up to its parent which is div and it will trigger the div’s event and then it will go up to div's parent and upward. This process is called Event Bubbling.

4.When you handle multiple child elements' event by handling only one element which is their parent its called event delegation.
We use event delegation because it makes the code easy to maintain. It takes less code as one event can handle many elements. It takes advantage of event bubbling.

5.preventDefault() stops the default action of an element, but bubbling of element can still happen. On the other hand, stopPropagation() stops the event from bubbling, but the default action can happen.
