if (screen.width >= 1000 && screen.width <= 1600) { document.write("<style>body{zoom:87%;}</style>"); }
// if else(screen.width)
var Option1 = document.querySelector('#Option1');
var Option2 = document.querySelector('#Option2');
var Option3 = document.querySelector('#Option3');
var Option4 = document.querySelector('#Option4');
var Option5 = document.querySelector('#Option5');
var Option6 = document.querySelector('#Option6');
var Option7 = document.querySelector('#Option7');

var FastFor12Hours = "The rules for this diet are simple. A person needs to decide on and adhere to a 12-hour fasting window every day. According to some researchers, fasting for 10–16 hours can cause the body to turn its fat stores into energy, which releases ketones into the bloodstream. This should encourage weight loss. This type of intermittent fasting plan may be a good option for beginners. This is because the fasting window is relatively small, much of the fasting occurs during sleep, and the person can consume the same number of calories each day. The easiest way to do the 12-hour fast is to include the period of sleep in the fasting window.For example, a person could choose to fast between 7 p.m. and 7 a.m. They would need to finish their dinner before 7 p.m. and wait until 7 a.m. to eat breakfast but would be asleep for much of the time in between."
var FastFor16Hours = "Fasting for 16 hours a day, leaving an eating window of 8 hours, is called the 16:8 method or the Leangains diet. During the 16:8 diet, men fast for 16 hours each day, and women fast for 14 hours. This type of intermittent fast may be helpful for someone who has already tried the 12-hour fast but did not see any benefits. On this fast, people usually finish their evening meal by 8 p.m. and then skip breakfast the next day, not eating again until noon. A study on mice found that limiting the feeding window to 8 hours protected them from obesity, inflammation, diabetes, and liver disease, even when they ate the same total number of calories as mice that ate whenever they wished."
var FastingFor2Days = "People following the 5:2 diet eat standard amounts of healthful food for 5 days and reduce calorie intake on the other 2 days. During the 2 fasting days, men generally consume 600 calories and women 500 calories. Typically, people separate their fasting days in the week. For example, they may fast on a Monday and Thursday and eat normally on the other days. There should be at least 1 non-fasting day between fasting days. There is limited research on the 5:2 diet, which is also known as the Fast diet. A study involving 107 overweight or obese women found that restricting calories twice weekly and continuous calorie restriction both led to similar weight loss. The study also found that this diet reduced insulin levels and improved insulin sensitivity among participants. A small-scale study looked at the effects of this fasting style in 23 overweight women. Over the course of one menstrual cycle, the women lost 4.8 percent of their body weight and 8.0 percent of their total body fat. However, these measurements returned to normal for most of the women after 5 days of normal eating."
var AlternateDayFast = "There are several variations of the alternate day fasting plan, which involves fasting every other day. For some people, alternate day fasting means a complete avoidance of solid foods on fasting days, while other people allow up to 500 calories. On feeding days, people often choose to eat as much as they want. One study reports that alternate day fasting is effective for weight loss and heart health in both healthy and overweight adults. The researchers found that the 32 participants lost an average of 5.2 kilograms (kg), or just over 11 pounds (lb), over a 12-week period. Alternate day fasting is quite an extreme form of intermittent fasting, and it may not be suitable for beginners or those with certain medical conditions. It may also be difficult to maintain this type of fasting in the long term."
var weekly24Hour = "Fasting completely for 1 or 2 days a week, known as the Eat-Stop-Eat diet, involves eating no food for 24 hours at a time. Many people fast from breakfast to breakfast or lunch to lunch. People on this diet plan can have water, tea, and other calorie-free drinks during the fasting period. People should return to normal eating patterns on the non-fasting days. Eating in this manner reduces a person’s total calorie intake but does not limit the specific foods that the individual consumes. A 24-hour fast can be challenging, and it may cause fatigue, headaches, or irritability. Many people find that these effects become less extreme over time as the body adjusts to this new pattern of eating. People may benefit from trying a 12-hour or 16-hour fast before transitioning to the 24-hour fast."
var mealSkipping = "This flexible approach to intermittent fasting may be good for beginners. It involves occasionally skipping meals.People can decide which meals to skip according to their level of hunger or time restraints. However, it is important to eat healthful foods at each meal. Meal skipping is likely to be most successful when individuals monitor and respond to their body’s hunger signals. Essentially, people using this style of intermittent fasting will eat when they are hungry and skip meals when they are not. This may feel more natural for some people than the other fasting methods."
var WarriorDiet = "The Warrior Diet is a relatively extreme form of intermittent fasting. The Warrior Diet involves eating very little, usually just a few servings of raw fruit and vegetables, during a 20-hour fasting window, then eating one large meal at night. The eating window is usually only around 4 hours. This form of fasting may be best for people who have tried other forms of intermittent fasting already. Supporters of the Warrior Diet claim that humans are natural nocturnal eaters and that eating at night allows the body to gain nutrients in line with its circadian rhythms. During the 4-hour eating phase, people should make sure that they consume plenty of vegetables, proteins, and healthful fats. They should also include some carbohydrates. Although it is possible to eat some foods during the fasting period, it can be challenging to stick to the strict guidelines on when and what to eat in the long term. Also, some people struggle with eating such a large meal so close to bedtime. There is also a risk that people on this diet will not eat enough nutrients, such as fiber. This can increase the risk of cancer and have an adverse effect on digestive and immune health."

