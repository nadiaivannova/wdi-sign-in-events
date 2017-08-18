document.addEventListener('DOMContentLoaded', function() {

var letMeIn       = document.querySelector('.signin')
var secretWindow  = document.querySelector('.modal')
var goAway        = document.querySelector('.close')
var formulate     = document.querySelector('.getstarted')
var goGo          = document.querySelector('.submit')
var input         = document.querySelectorAll('input')

console.log("formulate",formulate);
console.log('hi');

letMeIn.addEventListener('click', function (e) {
  secretWindow.style.display = 'block';
  e.stopPropagation();
})

goAway.addEventListener('click', function (e) {
  secretWindow.style.display = 'none';
  e.stopPropagation();
})

goGo.addEventListener("click", function (e) {
  for (var i = 0; i < input.length; i++) {
    input[i].className = 'error'
  }
  e.stopPropagation();
})

for (var i = 0; i < input.length; i++) {
  input[i].addEventListener("mouseover", function (e)
  {this.className = ' '
  });
}










});
