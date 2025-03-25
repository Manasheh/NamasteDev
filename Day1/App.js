//object inside createElement is to add attribute as many as you want
//to create nested elements
/*

<div id="parent">
    <div id="child">
        <h1>i am grandchild</h1>
        <h2>i am also grandchild</h2>
    </div>
    <div id="child2">
        <h1>i am grandchild</h1>
        <h2>i am also grandchild</h2>
    </div>
</div> 

*/

const parent = React.createElement('div', {id:"parent"},
    React.createElement('div', {id:"child"}, 
        [React.createElement('h1', {}, "I am grandchild"),
        React.createElement('h2', {}, 'i am also grandchild') ]
    ),
    React.createElement('div', {id:"child"}, 
        [React.createElement('h1', {}, "I am grandchild"),
        React.createElement('h2', {}, 'i am also grandchild') ]
    )                

);

const heading = React.createElement('h1', {id: 'heading'}, 'Hello world from React')

// console.log(heading)  //return an js object
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)

