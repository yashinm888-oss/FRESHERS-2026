// ======================================
// SMOOTH SCROLL ACTIVE NAVBAR
// ======================================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

// ======================================
// NAVBAR BACKGROUND ON SCROLL
// ======================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,.85)";

    } else {

        header.style.background = "rgba(0,0,0,.35)";
    }

});

// ======================================
// COUNTDOWN
// ======================================

// Change this when your event date is confirmed.
const eventDate = new Date("January 1, 2027 18:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance < 0) {

        document.getElementById("timer").innerHTML =
            "<h2>🎉 The Celebration Has Begun!</h2>";

        clearInterval(countdown);

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

},1000);

// ======================================
// SCROLL ANIMATION
// ======================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{threshold:0.2});

document.querySelectorAll(".card").forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition=".8s";

    observer.observe(card);

});

// ======================================
// HERO BUTTON EFFECT
// ======================================

document.querySelectorAll(".btn-primary").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";
    });

});