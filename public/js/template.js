/*$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});*/
function main() {
  document.getElementsByClassName("menu-toggle").onclick = function(){
    document.getElementsByClassName("menu-toggle").toggleClass("on");
    document.getElementsByClassName("menu-section").toggleClass("on");
    document.nav.ul.toggleClass("on");
  };
}

window.onload = function() {
       main();
}
