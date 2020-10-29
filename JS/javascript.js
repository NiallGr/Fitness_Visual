if(screen.width>=1000 && screen.width<=1600) {document.write("<style>body{zoom:87%;}</style>");}
// Gatter Input Values
var gender = document.querySelector('input[name="gender').value;
var age = document.querySelector('input[name="age"]').value;
var height = document.querySelector('input[name="height"]').value;
var weight = document.querySelector('input[name="weight"]').value;
var activityLevel = document.querySelector('input[name="Level"]').value;
var calculate = document.querySelector('#calculate');
var reset = document.querySelector('#reset');
var daily = document.querySelector('#daily');
var gender = document.querySelector('input[name="gender"]').value;


//  Create Fuction to get Male and Female BMR

function BMRmale(weight, height, age) {
    var BMR = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
    return BMR
}

function BMRfemale(weight, height, age) {
    var BMR = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age);
    return BMR;
}

//  Create function to get activity level effect on MBR

function exertion(BMR, level) {
    if (level == 0) {
        return BMR * 1.2;
    }

    else if (level == 1) {
        return BMR * 1.375;
    }

    else if (level == 2) {
        return BMR * 1.55;
    }

    else if (level == 3) {
        return BMR * 1.725;
    }

    else if (level == 4) {
        return BMR * 1.9
    }
}

// Added the "on Click" function

calculate.addEventListener("click", function(){
document.getElementById('result').style.visibility="visible";
var gender = document.querySelector('input[name="gender').value;
var age = document.querySelector('input[name="age"]').value;
var height = document.querySelector('input[name="height"]').value;
var weight = document.querySelector('input[name="weight"]').value;
var activityLevel = document.querySelector('input[name="Level"]').value;
document.getElementById('result').style.visibility="visible";

//  If data is not entered red borders will pop up and ask to enter data
if (height <= 0 || weight <= 0) {
    document.getElementById('result').style.visibility="hidden";
    document.getElementById("height").placeholder = "This must be filled";
    document.getElementById("height").style.borderColor = "red";
    document.getElementById("weight").placeholder = "This must be filled";
    document.getElementById("weight").style.borderColor = "red";
if ( age == 0 )  {
    document.getElementById("age").style.borderColor = "red";
    document.getElementById("age").placeholder = "This must be filled";
}
};
// red border for radio switch 
if (document.getElementById('gender0').checked) { 
  }else if (document.getElementById('gender1').checked) {
  } else  (document.getElementById("genderBorder").style.borderColor = "red") 

    if (document.getElementById('activityLevel1').checked) {
    } else if (document.getElementById('activityLevel2').checked) {
    } else if (document.getElementById('activityLevel3').checked) {
    } else if (document.getElementById('activityLevel4').checked) {
    } else if (document.getElementById('activityLevel5').checked) {
    }
else(document.getElementById("activityLevelBoarder").style.borderColor = "red") 
  



// Cal for male BMR on click 
if (gender==0){
            var BMR = Math.round(BMRmale(weight,height,age));
    		var totalCal = Math.round(exertion(BMR,activityLevel));
            daily.textContent = "Your BMI is " + BMR + " and you must consume " + totalCal + " calories to maintain your current weight";
        }
// Cal for female BMR on click            
else if (gender==1){
             var BMR = Math.round(BMRfemale(weight,height,age)); 
             var totalCal = Math.round(exertion(BMR,activityLevel));
             daily.textContent = "Your BMI is " + BMR + " and you must consume " + totalCal + " calories to maintain your current weight";
            }
            

// If imputs are corrected this will get rid of red borders 
else ( 
    document.getElementById("height").style.borderColor = "",
    document.getElementById("weight").style.borderColor = "",
    document.getElementById("age").style.borderColor = "",
    document.getElementById("activityLevelBoarder").style.borderColor = "",
    document.getElementById("genderBorder").style.borderColor = ""
);
});


// button to reset all inputs //
reset.addEventListener("click", function(){
    daily.textContent = "";
    document.getElementById('result').style.visibility="hidden";
	age = document.querySelector('input[name="age"]').value="";
	height = document.querySelector('input[name="height"]').value="";
    weight = document.querySelector('input[name="weight"]').value="";
    // Getting rid of red border and highlighted Radio Buttons 
    document.getElementById("height").placeholder = "Centimeters";
    document.getElementById("height").style.borderColor = "";
    document.getElementById("weight").placeholder = "Kilograms";
    document.getElementById("weight").style.borderColor = "";
    document.getElementById("age").style.borderColor = "";
    document.getElementById("age").placeholder = "Age";
    document.getElementById("activityLevelBoarder").style.borderColor = ""
    document.getElementById("genderBorder").style.borderColor = ""
    document.getElementById("activityLevel1").checked = false;
    document.getElementById("activityLevel2").checked = false;
    document.getElementById("activityLevel3").checked = false;
    document.getElementById("activityLevel4").checked = false;
    document.getElementById("activityLevel5").checked = false;
    document.getElementById("gender0").checked = false;
    document.getElementById("gender1").checked = false;

});
  
// Change background Image on click// 
backgroundChange.addEventListener("click", function(){
    document.getElementById("backgroundChange1").style.display = "initial";
    var b = document.querySelector("body")
    b.classList.add("change")
    
    });
    
    backgroundChange1.addEventListener("click", function(){
    var b = document.querySelector("body")
    b.classList.remove("change");
    document.getElementById("backgroundChange").style.display = "initial";
    });