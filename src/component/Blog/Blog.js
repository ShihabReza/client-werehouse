import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className="text-center">1.Difference between javascript and nodejs</h1>
            <div className='d-flex w-50 mx-auto m-5 gx-5'> 
                
                <div>
                    <h1>Javascript</h1>
                    <p>1.Javascript is a programming language that is used for writing scripts on the website. </p>
                    <p>2.Javascript can only be run in the browsers.</p>
                    <p>3.It is basically used on the client-side.</p>
                    <p>4.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. </p>
                    5.It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.
                </div>
                <div>
                    <h1>NodeJS</h1>
                    <p>1.NodeJS is a Javascript runtime environment.</p>
                    <p>2.We can run Javascript outside the browser with the help of NodeJS.</p>
                    <p>3.It is mostly used on the server-side.</p>
                    <p>4.V8 is the Javascript engine inside of node.js that parses and runs Javascript. </p>
                    <p>5.Nodejs is written in C, C++ and Javascript.</p>
                </div>
            </div>
            <h1 className='text-center mt-5'>2.Differences between sql and nosql databases.</h1>
            <div className='d-flex w-50 mx-auto mt-5'>
                <div>
                    <h1>SQL</h1>
                    <p>1.These databases have fixed or static or predefined schema	</p>
                    <p>2.These databases are not suited for hierarchical data storage.</p>
                    <p>3.These databases are best suited for complex queries</p>
                    <p>4.Vertically Scalable</p>
                    <p>5.Follows ACID property</p>
                </div>
                <div>
                    <h1>NoSQL</h1>
                    <p>1.They have dynamic schema</p>
                    <p>2.These databases are best suited for hierarchical data storage.</p>
                    <p>3.These databases are not so good for complex queries</p>
                    <p>4.Horizontally scalable</p>
                    <p>5.Follows CAPconsistency availability partition tolerance</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;