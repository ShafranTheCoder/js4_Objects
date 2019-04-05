"use strict";
let newUser = {
    firstName : "Dima",
    secondName : "Bogutskii",
    getLogin: function() {
        alert (this.firstName[0] + this.secondName) ;
    }
};

function createNewUser(){
    newUser.firstName = prompt("Write your first name");
    newUser.secondName = prompt("Write your second name");

}
createNewUser();
newUser.getLogin();