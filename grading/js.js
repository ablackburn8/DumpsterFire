// JavaScript Document

alert ("I haven't understood enough to know what to do with the last part on the rubric, but here are examples of what I think was needed for this assignment. Enjoy");

 function myFunction() {
      document.getElementById("demo").innerHTML = "Hello World";
  }

function myElement() {
    var x = document.getElementsByTagName("LI");
    document.getElementById("demo").innerHTML = x[1].innerHTML;
}

function myButton() {
    var btn = document.createElement("BUTTON");
    document.body.appendChild(btn);
}

function myChild() {
    var node = document.getElementById("myList2").lastChild;
    document.getElementById("myList1").appendChild(node);
}

function myNode() {
    var t = document.createTextNode("Hello World");
    document.body.appendChild(t);
}// JavaScript Document