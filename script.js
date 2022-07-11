//enabling slide movement on click of any of the slider buttons
var slidebutton = document.getElementsByClassName("bar");
var slide = document.getElementById("sliderow");
var testiback = document.getElementById("testiback");
var slideindex = 0;

// function for right arrow click
function next(){
    next_slide()
}

//function for left arrow click
function prev(){
    prev_slide()
}

//function for slide change forwards
function next_slide(){
    if (slideindex == 19) {
        slideindex = 0;
    } else{
        slideindex++
    }
    slide_number()  //calls function for slide change after query executed to determine slide number
}

//function for slide change backwards
function prev_slide(){
    if (slideindex == 0) {
        slideindex = 19;
    } else{
        slideindex--
    }
    slide_number()
}

//function for the dot click
function bar_num(n) {
    slideindex = n;
    slide_number()
}

// function for slide change
function slide_number(){
    slide.style.transform = "translateX(" + (slideindex * -5) + "%)";

    for (i = 0; i < 20; i++) {
        slidebutton[i].classList.remove("active");
    }
    slidebutton[slideindex].classList.add("active");

    var backgd_1 = [0,3,6,9,12,15,18]; //cooresponding slideindex number for each background
    var backgd_2 = [1,4,7,10,13,16,19]; //cooresponding slideindex number for each background
    
    //conditional statement to assign background color to applicable slide
    if (backgd_1.includes(slideindex)) {
        testiback.style.backgroundColor = "rgb(3, 84, 173)";
    } else if (backgd_2.includes(slideindex)) {
        testiback.style.backgroundColor = "rgb(65, 155, 218)";
    } else {
        testiback.style.backgroundColor = "rgb(0, 190, 126)";
    } 
}

//function for automatic movement
function autoplay() {
    next_slide()
}

//activating automatic movement
var timer = setInterval(autoplay, 5000);

//the animation automatically give way for execution of command for manual controls that comes before it,
// before it resumes and continues i.e codes are executed in heirachy from top of code editor till bottom


