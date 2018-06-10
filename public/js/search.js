/*Search Frame Div*/
var searchFrameDiv = document.getElementById("searchFrame");

/* Making an Api Request to fetch all the Users */
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.mlab.com/api/1/databases/uip/collections/userInfo?apiKey=9Kc-lKEdig09j-lzqfuaXwDLjKX5a6qO", false);
xhr.send();

/* Parsing the response from Api to Json Format*/
var users = JSON.parse(xhr.response);

/*total number of users*/
var numberOfUsers = users.length;

/* Current User Loaded*/
var name = users[0].first_name + " " + users[0].last_name;
var changeName = document.getElementById("userName");
changeName.innerHTML = name;
//Adding username to use it later for redirecting the page
document.getElementById("hiddenText").innerHTML = users[0].username;

var currentUser = 0;



/*Send Request to the User*/
function sendRequestToUser(){
	// modal.style.display = "block";
	loadNextUser();
}

/*Decline the User*/
function declineUser(){
	// modal.style.display = "block";
	loadNextUser();
}


/*Load next user*/
function loadNextUser(){

	if (currentUser < numberOfUsers){
		currentUser++;	
	}
	else{
		currentUser = 0;	
	}
	name = users[currentUser].first_name + " " + users[currentUser].last_name;
	changeName.innerHTML = name;

	//Adding username to use it later for redirecting the page
	document.getElementById("hiddenText").innerHTML = users[currentUser].username;
	document.getElementById('searchFrame').classList.toggle('rotated');
}


//Redirect to Search Profile
function redirectSearchProfile(){
	
	var userName = document.getElementById("hiddenText").innerHTML;
	document.cookie = "searchProfileUsername="+userName+";";

}























