const section = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');

const options = {
    threshold: 0.6
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;


       const activeAnchor = document.querySelector(`[data-page=${className}]`);


        const gradientIndex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect();

        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };

        if (entry.isIntersecting){
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.border = "solid whitesmoke 2px";
            
        }
    });
}

section.forEach(section => {
    observer.observe(section);
});


const hero = document.querySelector(".hero");
const heroText = document.querySelector(".hero-text");


var t1 = new TimelineMax();

t1.fromTo(
    hero, 
    1,
    { height: "0%" }, 
    { height: "80%", ease: Power2.easeInOut }
).fromTo(
    hero,
    1.2,
    { width: "100%"},
    { width: "80%", ease: Power2.easeInOut}
).fromTo(
    heroText, 
    0.5, 
    { opacity: 0, x: 30 },
    { opacity: 1, x: 0 },
    "-=0.5"
);


const employeeProject = document.querySelector(".project .item1");
employeeProject.addEventListener('click', showhide => {
  var x = document.querySelector(".project .item1 .content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

});

const tictactoeProject = document.querySelector(".project .item2");
tictactoeProject.addEventListener('click', showhide => {
  var x = document.querySelector(".project .item2 .content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

});

const movieTvProject = document.querySelector(".project .item3");
movieTvProject.addEventListener('click', showhide => {
  var x = document.querySelector(".project .item3 .content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

});

const searchProject = document.querySelector(".project .item4");
searchProject.addEventListener('click', showhide => {
  var x = document.querySelector(".project .item4 .content");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

});