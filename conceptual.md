### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    A very powerful front end framework. It is easy to make resuable components that can be easily editted and tested
- What is Babel?
    An in-between where JSX (html embedded into our javascript) can be transpiled into Javascript
- What is JSX?
    HTML code embedded into a JS file
- How is a Component created in React?
    A component is created as a function that contains HTML code and logic which can be rendered to HTML
- What are some difference between state and props?
    props are data that is passed into a component, state is already specific in the component, props are immutable, states are mutable
- What does "downward data flow" refer to in React?
    How data starts at the parent component, that data is passed down to the child component as a prop and is used in the child component
- What is a controlled component?
    An input form element whose value is controlled by React
- What is an uncontrolled component?
    Form data is handled by the DOM itself
- What is the purpose of the `key` prop when rendering a list of components?
    Keys help React identify which items are changed/added/removed
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    You want the key to be UNIQUE for the array. An index is applicable towards other lists in the component
- Describe useEffect.  What use cases is it used for in React components?
    useEffect are functions available for the component to manipulate the DOM. Fetching data, starting a timer, etc
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    Returns an object where you can use an intial value. The object value will persist across renders of the page. Changing the object does not trigger a re-render
- When would you use a ref? When wouldn't you use one?
    Accessing an HTML element to make changes. We should not useRef to make changes to the DOM itself
- What is a custom hook in React? When would you want to write one?
    Custom hooks are functions that I write for an intended response. I would write one when I need to perform the same task across multiple components and don't want to re-write the function over and over again