let sliderImages = document.querySelectorAll(".slide"),
arrowLeft = document.querySelector("#arrow-left"),
arrowRight = document.querySelector("#arrow-right"),
b1=document.querySelector("#button1"),
b2=document.querySelector("#button2"),
b3=document.querySelector("#button3"),
b4=document.querySelector("#button4"),
current = 0;

//button click
b1.addEventListener("click",function(){
    reset();
    current=0;
    color();
    sliderImages[0].style.display="block";
});

b2.addEventListener("click",function(){
    reset();
    current=1;
    color();
    sliderImages[1].style.display="block";
});

b3.addEventListener("click",function(){
    reset();
    current=2;
    color();
    sliderImages[2].style.display="block";
});

b4.addEventListener("click",function(){
    reset();
    current=3;
    color();
    sliderImages[3].style.display="block";
});

// Clear all images
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
        b1.style.background="rgba(224, 223, 223, 0.671)";
        b2.style.background="rgba(224, 223, 223, 0.671)";
        b3.style.background="rgba(224, 223, 223, 0.671)";
        b4.style.background="rgba(224, 223, 223, 0.671)";
    }
}

//set color of button
function color()
{
    if(current==0)
    {
        b1.style.background="rgb(128,228,192)";   
    }
    else if(current==1)
    {
        b2.style.background="rgb(128,228,192)";    
    }
    if(current==2)
    {
        b3.style.background="rgb(128,228,192)";    
    }
    if(current==3)
    {
        b4.style.background="rgb(128,228,192)";    
    }
}

// Init slider
function startSlide() {
reset();
sliderImages[0].style.display = "block";
b1.style.background="rgb(128,228,192)";
}

// Show prev
function slideLeft() {
reset();
sliderImages[current - 1].style.display = "block";
current--;
color();
}

// Show next
function slideRight() {
reset();
sliderImages[current + 1].style.display = "block";
current++;
color();
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
if (current === 0) {
    current = sliderImages.length;
}
slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
if (current === sliderImages.length - 1) {
    current = -1;
}
slideRight();
});

//automatic slider
startSlide();
function next()
{
    if(current<sliderImages.length-1)
    {
        slideRight();
    }
    else
    {
        current=-1;
        slideRight();
    }
}
setInterval(next,5000);

//set visiblitiy
function showarrow()
{
    if(arrowLeft.style.visibility=="hidden")
    {
        arrowLeft.style.visibility="visible";
        arrowRight.style.visibility="visible";
        b1.style.visibility="visible";
        b2.style.visibility="visible";
        b3.style.visibility="visible";
        b4.style.visibility="visible";
    }
    else
    {
        arrowLeft.style.visibility="hidden";
        arrowRight.style.visibility="hidden";
        b1.style.visibility="hidden";
        b2.style.visibility="hidden";
        b3.style.visibility="hidden";
        b4.style.visibility="hidden";
    }
}
