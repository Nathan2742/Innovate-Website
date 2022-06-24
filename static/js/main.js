
// dark mode function###########

function darkMode(){
    let element = document.getElementById("base-body")
    element.classList.toggle("dark-mode")
}

stateCheck()
function stateCheck() {
    // console.log(`Page loading ${state}!!`)
    let element = document.body;
    let button = document.getElementsByTagName("button");
    let title = document.getElementsByTagName("h1");
    let state = localStorage.getItem("state")
    if (state !== 'dark') {
        element.className = "light-mode";
        title.className = "light-mode";
        button.className = "light-mode";
        console.log(state)
    } else if (state === "dark") {
        element.className = "dark-mode";
        title.className = "dark-mode";
        button.className = "dark-mode";
        console.log(state)
    }
}


function darkMode() {
    let state = localStorage.getItem("state")
    let element = document.body;
    let button = document.getElementsByTagName("button");
    let title = document.getElementsByTagName("h1");
    if (state !== 'dark') {
        element.className = "dark-mode";
        title.className = "dark-mode";
        button.className = "dark-mode";
        localStorage.setItem("state", "dark")
        console.log(state)
    } else if (state === 'dark') {
        element.className = "light-mode";
        title.className = "light-mode";
        button.className = "light-mode";
        localStorage.setItem("state", "light")
        console.log(state)
    }
}
// ######################


// ######## silde function

let slides = document.getElementsByClassName("slider__slide");
let navlinks = document.getElementsByClassName("slider__navlink");

let currentSlide = 0;

document.getElementById("nav-button--next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("nav-button--prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

document.getElementById("nav-button--next").addEventListener("click", changeSlide(currentSlide + 1));

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})

// ############### wishlist ########################################



function taskHider(){
    let element = document.getElementById("list")
    element.classList.toggle("hidden")
}

function addItem() {
    var a = document.getElementById("list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    a.appendChild(li);
}

// Creating a function to remove item from list
function removeItem() {

    // Declaring a variable to get select element
    var a = document.getElementById("list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    a.removeChild(item);
}




// ########################################




// ########################## Clear contact form infomation #############

function submit() {

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

}

document.getElementById("submit").onclick = submit2 ("click",submit);

function submit() {
    document.getElementById("message2").innerHTML = "Thanks for your feed back";
}