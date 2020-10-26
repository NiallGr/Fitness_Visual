if(screen.width>=1000 && screen.width<=1600) {document.write("<style>body{zoom:87%;}</style>");}
// getting Values
var height = document.querySelector('input[name="height"]').value;
var weight = document.querySelector('input[name="weight"]').value;
var calculate = document.querySelector('#calculate');
var reset = document.querySelector('#reset');


// cal BMI and sort into what category is apopriate
calculate.addEventListener("click", function(){
  
    document.getElementById('resultBMI').style.visibility="visible";
    document.getElementById('chart').style.display = "initial";

    var height = document.querySelector('input[name="height"]').value;
    var weight = document.querySelector('input[name="weight"]').value;
    error = "Please enter some values";
    height /= 100;
    height *= height;
    bmi = weight/height;
    bmi = bmi.toFixed(1);
   
    if (bmi <= 18.4) {
		daily.textContent = "Your BMI is " + bmi + " which means " + "Check below for a chart breakdown";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		daily.textContent = "Your BMI is " + bmi + " which means " + "Check below for a chart breakdown";
	} else if (bmi >= 25 && bmi <= 29.9) {
		daily.textContent = "Your BMI is " + bmi + " which means " + "Check below for a chart breakdown";
	} else if (bmi >= 30) {
		daily.textContent = "Your BMI is " + bmi + " which means " + "Check below for a chart breakdown";
    }
    //  If Not Entered Make Red
    if (height <= 0 || weight <= 0) {
        document.getElementById('resultBMI').style.visibility="hidden";
        document.getElementById('chart').style.display = "none";
        document.getElementById("height").placeholder = "This must be filled";
        document.getElementById("height").style.borderColor = "red";
        document.getElementById("weight").placeholder = "This must be filled";
        document.getElementById("weight").style.borderColor = "red";
    }
});

// Reset inputs 
reset.addEventListener("click", function(){
    daily.textContent = "";
    document.getElementById('resultBMI').style.visibility="hidden";
    document.getElementById('chart').style.display = "none";

	height = document.querySelector('input[name="height"]').value="";
    weight = document.querySelector('input[name="weight"]').value="";

    document.getElementById("height").placeholder = "Centimeters";
    document.getElementById("weight").placeholder = "kilograms";
 
    document.getElementById("height").style.borderColor = "";
    document.getElementById("weight").style.borderColor = "";
});
    
backgroundChange.addEventListener("click", function(){
    var b = document.querySelector("body")
    b.classList.add("change") + new Date().getTime();
    document.getElementById("backgroundChange").style.display = "none";
    document.getElementById("backgroundChange1").style.display = "initial";
    });
    
    backgroundChange1.addEventListener("click", function(){
    var b = document.querySelector("body")
    b.classList.remove("change") 
    document.getElementById("backgroundChange").style.display = "initial";
    document.getElementById("backgroundChange1").style.display = "none";
    });

   