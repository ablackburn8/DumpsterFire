var a= 1;

while (a<8){
	alert (a);
	a++;
}

var coolNames = new Array();
coolNames[0]="asher";
coolNames[1]="orchid";
coolNames[2]="mad";
coolNames[3]="tuesday";

coolNames.sort();
document.write(coolNames);


var pencilType={material:"wood", lead: "HB", kind: "graphite"};

document.write(pencilType.lead);








var myDemo =  document.getElementById("demoparent");

console.log(myDemo.childNodes.length);

var myDemoTags = document.getElementsByTagName("li");

console.log ("Number of li links: "+ myDemoTags.length);

var linksInMenu = myDemo.getElementsByTagName("li");

console.log ("Number of li items in Menu: "+ linksInMenu.length);

var myComments = document.getElementById("commentary");

myComments.setAttribute("align", "right");

myComments.setAttribute("style", "color: pink");

var newItem = document.createElement("li");

var newText = document.createTextNode("I'm a free spirit, untethered");

myDemo.appendChild(newItem);

newItem.appendChild(newText);

// JavaScript Document