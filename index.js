function frnt(){
    var right = document.querySelector(".ul");
    right.scrollBy({
        top: 0, 
        left: 350, 
        behavior: 'smooth' // Smooth scroll
    });
}

function back(){
    var left = document.querySelector(".ul");
    left.scrollBy({
        top: 0, 
        left: -350, 
        behavior: 'smooth' // Smooth scroll
    });
}
