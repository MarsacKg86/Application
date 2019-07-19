/*From here down will have the on click load the array*/

var btn = document.getElementById("btn");
var list = document.getElementById("addressList");

var addresses = ['614 Mockingbird Lane', '88 James Drive', '112 13th Street'];

var btn = document.getElementById("btn");
btn.addEventListener("click", function load(file){
    document.getElementById("content").innerHTML='<object type="text/html" data="/login.html"></object>';

});

btn.addEventListener("click", function(){
    for (i=0; i<addresses.length; i++){
        var node = document.createElement("LI");
        var address = document.createTextNode(addresses[i]);
        node.appendChild(address);
        list.appendChild(node);
    }
});