var images = ["visual1Img", "visual2Img", "visual3Img", "visual4Img", "visual5Img", "visual6Img", "visual7Img",]



var daily = document.querySelector('#daily');

//  Section 1 Fasting for 12 Hours a day  //
Option1.addEventListener("click", function () {
    // Making heading bold
    document.getElementById('description').style.display = "none";
    document.getElementById('Option1').style.fontWeight = 'bold';
    var gone = ["Option2", "Option3", "Option4", "Option5", "Option6", "Option7"];
    for (var i = 0; i < gone.length; i++) {
        document.getElementById(gone[i]).style.fontWeight = 'normal';
    }
    //   Remove any left over images if click on a new section section
    for (var i = 0; i < images.length; i++) {
        document.getElementById(images[i]).style.display = "none";
    }
    //  add description & Visual button
    daily.textContent = FastFor12Hours
    document.getElementById('visual1').style.visibility = "visible";

    // Viewing Image after user clicks "Visual"
    visual1.addEventListener("click", function () {
        daily.textContent = "";
        document.getElementById('visual1').style.visibility = "Hidden";
        document.getElementById('visual1Img').style.display = "initial";
        document.getElementById('description').style.display = "initial";

        var hiddenImg = ["visual2Img", "visual3Img", "visual4Img", "visual5Img", "visual6Img", "visual7Img"];
        for (var i = 0; i < hiddenImg.length; i++) {
            document.getElementById(hiddenImg[i]).style.display = "none";
        }
        // Removing the img when user hits "Back to description"
        description.addEventListener("click", function () {
            daily.textContent = FastFor12Hours
            for (var i = 0; i < images.length; i++) {
                document.getElementById(images[i]).style.display = "none";
                document.getElementById('visual1').style.visibility = "visible";
                document.getElementById('description').style.display = "none";
            };
        });
    });
});

// Fasting for 16 Hours
Option2.addEventListener("click", function () {
    // Making heading bold
    document.getElementById('description').style.display = "none";
    document.getElementById('Option2').style.fontWeight = 'bold';
    var gone = ["Option1", "Option3", "Option4", "Option5", "Option6", "Option7"];
    for (var i = 0; i < gone.length; i++) {
        document.getElementById(gone[i]).style.fontWeight = 'normal';
    }
     //   Remove any left over images if click on a new section section
     for (var i = 0; i < images.length; i++) {
        document.getElementById(images[i]).style.display = "none";
    }
    //  add description & Visual buttond
    daily.textContent = FastFor16Hours
    document.getElementById('visual1').style.visibility = "visible";
   

    // Viewing Image after user clicks "Visual"
    visual1.addEventListener("click", function () {
        daily.textContent = "";
        document.getElementById('visual1').style.visibility = "Hidden";
        document.getElementById('visual2Img').style.display = "initial";
        document.getElementById('description').style.display = "initial";

        var hiddenImg = ["visual1Img", "visual3Img", "visual4Img", "visual5Img", "visual6Img", "visual7Img"];
        for (var i = 0; i < hiddenImg.length; i++) {
            document.getElementById(hiddenImg[i]).style.display = "none";
        }

     // Removing the img when user hits "Back to description"
        description.addEventListener("click", function () {
            daily.textContent = FastFor16Hours
            for (var i = 0; i < images.length; i++) {
                document.getElementById(images[i]).style.display = "none";
                document.getElementById('visual1').style.visibility = "visible";
                document.getElementById('description').style.display = "none";
            }
        });
    });
});

