/*!
* Start Bootstrap - Small Business v5.0.5 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function() {

  const name = prompt('Please enter your name:');
  const email = prompt('Please enter your email:');
  if (name && email) {
    
    console.log('Name:', name);
    console.log('Email:', email);

    alert('Thank you! You will be contacted shortly.');
  } else {
    
    console.log('Name and Email are required.');
  }
});


