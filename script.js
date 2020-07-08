function openNav() {
    document.getElementById("overlay").style.display = "inline-block";
  }
  
  function closeNav() {
    document.getElementById("overlay").style.display = "none";
  }


  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

