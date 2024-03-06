// light dark toggle //
const icon = document.querySelector('.toggle-icon');
const img = document.querySelector('.toggle-icon img');
icon.onclick = function(){
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        img.src ="./Images/sun.png";
    }
    else{
        img.src ="./Images/moon.png";
        
    }
}

// MObile navbar

function showSideBar(){
    const menuIcon = document.querySelector('.forMobile');
    menuIcon.style.display = 'flex';
    
    }
    function removeMenu(){
        const menuIcon = document.querySelector('.forMobile');
        menuIcon.style.display = 'none';
        
        }


/* BMI code*/

var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("btnradio1");
var female = document.getElementById("btnradio2");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else{
    countBmi();
  }


}


function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100); // BMI formula//
      
  var result = '';
    if(bmi<18.5){
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
     }else if(35<=bmi){
    result = 'Extremely obese';
     }

resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

