var button = document.getElementsByClassName('button');
var buttonQuantity = button.length;
console.log(button);


for (i=0; i < buttonQuantity; i++) {
    document.getElementsByClassName('button')[i].innerText = "Button changed!";
}
