function slideShow(){
    closeMenuBar()
    var slider = document.getElementById('contact-container');
    slider.classList.toggle('active');
    var lines = document.getElementById('contact-line'); 
    lines.classList.toggle('active');
    var nic = document.getElementById('nothing');
    nic.classList.toggle('active');
    var elements = document.querySelectorAll('.blur');
    elements.forEach(function(element) {
        element.classList.toggle('blure');
    });
    var nothing = document.getElementById('nothing');
    nothing.classList.remove('top');
    nothing.classList.add('contact-adjustment');
    var button = document.getElementById('menu-btn');
    button.classList.toggle('invisible');
}


function toggleMenu() {
    var button = document.getElementById('menu-btn');
    button.classList.toggle('open');
    var slideBar = document.getElementById('menu-bar');
    slideBar.classList.toggle('active');
    if (slideBar.classList.contains('active')) {
        slideBar.style.animation = 'slideIn 0.3s forwards';
    } else {
        slideBar.style.animation = 'slideOut 0.3s forwards';
    }
    var nothing = document.getElementById('nothing');
    nothing.classList.toggle('top');
    nothing.classList.remove('contact-adjustment');
    
}

function closeMenuBar(){
    var button = document.getElementById('menu-btn');
    var slideBar = document.getElementById('menu-bar');
    button.classList.remove('open');
    slideBar.classList.remove('active');
}


window.addEventListener('resize', checkScreenWidth);

function checkScreenWidth() {
    const screenWidth = window.innerWidth;
   
    if (screenWidth > 1200) {
        closeMenuBar();
    }
}

function toggleChoice(button){
    button.classList.toggle('active');
    const contact = document.getElementById('c-button');

    const elements = document.querySelectorAll('.active');
    if(elements.length === 0){
        contact.classList.remove('show');
        const textarea = document.getElementById('requests');
        textarea.value = '';

    }
    else{
        
        contact.classList.add('show');
    }
    
}


let currentSlide = 0;

function moveSlide(direction) {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    slider.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function copyrequests(){
    const parent = document.getElementById('here');
    const textarea = document.getElementById('requests');
    const chosen = parent.querySelectorAll('.active');
    textarea.value = 'Mám záujem o tieto služby:'
    chosen.forEach(element => {
        textarea.value +=  '\n' + element.id;
    });
    
}



