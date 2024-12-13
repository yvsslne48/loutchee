const buttonElement = document.querySelector("#btnSubmit");
const messageField = document.querySelector("#message");

const btnBackgroundColor = buttonElement.style.backgroundColor;

let message = "";
let position = "";

messageField.addEventListener("input", (event)=> {
    const value = event.target.value;

    if (value.length > 10) {
        position = 0;
        buttonElement.style.transform = `tranlateX(0)`;
        buttonElement.style.backgroundColor = "darkgreen";
    }
    else {
        buttonElement.style.backgroundColor = btnBackgroundColor;
    }
    message = value;
});

buttonElement.addEventListener("click", function(event){
    event.preventDefault();
})

buttonElement.addEventListener("mouseover" ,function(){
    if (message.length > 10) {
        return;
    }

    if (position === 0){
        position = 120;
    }
    else{
        position = 0;
    }
    buttonElement.style.transform = `translate(${position}px , 0px)`;
});





