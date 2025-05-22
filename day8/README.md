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

 #useEffect and it's dependency
 ** useEffect is called after every component rendering if there is no dependency 

 ** If there is an empty dependency then useEffect is called on only initial component rendered and just once.

 ** If there is dependency then useEffect is called everytime there is changes in the dependency.

 note: Never iniliaze useState inside a condition statement like if{useState} or for or functions


 #React router dom : 
 react-router-dom is a library used in React to handle routing in web applications—it lets you navigate between different pages or views without reloading the whole page.

In short:
✅ Allows single-page application (SPA) behavior
✅ Lets you define URLs for components
✅ Enables navigation using <Link> instead of <a>
✅ Uses components like <BrowserRouter>, <Routes>, and <Route>


# Steps to Use React Router Dom in React:
1. Install react-router-dom.
(npm install react-router-dom@6)

2. Import in your main file.
(import { BrowserRouter, Routes, Route } from "react-router-dom")

3. Wrap your App in <BrowserRouter>
    This enables routing.
    const App = () => {
    return (
        <BrowserRouter>
        {/* your routes go here */}
        </BrowserRouter>
    );
    };

4. Use <Routes> and <Route> to define pages

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> {/* Optional: 404 page */}
    </Routes>

5. Use <Link> for navigation (instead of <a>)

    import { Link } from 'react-router-dom';

    <Link to="/">Home</Link>
    <Link to="/about">About</Link>

# What is Navigate in React Router ?
<Navigate /> is a React Router component used to redirect the user from one route to another — without them clicking anything.


# Note: 
Two types of routing in web apps
1) Client side routing -- All components are loaded in the Page check click just loads the component.
2) Server side routing -- Make a newtork call like contact.html and get the content

# Dynamic Routing : 