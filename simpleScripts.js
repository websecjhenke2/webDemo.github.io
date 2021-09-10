document.querySelector("#messages").innerText = "bananas";
var i = 0;
var clickHandler = function(eventObject) {
    document.querySelector("#counter").innerText = "You have clicked this button " + ++i + " times";

}

document.querySelector("#first_button").addEventListener("click",clickHandler);