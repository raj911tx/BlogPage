# BlogPage(Bloggy)

![Home Page](https://github.com/raj911tx/BlogPage/blob/master/Blog%20Home%20Page.PNG)

You will need Node js,Express,MongoDB to run this web application in your localhost or in any cloud provider.
To install nodejs in your system follow nodejs official link https://nodejs.org/en/download/.

After installing node you can crate a simple webserver using the following.
```
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
Writing web application with only node will be too complicated.
So we will use express which a framework build over node(https://expressjs.com/)

To store user data we are going to use a NOSQL database MongoDb.We are going to use Mongodb Compass GUI to visualize the data.

So at first we are going to make the project folder.Then to use the project folder as a node app we have to run:
```
npm init
```
After this only we are able to install any package in our project folder.

We can install nodemon(https://www.npmjs.com/package/nodemon) so that we dont have to run ```node app.js``` everytime we want to launch our server.

We will be using mongoose package which is a javascript package to interface node with mongo.

In the middleware directory we will store the middlewares with will work between a request and response object.
We will use these middleware to validate data or do other tasks before responding to resquest.

We can upload images to post which will stored in assets/img folder.
![Post](https://github.com/raj911tx/BlogPage/blob/master/Blog%20post%20page.PNG)


We will be using Summernote so that user can write thier blog like a editor kind of way!!!
![Create](https://github.com/raj911tx/BlogPage/blob/master/create%20post.PNG)


We will be using Mongodb atlas with 3 clusters. The read write data can be visualized via MongoDb GUI.
![](https://github.com/raj911tx/BlogPage/blob/master/data%20page.PNG)

We can also visualize the data rate(read and write) and monitor if in case of any abnormility.
![](https://github.com/raj911tx/BlogPage/blob/master/data%20page.PNG)

User is able to register and login to the account.If user is logged in it will store the session cookies in the user client so user doesnot have to login several times.
If user is using same username to register it will deny the registration and redirect the user to registration page.The validation errors will pop in using flash package.
![](https://github.com/raj911tx/BlogPage/blob/master/form%20page.PNG)



![](https://github.com/raj911tx/BlogPage/blob/master/register%20page.PNG)
The Post date and user will be shown in Home Page.




