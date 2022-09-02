var database = [
	{
		username: "emeric",
		password: "password"
	},
	{
		username: "eric",
		password: "123"
	},
    {
    	username: "mav",
    	password: "wow"
    }
];

var newsfeed = [
	{
		username: "Bobby",
		password: "So tired from all that learning!"
	},
	{
		username: "Sally",
		password: "JavaScript"
	},
	{
		username: "Mitch",
		password: "JavaScript is preaty cool!"
	}
];

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password){
			return true;
		}
	}
	return false
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username and password")
	}
}

var userNamePrompt = prompt("What\'s is your username;");
var passwordPrompt = prompt("What\'s is you password?");

signIn(userNamePrompt, passwordPrompt);