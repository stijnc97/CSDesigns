function main() {
  var menuToggle= document.getElementsByClassName("menu-toggle")[0];
    menuToggle.onclick = function(){
    menuToggle.classList.toggle("on");
    document.getElementsByClassName("menu-section")[0].classList.toggle("on");
    document.getElementById("list").classList.toggle("on");
  };
}

window.onload = function() {
       main();
}
