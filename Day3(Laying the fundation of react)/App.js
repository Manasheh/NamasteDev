//what is jsx ==> JSX is a syntax extension for JavaScript that looks like HTML but works inside React. It allows you to write UI components in a way that is easy to read and maintain.
// babel ==> babel converts jsx to Reactelements ==> ReactElements - JS(object) ==> html(render)

import React from "react";
import ReactDOM from 'react-dom/client';

//React Element -- objects

const Title = () => (
    <h1 id='heading'>React using jsx</h1>
)


//React Functional components ==> a js function that returns a jsx code is a functional component.

const HeadingComponent = () => {
    return (
        <div>
            <h1>Namaste React Functional Component</h1>
            <Title />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent />)