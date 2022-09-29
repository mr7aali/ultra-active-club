import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog-container'>
             <div className='footer-blog'>
                 <h1> How does react work?</h1>
                 <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
             </div>
             <div className='footer-blog'>
                 <h1> difference between props and state in react</h1>
                 <p>Props can be used with state and functional components.It is Immutable (cannot be modified).The Data is passed from one component to another. <br /><br />State can be used only with the state components/class component (Before 16.0).	It is Mutable ( can be modified).The Data is passed within the component only.</p>
             </div>
             <div className='footer-blog'>
                 <h1> How does react work?</h1>
                 <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
             </div>
        </div>
    );
};

export default Blog;