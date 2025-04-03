#React hooks
they are normal js utility functions 

* There two very important hooks --- 1. useState hook and 2. useEffect hook
* useState hook is used to store the state of the component
* useEffect hook is used to perform side effects like API calls, DOM manipulation, etc.
* There are other hooks like useContext, useReducer, etc. which are used for specific purposes.
*when state changes react re-render the component.
*Reconciliation Algorithm(React fiber) -- Diff Algorithm meaning React creates a virtual dom from the dom itself and if an action is perform in any of the components it compares the old virtual DOM and the new virtual DOM and it updates the new virtual DOM.
suppose a function component has 7 child component and when clicking on a button it filter and make it three so the new 3 child component is the new virtual DOM which is going to be updated.