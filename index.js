
var element = document.querySelectorAll(".drum").length;

for(i=0;i<element ;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){

var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);

buttonAnimation(buttonInnerHTML);
    
});
}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
    switch (key) {
        case "s":var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
            break;
            case "w":var audio1 = new Audio('sounds/tom-2.mp3');
            audio1.play();
                break;
                case "e":var audio2 = new Audio('sounds/tom-3.mp3');
                audio2.play();
                    break;
                    case "t":var audio3 = new Audio('sounds/crash.mp3');
                    audio3.play();
                        break;
                        case "h":var audio4 = new Audio('sounds/snare.mp3');
                        audio4.play();
                            break;
                            case "a":var audio5 = new Audio('sounds/tom-4.mp3');
                            audio5.play();
                                break;
                                case "z":var audio6 = new Audio('sounds/kick-bass.mp3');
                                audio6.play();
                                    break;
                            
    
        default:console.log(buttonInnerHTML);
            
    }
    
    
}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");

    },100);
}