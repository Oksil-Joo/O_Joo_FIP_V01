import { SendMail } from "./components/mailer.js";

(() => {
// button function
let button = document.querySelector("#button"); //haburger
let burgerCon = document.querySelector("#burgerCon");

let mailSubmit = document.querySelector('.submit-wrapper'); //mail
    

//hamburger
    function hamburgerMenu() {
        burgerCon.classList.toggle("slideToggle");
        button.classList.toggle("expanded");
    }

// send.php start
    function processMailFailure(result) {

        console.table(result); 
        alert(result.message);
    }
   
    function processMailSuccess(result) {

        console.table(result); 
        alert(result.message);
    }

    
    function processMail(event) {
   
        event.preventDefault();
        
        SendMail(this.parentNode)
            .then(data => processMailSuccess(data))
            .catch(err => processMailFailure(err));
    }

    //hamburger button
    button.addEventListener("click", hamburgerMenu);
//send mail
    mailSubmit.addEventListener("click", processMail); 

})();