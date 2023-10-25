import React from 'react';

const Blogs = () => {
    return (
        <div className='md:w-3/5 md:mt-24 mb-36 mx-4 md:mx-auto my-5'>
            <div className='text-left'>
                <div className=''>
                    <h3 className='font-semibold text-xl'>How will you improve the performance of a React Application?</h3>
                    <p>Performance is one of the best thing in web development. Here describe some way toimprove the performance:
                        1. Code-splitting in React using dynamic import() </p>
                    2. Webpack v4+ will minify your code by default in production mode.
                    3. Avoid Reconciliation etc.
                </div>
                <div className='mt-4'>
                    <h3 className='font-semibold text-xl'>What are the different ways to manage a state in a React application?</h3>
                    <p> For change state we can use primarylly two way. One is hooks functions and another one class based component state.</p>
                </div>
                <div className='mt-4'>
                    <h3 className='font-semibold text-xl'>How does prototypical inheritance work?</h3>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.  It is a method by which an object can inherit the properties and methods of another object. JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.</p>
                </div>
                <div className='mt-4'>
                    <h3 className='font-semibold text-xl'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?</h3>
                    <p>First its a build in hooks and its a immutable . so we can directely store or change ot this value so we use this way.</p>
                    <p> If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. </p>
                </div>
                <div className='mt-4'>
                    <h3 className='font-semibold text-xl'>What is a unit test? Why should write unit tests?</h3>
                    <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended.
                        <br /><br />
                        Unit testing significantly improves code quality. It helps developers to identify the smallest defects that might be present in the units before they go for integration testing.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;