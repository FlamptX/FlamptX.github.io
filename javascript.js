if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
 }

var username = "osdo0inf483x";
var password = "ghgu8343z84";
var user = "ufshudug37r7";
var pass = "fgew732rzuef";
function addAccount(user, pass) {
    if (localStorage.getItem("account") === null) {
        localStorage.setItem("account", "");
    }
    var users = JSON.parse(localStorage.getItem('Users')) || [];
    var userData = [{user},
    {pass}];
    users.push(userData);
    localStorage.setItem('Users', JSON.stringify(users));
    users.forEach(console.log);
}
function signUp() {
    document.getElementById("signedText").style.visibility = "hidden";
    document.getElementById("error").style.visibility = "hidden";
    username = document.getElementById("usernameInput").value;
    password = document.getElementById("passwordInput").value;
    if (username.length >= 4 && password.length >= 6) {
        document.getElementById("signedText").style.visibility = "visible";
        addAccount(username, password)
        document.getElementById("usernameInput").value = "";
        document.getElementById("passwordInput").value = "";
    } else {
        document.getElementById("error").style.visibility = "visible";
    }
}
function logIn() {
    document.getElementById("loggedText").style.visibility = "hidden";
    document.getElementById("error2").style.visibility = "hidden";
    userInput = document.getElementById("logUserInput").value;
    passInput = document.getElementById("logPassInput").value;
    function checkUser() {
        if (userInput === users[0][0].user && passInput === users[0][1].pass) {
            return true;
        } else {
            try {
                return tryThis();
            }
            catch(err) {
                console.log("catched");
            }
        }
        function tryThis() {
            if (userInput === users[1][0].user && passInput === users[1][1].pass) {
                return true;
            } else if (userInput === users[2][0].user && passInput === users[2][1].pass) {
                return true;
            } else if (userInput === users[3][0].user && passInput === users[3][1].pass) {
                return true;
            } else if (userInput === users[4][0].user && passInput === users[4][1].pass) {
                return true;
            } else if (userInput === users[5][0].user && passInput === users[5][1].pass) {
                return true;
            } else if (userInput === users[6][0].user && passInput === users[6][1].pass) {
                return true;
            } else if (userInput === users[7][0].user && passInput === users[7][1].pass) {
                return true;
            } else if (userInput === users[8][0].user && passInput === users[8][1].pass) {
                return true;
            } else if (userInput === users[9][0].user && passInput === users[9][1].pass) {
                return true;
            } else if (userInput === users[10][0].user && passInput === users[10][1].pass) {
                return true;
            } else if (userInput === users[11][0].user && passInput === users[11][1].pass) {
                return true;
            } else {
                return false;
            }
        }
    }
    var trueornot = checkUser();
    if (trueornot) {
        document.getElementById("loggedText").style.visibility = "visible";
        document.getElementById("logUserInput").value = "";
        document.getElementById("logPassInput").value = "";
    } else {
        document.getElementById("error2").style.visibility = "visible";
    }
}