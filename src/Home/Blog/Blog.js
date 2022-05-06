import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>Question : Difference Between Javascript and Node js ?</h2>
            <h5>Ans :Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.V8 is the Javascript engine inside of node.js that parses and runs Javascript.JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage.On the other hand, Node.js usually represents a list of objects and methods accessible to JavaScript code when run in the V8 engine or via the node interpreter.In this article, we are going to discuss the difference between JavaScript and Node.js. But before discussing the differences, we will know about JavaScript and Node.js  </h5>
            <br/>
            <h2>Question : Difference Between Sql and Nosql Database?</h2>
            <h5>Ans : SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. 
            A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. </h5>
            <br/>
            <h2>Question : When Should You Use Nodejs And When Should You Use Mongodb?</h2>
            <h5>Ans : When creating a database, you can choose to set it up locally or in the cloud. For example, you can spin up an installation on localhost manually of MongoDB by downloading and installing MongoDB. That said, a manual installation comes with ongoing maintenance and upkeep costs. As an application developer, I prefer to avoid as much manual work as possible, so I tend to shy away from manual installation.
            For cloud offerings, there is MongoDB Atlas, the database-as-a-service offering from MongoDB. It is platform-agnostic, allowing you to create database clusters on AWS, Azure, and Google Cloud, and scaling is as simple as clicking a button. They also made it easy to get started, with a free M0 tier. The total time from signup to having a created database was less than five minutes for me.</h5>
        </div>
    );
};

export default Blog;