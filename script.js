// welcome message 
window.addEventListener("load", function () {
  alert("welcome to Floss Visuals! 👋");
});

//Create Back To Top Button
const backToTop = document.createElement ("button");

backToTop.textContent = "🔝";
backToTop.className = "back-to-top";

document.body.appendChild(backToTop);


// show the button when scrolling
window.onscroll = function () {
  if (window.scrollY > 300) {
    backToTop.style.display ="block";
  } else {
    backToTop.style.display = "none";
  }
  
};

// Go Back To The Top When button is clicked
backToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  
};


