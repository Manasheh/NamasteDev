#React hooks
they are normal js utility functions 

* There two very important hooks --- 1. useState hook and 2. useEffect hook
* useState hook is used to store the state of the component
* useEffect hook is used to perform side effects like API calls, DOM manipulation, etc.
* There are other hooks like useContext, useReducer, etc. which are used for specific purposes.
*when state changes react re-render the component.
*Reconciliation Algorithm(React fiber) -- Diff Algorithm meaning React creates a virtual dom from the dom itself and if an action is perform in any of the components it compares the old virtual DOM and the new virtual DOM and it updates the new virtual DOM.
suppose a function component has 7 child component and when clicking on a button it filter and make it three so the new 3 child component is the new virtual DOM which is going to be updated.

🏛️ What is Monolithic Architecture?
Monolithic architecture is a traditional software design style where the entire application is built as a single, unified unit. All the features — frontend, backend, business logic, and database access — are bundled together and run as one service.This approach is often used in small to medium-sized applications where the complexity is relatively low.

🧩 What is Microservices Architecture?
Microservices architecture is an approach to building applications as a collection of small, independent services, each responsible for a specific business functionality.

Instead of having everything in one place (like in a monolith), each part of the system is decentralized and runs independently.

🛠️ Key Characteristics:
Independent services: Each service does one thing well (e.g., user service, order service).

Own database: Each service can have its own database.

Loosely coupled: Services communicate through APIs (usually HTTP/REST or message queues).

Independent deployment: Each service can be updated, deployed, and scaled on its own.

📦 Example:
Imagine an eCommerce platform with the following microservices:

🧑‍💼 User Service — handles user registration/login

📦 Product Service — manages product inventory

🛒 Cart Service — handles shopping cart logic

💰 Payment Service — processes payments

📬 Notification Service — sends emails/SMS

Each one is a separate app with its own logic and database.

# instead of using Loading... before the actual ui loadings it is better to use shimmer UI
 what is shimmer ui ?
 Shimmer UI is a library that provides a simple way to add loading animations to your UI components. 