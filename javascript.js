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
            for (i = 0; i <= 41; i++){
                
                if (userInput === userUser[i][0].user && passInput === userUser[i][1].pass) {
                    return true;
                }else{
                    if(i == 41){//Last item
                        return false;
                }
            }
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
