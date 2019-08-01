/*From here down will have the on click load the array*/

var btn = document.getElementById("btn");
var list = document.getElementById("addressList");

var addresses = ['614 Mockingbird Lane', '88 James Drive', '112 13th Street'];

btn.addEventListener("click", function(){
    for (i=0; i<addresses.length; i++){
        var node = document.createElement("LI");
        var address = document.createTextNode(addresses[i]);
        node.appendChild(address);
        list.appendChild(node);  
    }
    console.log(addresses);
});

// function getUrlParameterByName(name, url) {
//     if(!url) url - window.location.href; 
//   name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
//   var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
//   var results = regex.exec(location.search);
//   if(!results) return null;
//   if(!results[2]) return '';
//   return results === null ? '': decodeURIComponent(results[2].replace(/\+/g, ' '));
  
// };

// var username = getUrlParameterByName('username');
//   document.getElementsById('welcomeUser').innerHTML ='Welcome' + username;


 



    