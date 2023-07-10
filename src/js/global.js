const navbar = document.querySelector(".main-navbar");
function navbarScrollInit() {
  if (window.scrollY > 1) {
    navbar.classList.add("main-navbar-scroll");
  } else {
    navbar.classList.remove("main-navbar-scroll");
  }
}

document.addEventListener("scroll", () => {
  navbarScrollInit();
});

function scrollToElement(elementId) {
  var elem = document.getElementById(elementId);
  if (elem) {
    var elemRect = elem.getBoundingClientRect();
    var scrollYValue = window.scrollY + elemRect.top - 100;

    if (elementId == "benefit") {
      scrollYValue = scrollYValue + 100;
    } else if (elementId == "services") {
      scrollYValue = scrollYValue + 50;
    } else if (elementId == "contact") {
      scrollYValue = scrollYValue - 50;
    }

    window.scrollTo({
      top: scrollYValue,
    });
  }
}

function initLoader() {
  var spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(spinner.remove(), 4000);
  }

  window.scrollTo({
    top: 0,
  });
}
