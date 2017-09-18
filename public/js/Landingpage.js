function main() {
  var one =document.getElementsByClassName("one")[0];
  var two =document.getElementsByClassName("two")[0];
  var logo =document.getElementById("logo");
  function animation2(){
    one.style.webkitAnimationPlayState = 'running';
   }
  function animation1(){
    two.style.webkitAnimationPlayState = 'running';
  /*logo.src="https://scdesigns.stackstorage.com/public-share/cJLlZgdsEhZpZeK/preview?path=/&mode=thumbnail&size=medium";*/
   }
   function load(){
     window.location.href = '/home'
   }
  setTimeout(animation1, 2500);
  setTimeout(animation2, 5000);
  setTimeout(load,7500);
}

window.onload = function() {
       main();
}
