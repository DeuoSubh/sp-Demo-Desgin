$('.bxslider').bxSlider({
    auto: true,
    mode: 'fade',
    pager: true,
    
}, 300);
// check if any storage colors
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
    document.documentElement.style.setProperty('--main--color', localStorage.getItem("color_option"));
}



// Start Add Active Class to links 
// function myFunction() {
//     var element = document.getElementById("myDIV");
//     element.classList.add("opened");
// }

// Start Settings Box
document.querySelector(".toggle-spin .fa-cog").onclick = function (){

this.classList.toggle("fa-spin");
    
document.querySelector(".settings-box").classList.toggle("open");

};






// switch colors
const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach(li => {

    li.addEventListener("click", (e) => {
    
    document.documentElement.style.setProperty('--main--color', e.target.dataset.color);

    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(ev);

    });

    // set Color on local Storag

});



// Switch Random background Option  

const randomBackEl = document.querySelectorAll(".random-background span");

randomBackEl.forEach(span => {

span.addEventListener("click", (e) => {
    
    e.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active");

    });

    e.target.classList.add("active");

    });
});


// Select  Landing Page 

// let landingPage = document.querySelector(".landing-page");

// // Get Array of Images

// let imgsArray =["pic1.png", "pic2.jpg", "pic3.jpg", "pic4.jpg"]




// setInterval(() => {

//     let randomNumber = Math.floor(Math.random() * imgsArray.langth);

// /*Change background Url*/                                                                                                

//     // landingPage.style.backgroundImage = 'URL("pic/' + imgsArray[randomNumber] + '")';

// }, 3000);

randomizeImgs();

// Select Skills selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function (){
    // Skills offset top

    let skillsOffsetTop = ourSkills.OffsetTop;
    // Outer height 

    let skillsOuterHeight = ourSkills.OffsetHeight;
    // window height

    let windowHeight = this.innerHeight;

    //Window ScrollTop 

    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight )) {
        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
        });
    };
};

// creat popuo with the Image
let ourGallary = document.querySelectorAll(".gallary img"); 

ourGallary.forEach(img => {

    img.addEventListener('click', (e) => {

    //Creat overlay Element 

        let overlay = document.createElement("div");

    // Add Class overlay

        overlay.className = 'popup-overlay';
    
    //Append overlay to the body 
    
        document.body.appendChild(overlay);
    // Creat popup box
    let popupBox = document.createElement("div");  

        //Add Class to popup box
        popupBox.className = 'popup-box'; 

    //Creat the Image 
        let popupImage = document.createElement("img");

    // Set Image Sourse 

        popupImage.src = img.src;
        // Add Image to popup box

    popupBox.appendChild(popupImage);

    //append the popup to body

    document.body.appendChild(popupBox);

    });
});


// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullets");

// Scroll links to section 

const allLinks = document.querySelectorAll(".landing-page .navbar-nav a");


function scrollToSomewhere (elements){
    elements.forEach(ele =>{

        ele.addEventListener ("click", (e) => {
    
            e.preventDefault();
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
    
                behavior: 'smooth'
    
            });
        });
    });
}
scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

// Handle  Avctive State 

function handleActive(ev) {

    ev.tagret.parentElement.querySelectorAll(".active").forEach(element =>{

        element.classList.remove("active");

    });

    ev.tagret.classList.add("active");
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelectorAll(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

    bulletsSpan.forEach(span => {   

        span.classList.remove("active");
    });

    if (bulletLocalItem === 'block') {

        bulletsContainer.style.display = 'block'; 

        document.querySelector(".bullets-option .yes").classList.add("active");
    } else {

        bulletsContainer.style.display = 'none';

        document.querySelector(".bullets-option .no").classList.add("active");
    }
}

bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === 'show')  {

            bulletsContainer.style.display = 'block';

            localStorage.setItem("bullets_option", 'block');

        } else { 

            bulletsContainer.style.display = 'none';

            localStorage.setItem("bullets_option", 'none');
        }
        handleActive(e);
    });
});


// button Reset Options 

document.querySelector(".reset-options").onclick = function () {

    localStorage.clear();
    // localStorage.removeItem("bullets_options");
    localStorage.removeItem("color_option");
    window.location.reload();
};