// Fasting for 2 days a week
Option3.addEventListener("click", function () {
    // Making heading bold
     document.getElementById('description').style.display = "none";
    document.getElementById('Option3').style.fontWeight = 'bold';
    var gone = ["Option1", "Option2", "Option4", "Option5", "Option6", "Option7"];
    for (var i = 0; i < gone.length; i++) {
        document.getElementById(gone[i]).style.fontWeight = 'normal';
    }
       //   Remove any left over images if click on a new section section
       for (var i = 0; i < images.length; i++) {
        document.getElementById(images[i]).style.display = "none";
    }
   //  add description & Visual button
    daily.textContent = FastingFor2Days
    document.getElementById('visual1').style.visibility = "visible";

    visual1.addEventListener("click", function () {
        daily.textContent = "";
        document.getElementById('visual1').style.visibility = "Hidden";
        document.getElementById('visual3Img').style.display = "initial";
        document.getElementById('description').style.display = "initial";

        var hiddenImg = ["visual1Img", "visual2Img", "visual4Img", "visual5Img", "visual6Img", "visual7Img"];
        for (var i = 0; i < hiddenImg.length; i++) {
            document.getElementById(hiddenImg[i]).style.display = "none";
        }
 // Removing img when user hits "Back to description"
        description.addEventListener("click", function () {
            daily.textContent = FastingFor2Days
            for (var i = 0; i < images.length; i++) {
                document.getElementById(images[i]).style.display = "none";
                document.getElementById('visual1').style.visibility = "visible";
                document.getElementById('description').style.display = "none";
            }
        });
    });
});
// alt day fasting 

    Option4.addEventListener("click", function () {
        // Making heading bold
         document.getElementById('description').style.display = "none";
        document.getElementById('Option4').style.fontWeight = 'bold';
        var gone = ["Option1", "Option2", "Option3", "Option5", "Option6", "Option7"];
        for (var i = 0; i < gone.length; i++) {
            document.getElementById(gone[i]).style.fontWeight = 'normal';
        }
           //   Remove any left over images if click on a new section section
           for (var i = 0; i < images.length; i++) {
            document.getElementById(images[i]).style.display = "none";
        }

   //  add description & Visual button
   daily.textContent = AlternateDayFast
   document.getElementById('visual1').style.visibility = "visible";

   visual1.addEventListener("click", function () {
       daily.textContent = "";
       document.getElementById('visual1').style.visibility = "Hidden";
       document.getElementById('visual4Img').style.display = "initial";
       document.getElementById('description').style.display = "initial";

       var hiddenImg = ["visual1Img", "visual2Img", "visual3Img", "visual5Img", "visual6Img", "visual7Img"];
       for (var i = 0; i < hiddenImg.length; i++) {
           document.getElementById(hiddenImg[i]).style.display = "none";
       }
       // Removing img when user hits "Back to description"
        description.addEventListener("click", function () {
            daily.textContent = AlternateDayFast
            for (var i = 0; i < images.length; i++) {
                document.getElementById(images[i]).style.display = "none";
                document.getElementById('visual1').style.visibility = "visible";
                document.getElementById('description').style.display = "none";
            }
        });
    });
});
//  a weekly 24 hour fast 
Option5.addEventListener("click", function () {
    // Making heading bold
     document.getElementById('description').style.display = "none";
    document.getElementById('Option5').style.fontWeight = 'bold';
    var gone = ["Option1", "Option2", "Option3", "Option4", "Option6", "Option7"];
    for (var i = 0; i < gone.length; i++) {
        document.getElementById(gone[i]).style.fontWeight = 'normal';
    }
       //   Remove any left over images if click on a new section section
       for (var i = 0; i < images.length; i++) {
        document.getElementById(images[i]).style.display = "none";
    }
   //  add description & Visual button
    daily.textContent = mealSkipping
    document.getElementById('visual1').style.visibility = "visible";

    visual1.addEventListener("click", function () {
        daily.textContent = "";
        document.getElementById('visual1').style.visibility = "Hidden";
        document.getElementById('visual5Img').style.display = "initial";
        document.getElementById('description').style.display = "initial";

        var hiddenImg = ["visual1Img", "visual2Img", "visual3Img", "visual4Img", "visual6Img", "visual7Img"];
        for (var i = 0; i < hiddenImg.length; i++) {
            document.getElementById(hiddenImg[i]).style.display = "none";
        }
 // Removing img when user hits "Back to description"
        description.addEventListener("click", function () {
            daily.textContent = mealSkipping
            for (var i = 0; i < images.length; i++) {
                document.getElementById(images[i]).style.display = "none";
                document.getElementById('visual1').style.visibility = "visible";
                document.getElementById('description').style.display = "none";
            }
        });
    });
});


