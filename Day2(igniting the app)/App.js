//1) npm init     -->ignite npm
//2) npm i -D parcel    --> install parcel, same as vite
//2) what is packet.json --> stores information about the packages install and the versions
//4) what is packet-lock.json  --> it keeps track of everything that is in packet.json
//what is node_modules  --> it contains all the codes of the packages or dependenceis from the parcel or vite that we install using npm
//why node_modues have so many other things that are not what we insatll,
//they are the libraries of libraries of libraries for the packages we install, which means packages are not independent of themself, this is known as TRANSITIVE DEPENDENCIES.
//We can also say node_modules is a collection of dependencies.
//now to start the app in parcel --> npx parcel index.html
//what is npx --> execute the package install, here in our case we execute parcel in index.html
//fetching react from cdn in html is not a good way instead install using npm
//Parcel ---> 1) it is creating a local server for us
            //2) Dev build
            //3) HMR = Hot module replacement(rerender automatically)
            //4) Parcel uses File Watching Algorithm - written in c++, it keep tracks of all the file changes and implements it immediately.
            //5) catching - fast build
            //6) compress
            //7) defferential bundling - support older browser.
            //8) Diagnostic, error handling
            //9) support https
            //10) Tree shaking - parcel remove unused code for optimization
import React from "react";
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', {id: 'root'}, 'Hello React')
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)



//day2 1:25:00