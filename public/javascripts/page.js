function call(name) {
var request = new XMLHttpRequest();
request.onload = function() {
	var text=JSON.parse(this.responseText)
    document.write(
    	text.name+"<br />"+text["badges"].length+"<br />")
    	for(var i=0; i<text["badges"].length; i++){ 
    	document.write(   	
    	"<img src="+text.badges[i]["icon_url"]+">"
    	)}
};

request.open("get", "http://teamtreehouse.com/"+name+".json");
request.send();

}


var makeForm=document.createElement("form")
var makeInput=document.createElement("input")
var makeLabel=document.createElement("label")
var makeDiv=document.createElement("div")
var button=document.createElement("input")

function foamy(text){
	makeForm.addEventListener('submit', function(event){
		event.preventDefault();
	})
	makeForm.setAttribute("action", '""')
	makeLabel.setAttribute("for", "GET-name")
	makeLabel.innerHTML=text;
	makeInput.setAttribute("type", "text")
	makeInput.setAttribute("name", text)
	makeDiv.appendChild(makeLabel)
	makeDiv.appendChild(makeInput)		
	makeForm.appendChild(makeDiv)
	button.setAttribute("type", "submit")	
	makeDiv.appendChild(button)
	document.body.appendChild(makeForm)
	}

var ins=makeForm.getElementsByTagName("input")

foamy("Enter a username: ")
button.addEventListener("click", function(){call(ins[0].value)})