// Meal skipping 
Option6.addEventListener("click", function () {
    // Making heading bold
     document.getElementById('description').style.display = "none";
    document.getElementById('Option6').style.fontWeight = 'bold';
    var gone = ["Option1", "Option2", "Option3", "Option4", "Option5", "Option7"];
    for (var i = 0; i < gone.length; i++) {
        document.getElementById(gone[i]).style.fontWeight = 'normal';
    }
       //   Remove any left over images if click on a new section section
       for (var i = 0; i < images.length; i++) {
        document.getElementById(images[i]).style.display = "none";
    }
   //  add description & Visual button
    daily.textContent = WarriorDiet
    document.getElementById('visual1').style.visibility = "visible";

    visual1.addEventListener("click", function () {
        daily.textContent = "";
        document.getElementById('visual1').style.visibility = "Hidden";
        document.getElementById('visual6Img').style.display = "initial";
        document.getElementById('description').style.display = "initial";

        var hiddenImg = ["visual1Img", "visual2Img", "visual3Img", "visual4Img", "visual5Img", "visual7Img"];
        for (var i = 0; i < hiddenImg.length; i++) {
            document.getElementById(hiddenImg[i]).style.display = "none";
        }
 // Removing img when user hits "Back to description"
        description.addEventListener("click", function () {
            daily.textContent = WarriorDiet
            for (var i = 0; i < images.length; i++) {
                document.getElementById(images[i]).style.display = "none";
                document.getElementById('visual1').style.visibility = "visible";
                document.getElementById('description').style.display = "none";
            }
        });
    });
});

// Warrior diet 
Option7.addEventListener("click", function () {
    // Making heading bold
     document.getElementById('description').style.display = "none";
    document.getElementById('Option7').style.fontWeight = 'bold';
    var gone = ["Option1", "Option2", "Option3", "Option4", "Option5", "Option6"];
    for (var i = 0; i < gone.length; i++) {
        document.getElementById(gone[i]).style.fontWeight = 'normal';
    }
       //   Remove any left over images if click on a new section section
       for (var i = 0; i < images.length; i++) {
        document.getElementById(images[i]).style.display = "none";
    }
   //  add description & Visual button
    daily.textContent = weekly24Hour
    document.getElementById('visual1').style.visibility = "visible";

    visual1.addEventListener("click", function () {
        daily.textContent = "";
        document.getElementById('visual1').style.visibility = "Hidden";
        document.getElementById('visual7Img').style.display = "initial";
        document.getElementById('description').style.display = "initial";

        var hiddenImg = ["visual1Img", "visual2Img", "visual3Img", "visual4Img", "visual5Img", "visual6Img"];
        for (var i = 0; i < hiddenImg.length; i++) {
            document.getElementById(hiddenImg[i]).style.display = "none";
        }
 // Removing img when user hits "Back to description"
        description.addEventListener("click", function () {
            daily.textContent = weekly24Hour
            for (var i = 0; i < images.length; i++) {
                document.getElementById(images[i]).style.display = "none";
                document.getElementById('visual1').style.visibility = "visible";
                document.getElementById('description').style.display = "none";
            }
        });
    });
});
