
// bring in all the components needed from the dom
// querySelectorAll groups the items in a node list which behaves like an array
const circles = document.querySelectorAll(".circle");
const progress = document.querySelector(".progress");
const previous = document.querySelector(".previous");
const next =document.querySelector('.next');
// current active is the circle with active class
let currentActive =1;
// add an event listener on the buttons when clicked starting with next btn

next.addEventListener("click", function(){
  // add current active plus one then check if the current active cicle value,is equivalent to overall length of circles
    currentActive++;
  if(currentActive > circles.length){
    currentActive == circles.length;
  }
// call the function update after the click event
  Update();
});
// add an event listener on the previous buttons when clicked 
previous.addEventListener("click", function(){
currentActive--;
if(currentActive < 1){
  currentActive=1;
}
Update();
})

function Update(){
  // loop through all circles by bringing all of them in and check the circle and its index or number because they are in a nodelist like an array
  circles.forEach(function(circle,index){
    if (index < currentActive){
      circle.classList.add('active')
    }else{
      circle.classList.remove('active')
    }
  })
  // moving the progress with click, select all the active circle length and divide it with the overall cirles length
   //which gives us a value, that value is multiplied  by 100 to get a float width, however we can subtract 1 on both to make sure the progress
   //travels exactilly at 33%
 const actives = document.querySelectorAll(".active")
 progress.style.width=(actives.length-1)/ (circles.length-1)*100 +"%"

 //alternate the buttons when disabled and when not at the start end and middle.
 if(currentActive===1){
  previous.disabled =true;
 }else if(currentActive===circles.length){
  next.disabled=true;
 }else{
   previous.disabled=false;
   next.disabled=false;
 }
}

