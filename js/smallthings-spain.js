// TEXT HIGHLIGHT EFFECT
highlight();

$(window).on("scroll", function(){
    highlight();
});
function highlight(){
    let scroll = $(window).scrollTop();
    let height = $(window).height();

    $(".highlight").each(function(){
        var pos = $(this).offset().top;
        if (scroll+height >= pos) {
            $(this).addClass("active");
        }
    });
}

function setupTypewriter(t) {
    var HTML = t.innerHTML;

    t.innerHTML = "";

    var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 2,
        tempTypeSpeed = 0;

    var type = function() {
        document.getElementById('typewriter').style.visibility = 'visible';
        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === " ") {
                tempTypeSpeed = 0;
            }
            else {
                tempTypeSpeed = (Math.random() * typeSpeed) + 40;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 40;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }

    };

    return {
        type: type
    };
}

var typer = document.getElementById('typewriter');

setTimeout(function(){ typewriter = setupTypewriter(typewriter);typewriter.type(); }, 4000);

//SLIDESHOW
var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    // myTimer = setInterval(function(){plusSlides(1)}, 2000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
    // clearInterval(myTimer);
    if (n < 0){
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }

    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

    // if (n === -1){
    //     myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
    // } else {
    //     myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    // }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
    // clearInterval(myTimer);
    // myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dotActive", "");
    }
    slides[slideIndex-1].style.display = "block";
    if (slideIndex > 0 && slideIndex < 18) {
        dots[0].className += " dotActive";
    }
    else if (slideIndex >= 18 && slideIndex < 25) {
        dots[1].className += " dotActive";
    }
    else if (slideIndex >= 25 && slideIndex < 35) {
        dots[2].className += " dotActive";
    }
    else {
        dots[3].className += " dotActive";
    }
}

// pause = () => {
//     clearInterval(myTimer);
// }
//
// resume = () =>{
//     clearInterval(myTimer);
//     myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
// }
