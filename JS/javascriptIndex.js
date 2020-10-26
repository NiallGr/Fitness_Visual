if(screen.width>=1000 && screen.width<=1600) {document.write("<style>body{zoom:87%;}</style>");}
reveal.addEventListener("click", function(){
    document.getElementById('homepagerow').style.visibility="visible";
    document.getElementById('homepagerow2').style.visibility="visible";

});





var Logintitle = document.querySelector('#Logintitle');
// javascript Getting regestration up
regesterBTN.addEventListener("click", function(){
    document.getElementById('register').style.display = "initial";
    document.getElementById('loginForm').style.display = "none";
    document.getElementById('regesterBTN').style.vdisplay="none";
    document.getElementById('LoginBTN').style.vdisplay="initial";

    Logintitle.textContent = "Registration";
});
LoginBTN.addEventListener("click", function(){
    document.getElementById('register').style.display = "none";
    document.getElementById('loginForm').style.display = "initial";
    document.getElementById('regesterBTN').style.display="none";
    document.getElementById('LoginBTN').style.vdisplay="initial";

    Logintitle.textContent = "Member Login";
});

// Change background Image on click// 
backgroundChange.addEventListener("click", function(){
var b = document.querySelector("body")
 b.classList.add("change") 
b.classList.remove("background")
document.getElementById("backgroundChange").style.display = "none";
document.getElementById("backgroundChange1").style.display = "initial";
});

backgroundChange1.addEventListener("click", function(){
var b = document.querySelector("body")
b.classList.add("background")
b.classList.remove("change") 

document.getElementById("backgroundChange").style.display = "initial";
document.getElementById("backgroundChange1").style.display = "none";
});




// document.getElementById("body").classList.add('change');
// document.getElementById("MyElement").classList.remove('background');
var div = document.querySelector(".fade");
var btn = document.querySelector(".fadeButton");
btn.addEventListener("click", function(){
  div.classList.add("elementToFadeInAndOut");
  // Wait until the animation is over and then remove the class, so that
  // the next click can re-add it.
  setTimeout(function(){div.classList.remove("elementToFadeInAndOut");}, 4000);
});