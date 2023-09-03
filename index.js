//for mouse clicks on the screen.
function myclick()
{
    var button_content = this.innerHTML; //'this' refers to an object that is executing current piece of code.
    
    switch(button_content)//trying to see what each button holds and playing that particular sound.
    {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case 'a':
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case 's':
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case 'd':
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        case 'j':
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        case 'k':
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;

        case 'l':
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;

    }
    
}

//for keyboard keys pressed
for (var i = 0; i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", myclick);
    document.querySelectorAll(".drum")[i].addEventListener("keydown", function(event)   //declaring anonymous function that can be defined in addEventListener.
    {
        switch(event.key)   //event.key gives whichever key was pressed and we are checking for that in switch case.
    {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        
        case 'a':
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case 's':
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case 'd':
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        case 'j':
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        case 'k':
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;

        case 'l':
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;

    }
    });
}
/*querySelectorAll gives an array of all the elements having that particular selector, in this case all the elements that have class="drum". 
Then to detect click, we put in a for loop that runs the till number of elements having that selector. Inside for loop we apply event listener 
to each of the elements in the array using [i]*/


