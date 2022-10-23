
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {

  document.documentElement.style.setProperty("--main-color", mainColors);
  
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    if (element.dataset.color === mainColors) {
      element.classList.add("active");
    }
  });
}

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach((li) => {

  li.addEventListener("click", (e) => {
    
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);
  });
});


// Random Background Option
let backgroundOption = true;

let backgroundInterval;

let backgroundLocalItem = localStorage.getItem("background_option");

if (backgroundLocalItem !== null) {
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === "true") {
    backgroundOption = true;

    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    backgroundOption = false;

    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}

// Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");

  document.querySelector(".settings-box").classList.toggle("open");
};


// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

randomBackEl.forEach((span) => {
  span.addEventListener("click", (e) => {
    handleActive(e);

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;

      randomizeImgs();

      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background_option", false);
    }
  });
});

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

let imgsArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

function randomizeImgs() {
  if (backgroundOption === true) {
    let imgCounter = 0;
    backgroundInterval = setInterval(() => {
      imgCounter++;
      if (imgCounter >=imgsArray.length) {
        imgCounter = 0;
      }
      landingPage.style.backgroundImage = `url('imgs/${imgsArray[imgCounter]}')`;
    }, 5000);
    
  }
}

randomizeImgs();

// select skills selectors
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;
  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;
  // Window Height
  let windowHeight = this.innerHeight;
  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + (skillsOuterHeight/2) - windowHeight) {
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );

    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// select popup elements 
let popup = document.querySelector(".popup-back");
let popupTitle = document.querySelector(".popup-back h3");
let popupImg = document.querySelector(".popup-back img");
let popupClose = document.querySelector(".close-button");

// select gallery images and add the event
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
  img.addEventListener("click", function (e) {
    popup.style.display = "block";
    popupTitle.innerHTML = `${e.target.alt}`;
    popupImg.src = `${e.target.src}`;
  })
});

// close popup
popupClose.addEventListener("click", () => {
    popup.style.display = "none";
})

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {

  elements.forEach(ele => {

    ele.addEventListener("click", (e) => {
  
      e.preventDefault();
  
      document.querySelector(e.target.dataset.section).scrollIntoView({
  
        behavior: 'smooth'
  
      });
  
    });
  
  });

}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);


function handleActive(ev) {
 
  ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
    element.classList.remove("active");
  });

  ev.target.classList.add("active");
}


let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {
  bulletsSpan.forEach((span) => {
    span.classList.remove("active");
  });

  if (bulletLocalItem === "block") {
    bulletsContainer.style.display = "block";

    document.querySelector(".bullets-option .yes").classList.add("active");
  } else {
    bulletsContainer.style.display = "none";

    document.querySelector(".bullets-option .no").classList.add("active");
  }
}

bulletsSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    console.log(span);
    if (span.dataset.display === "show") {
      bulletsContainer.style.display = "block";

      localStorage.setItem("bullets_option", "block");
    } else {
      bulletsContainer.style.display = "none";

      localStorage.setItem("bullets_option", "none");
    }

    handleActive(e);
  });
});

// Reset Button
document.querySelector(".reset-options").onclick = function () {

  // localStorage.clear();
  localStorage.removeItem("color_option");
  localStorage.removeItem("background_option");
  localStorage.removeItem("bullets_option");

  window.location.reload();

};


let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");


toggleBtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");

  tLinks.classList.toggle("open")

}
window.addEventListener("click", (e) => {
  e.stopPropagation();

  if (e.target !== toggleBtn || e.target !== tLinks) {
    toggleBtn.classList.remove("menu-active");
    tLinks.classList.remove("open");
    console.log(toggleBtn.classList, tLinks.classList);
  }
});


