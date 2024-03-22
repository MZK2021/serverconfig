// npm packages use - package jason 

// {
//         "name": "test",
//         "version": "1.0.0",
//         "description": "first package",
//         "main": "index.js",
//         "type": "module",
//         "scripts": {
//           "test": "npm test"
//         },
//         "author": "milli",
//         "license": "ISC",
//         "dependencies": {
//           "body-parser": "^1.20.2",
//           "express": "^4.18.3",
//           "inquirer": "^9.2.16",
//           "morgan": "^1.10.0",
//           "qr-image": "^3.2.0",
//           "sillyname": "^0.1.0"
//         }
//       }
      
      



// import generateName from 'sillyname'
// var new1 = generateName()
// console.log(new1)


 /// QR - Code genertator 
// import inquirer from 'inquirer';
// import  qr  from 'qr-image'; 
// import fs from 'fs'


// inquirer
//   .prompt([
// {message:"what is url", name:"URL"  }
//   ])
//   .then((answers) => {
//  const url = answers.URL
//  var qr_svg = qr.image(url);
// qr_svg.pipe(fs.createWriteStream('My_qr.png'));

//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       console.log("Tty Error", isTtyError)
//     } else {
//       console.log("Error creating URL QR code ")
//     }
//   });




// import inquirer from 'inquirer';

// // Define the question
// const questions = [
//   {
//     type: 'input', // This specifies that we want to get some text input from the user
//     name: 'url', // This is the key that will be used to access the answer
//     message: 'Please enter a URL:', // This is the question that will be displayed to the user
//     validate: function(value) {
//       // Simple validation to check if the input is a valid URL
//       const pass = value.match(
//         // This is a basic pattern for validating a simple URL; it may need to be adjusted depending on the specifics
//         /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
//       );
//       if (pass) {
//         return true; // If the validation passes, return true
//       }

//       return 'Please enter a valid URL'; // If the validation fails, return a message
//     }
//   }
// ];

// // Use the prompt
// inquirer.prompt(questions).then(answers => {
//   console.log(`The URL you entered is: ${answers.url}`);
// }).catch(error => {
//   console.error('An error occurred:', error);
// });




// server code 

// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Serve static files from the same directory as index.js
// app.use(express.static(__dirname));

// app.get('/', function (req, res) {
//         res.send('<h1>Hello World main page</h1>');
//         console.log(JSON.stringify({
//                 method: req.method,
//                 url: req.url,
//                 headers: req.headers
//                 // You can add other parts of the request you're interested in
//         }, null, 2));
// });

// app.get('/about', function (req, res) {
//         // Serve Banner.html, which is located in the same directory as index.js
//         let filePath = path.join(__dirname, 'Banner.html');
//         res.sendFile(filePath);
// });

// app.post('/post', (req, res) => {
//       res.send([{name : "milli"},{name : "z"},{name : "tol"}]);
//     });
    

// app.use(function (req, res, next) {
//      res.status(404).send("404 Not Found 1");
//     });


// app.listen(3001, () => {
//      console.log('Server started on http://localhost:3001');
// });


/// ---- client cod3e to access above code 

// fetch('http://localhost:3001/post', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
// .then(response => {
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// })
// .then(data => {
//   console.log(data);
//   if(data[1].name == "z"){
//     console.log("confirmed ")
//   }
//   else{
//     console.log("No confirmado")
//   }
// })
// .catch(error => {
//   console.error('There was a problem with your fetch operation:', error);
// });



//// using middleware - body parse 


// import express from 'express';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import bodyParser from 'body-parser'

// const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


// app.use(express.static(__dirname));
// app.use(bodyParser.urlencoded({extended:true}))

// app.get('/', function (req, res) {
//         res.send('<h1>Hello World main page</h1>');
// });

// app.post('/post', (req, res) => {
//       console.log(req.body)
//     });

// app.use(function (req, res, next) {
//      res.status(404).send("404 Not Found 1");
//     });

// app.listen(3001, () => {
//      console.log('Server started on http://localhost:3001');
// });


// you can send using html to above parser // here is the html 
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Submit Name Form</title>
// </head>
// <body>

// <form action="http://localhost:3001/post" method="POST">
//     <label for="firstName">First Name:</label><br>
//     <input type="text" id="firstName" name="firstName" required><br>
//     <label for="lastName">Last Name:</label><br>
//     <input type="text" id="lastName" name="lastName" required><br><br>
//     <input type="submit" value="Submit">
// </form>

// </body>
// </html>


// using morgan middleware 
// import express from 'express';
// import morgan from 'morgan'

// const app = express();
// //app.use(morgan('tiny'))
// app.use(morgan('combined'))
// app.get('/', function (req, res) {
//         res.send('<h1>Hello World main page</h1>');
// });
// app.use(function (req, res, next) {
//      res.status(404).send("404 Not Found 1");
//     });

// app.listen(3001, () => {
//      console.log('Server started on http://localhost:3001');
// });





//--------------------------------------------------
// QR code in html returned from server 



import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser'
import  qr  from 'qr-image'; 
import fs from 'fs'

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function (req, res) {
        let filePath = path.join(__dirname, 'Qrdomain.html');
        res.sendFile(filePath)
});

app.post('/post', (req, res) => {
      console.log(req.body['Domain'])
      let url = req.body['Domain']
      var qr_svg = qr.image(url);
 qr_svg.pipe(fs.createWriteStream('My_qr_fromForm.png'));
 let filePath = path.join(__dirname, 'QR.html');
 res.sendFile(filePath)
    });

app.use(function (req, res, next) {
     res.status(404).send("404 Not Found 1");
    });

app.listen(3001, () => {
     console.log('Server started on http://localhost:3001');
});

// ---------------------------------------
//here is Qrdomian.html for above 
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Submit Name Form</title>
// </head>
// <body>

//     <h1> Milli Enter Domain to create QR</h1>

// <form action="http://localhost:3001/post" method="POST">
//     <label for="Domain">Domain:</label><br>
//     <input type="text" id="Domain" name="Domain" required><br><br>
//     <input type="submit" value="Submit">
// </form>

// </body>
// </html>



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
    
// <h1>Here is your QR milli</h1>
//     <img src="./My_qr_fromForm.png" height="500px" width="500px">
//     <h1><a href="Qrdomain.html" >Try anotherone </a></h1>
// </body>

// </html>
