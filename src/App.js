import React from "react";
// import PortfolioContainer from "./components/PortfolioContainer";
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';

//this is pretty straight forward, we have components and they go ito our shit and obviously there pretty reusuable
//we can also use props to pass stuff later. We can set these props relative to things and do stuff to em. It's basically like being able to set arrays and like JSON to attributes it's very powerful.
//Now let's try running our shitty app off of a server

const App = () => (
<div>
    <About text = 'This is my prop text'/>
    <Blog />
    <Contact />
    <Home />



</div>


);

export default App;
