if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}
var username = "osdo0inf483x";
var password = "ghgu8343z84";
function addAccount(user, pass) {
    var users = JSON.parse(localStorage.getItem('Users')) || [];
    var userData = [{user},
    {pass}];
    users.push(userData);
    document.getElementById("error").style.visibility = "hidden";
    username = document.getElementById("usernameInput").value;
    localStorage.setItem('Users', JSON.stringify(users));
}
function signUp() {
    document.getElementById("signedText").style.visibility = "hidden";
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
        var userUser = JSON.parse(localStorage.getItem("Users"));
        if (userInput === userUser[0][0].user && passInput === userUser[0][1].pass) {
            return true;
        } else {
            try {
                return tryThis();
            }
            catch(err) {
                console.log("catched error for function tryThis");
                return false;
            }
        }
        function tryThis() {
            if (userInput === userUser[1][0].user && passInput === userUser[1][1].pass) {
                return true;
            } else if (userInput === userUser[2][0].user && passInput === userUser[2][1].pass) {
                return true;
            } else if (userInput === userUser[3][0].user && passInput === userUser[3][1].pass) {
                return true;
            } else if (userInput === userUser[4][0].user && passInput === userUser[4][1].pass) {
                return true;
            } else if (userInput === userUser[5][0].user && passInput === userUser[5][1].pass) {
                return true;
            } else if (userInput === userUser[6][0].user && passInput === userUser[6][1].pass) {
                return true;
            } else if (userInput === userUser[7][0].user && passInput === userUser[7][1].pass) {
                return true;
            } else if (userInput === userUser[8][0].user && passInput === userUser[8][1].pass) {
                return true;
            } else if (userInput === userUser[9][0].user && passInput === userUser[9][1].pass) {
                return true;
            } else if (userInput === userUser[10][0].user && passInput === userUser[10][1].pass) {
                return true;
            } else if (userInput === userUser[11][0].user && passInput === userUser[11][1].pass) {
                return true;
            } else if (userInput === userUser[12][0].user && passInput === userUser[12][1].pass) {
                return true;
            } else if (userInput === userUser[13][0].user && passInput === userUser[13][1].pass) {
                return true;
            } else if (userInput === userUser[14][0].user && passInput === userUser[14][1].pass) {
                return true;
            } else if (userInput === userUser[15][0].user && passInput === userUser[15][1].pass) {
                return true;
            } else if (userInput === userUser[16][0].user && passInput === userUser[16][1].pass) {
                return true;
            } else if (userInput === userUser[17][0].user && passInput === userUser[17][1].pass) {
                return true;
            } else if (userInput === userUser[18][0].user && passInput === userUser[18][1].pass) {
                return true;
            } else if (userInput === userUser[19][0].user && passInput === userUser[19][1].pass) {
                return true;
            } else if (userInput === userUser[20][0].user && passInput === userUser[20][1].pass) {
                return true;
            } else if (userInput === userUser[21][0].user && passInput === userUser[21][1].pass) {
                return true;
            } else if (userInput === userUser[22][0].user && passInput === userUser[22][1].pass) {
                return true;
            } else if (userInput === userUser[23][0].user && passInput === userUser[23][1].pass) {
                return true;
            } else if (userInput === userUser[24][0].user && passInput === userUser[24][1].pass) {
                return true;
            } else if (userInput === userUser[25][0].user && passInput === userUser[25][1].pass) {
                return true;
            } else if (userInput === userUser[26][0].user && passInput === userUser[26][1].pass) {
                return true;
            } else if (userInput === userUser[27][0].user && passInput === userUser[27][1].pass) {
                return true;
            } else if (userInput === userUser[28][0].user && passInput === userUser[28][1].pass) {
                return true;
            } else if (userInput === userUser[29][0].user && passInput === userUser[29][1].pass) {
                return true;
            } else if (userInput === userUser[30][0].user && passInput === userUser[30][1].pass) {
                return true;
            } else if (userInput === userUser[31][0].user && passInput === userUser[31][1].pass) {
                return true;
            } else if (userInput === userUser[32][0].user && passInput === userUser[32][1].pass) {
                return true;
            } else if (userInput === userUser[33][0].user && passInput === userUser[33][1].pass) {
                return true;
            } else if (userInput === userUser[34][0].user && passInput === userUser[34][1].pass) {
                return true;
            } else if (userInput === userUser[35][0].user && passInput === userUser[35][1].pass) {
                return true;
            } else if (userInput === userUser[36][0].user && passInput === userUser[36][1].pass) {
                return true;
            } else if (userInput === userUser[37][0].user && passInput === userUser[37][1].pass) {
                return true;
            } else if (userInput === userUser[38][0].user && passInput === userUser[38][1].pass) {
                return true;
            } else if (userInput === userUser[39][0].user && passInput === userUser[39][1].pass) {
                return true;
            } else if (userInput === userUser[40][0].user && passInput === userUser[40][1].pass) {
                return true;
            } else if (userInput === userUser[41][0].user && passInput === userUser[41][1].pass) {
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