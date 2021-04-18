# Installation guide to react

For this project, we are going to perform a Progressive Web App to serve the purpose of being able to work across multiple devices. Visual Studio Code can be used. Alternatively, we can also choose jetbrains Webstorm to do so. 

## Installation setup 
To do the web app we are going to use Node to execute the project.

 ### For Mac users
 First, open up the terminal or the shell to carry out and execute the process. 
 
     brew update

 Second, install node using the following commands.
 
     brew install node 
     
 Third, check your node and npm version using either of the following commands.
 
     node -v
     npm -v
     
 You should be able to see a version of node being at least 8.10 and npm version to be at least 5.6 for react to work.
     
 Fourth, if all of the above is set, ya ready to go! Run the following commands to ensure that everything is working. Before you do so, make a new directory for the new react app using mkdir system call.
 
 The following is for you to run the app only if you have previously created a react-app.
 
     npx create-react-app my-app
     
     cd my-app 
     
     npm start 
 You should be able to see a running web page on your local host.
 
 Other than that, if the above commands throw an error, run the following in order.
 
 For npm >= 5.2:
 
     npx create-react-app my-app
     
 For npm 6+:
 
     npm init react-app my-app

 For yarn 0.25 + (which is what I use personally):
     
     yarn create react-app my-app

 After you have executed either of the above commands, do the following:
     
     cd react-app
     
 For those who installed yarn:
 
     yarn start
 
 For npm user:
 
     npm start
 
 
 ### For Windows users
 Try this link:
 https://www.liquidweb.com/kb/install-react-js-windows/

## Emulator 
1. For chrome users, right click on the chrome browser.
2. Click Inspect.
3. Once you are in, you are able to see how you can emulate on various devices. Click on the phone or devices icon on the top left corner of the screen.
4. Now you can choose how you want to emulate.

### Front end 
We will be using React.js which is widely used and popular with the frameworks.
