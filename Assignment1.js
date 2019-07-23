/*
 *   Created by: Ederson Cardoso - Created on: May 13, 2019
*/

// global variables
var BMR = 0;
var activityLevel = 0;
var age = 0;
var feet= 0;
var inches = 0;
var stones = 0;
var pounds = 0;
var kilos = 0;
var cm = 0;

function calculateBMR_men_imperial() {
    //BMR = 66.47 + (6.24 × weight in pounds ) + (12.7 × height in inches ) − (6.755 × age in years )
    BMR = 66.47 +
        (6.24 * (parseFloat(document.getElementById("stones").value * 14) + parseFloat(document.getElementById("pounds").value))) +
        (12.7 * parseFloat(((document.getElementById("feet").value * 12) + parseFloat(document.getElementById("inches").value)))) -
        (6.755 * parseFloat((document.getElementById("age").value)));

}

function calculateBMR_women_imperial() {
    //BMR = 655.1 + (4.35 × weight in pounds ) + (4.7 × height in inches ) − (4.7 × age in years )
    BMR = 655.1 +
        (4.35 * (parseFloat(document.getElementById("stones").value * 14) + parseFloat(document.getElementById("pounds").value))) +
        (4.7 * parseFloat(((document.getElementById("feet").value * 12) + parseFloat(document.getElementById("inches").value)))) -
        (4.7 * parseFloat((document.getElementById("age").value)));
}

function calculateBMR_men_metric() {
    //BMR = 66.47 + (13.75 × weight in kg ) + (5.003 × height in cm ) − (6.755 × age in years )
    BMR = 66.47 +
        (13.75 * parseFloat(document.getElementById("kilos").value)) +
        (5.003 * parseFloat(document.getElementById("cm").value))  -
        (6.755 * parseFloat(document.getElementById("age").value));
}

function calculateBMR_women_metric() {
    //BMR = 655.1 + (9.563 × weight in kg ) + (1.85 × height in cm ) − (4.676 × age in years )
    BMR = 655.1 +
        (9.563 * parseFloat(document.getElementById("kilos").value)) +
        (1.85 * parseFloat(document.getElementById("cm").value)) -
        (4.676 * parseFloat(document.getElementById("age").value));
}

function calculateBMR() {

    if (getRadioValue("optUnit") == "I" && getRadioValue("optGender") == "male") {
            calculateBMR_men_imperial();
    }

    if (getRadioValue("optUnit") == "I" && getRadioValue("optGender") == "female") {
            calculateBMR_women_imperial();
    }

    if (getRadioValue("optUnit") == "M" && getRadioValue("optGender") == "male") {
        calculateBMR_men_metric();
    }

    if (getRadioValue("optUnit") == "M" && getRadioValue("optGender") == "female") {
        calculateBMR_women_metric();
    }

    document.getElementById("resultBmr").innerHTML = BMR.toFixed(0);
    document.getElementById("resultCal").innerHTML = (BMR * getRadioValue("optActivityLevel")).toFixed(0);
} 

function getRadioValue(radioList) {
    var type = document.getElementsByName(radioList);

    for (var x = 0; x < type.length; x++) {
        if (type[x].checked) {
            return type[x].value;
        }
    }
}

// sets all form field values to defaults
function resetForm() {
    document.getElementById("age").value = 0;
    document.getElementById("feet").value = 0;
    document.getElementById("inches").value = 0;
    document.getElementById("stones").value = 0;
    document.getElementById("pounds").value = 0;
    document.getElementById("cm").value = 0;
    document.getElementById("kilos").value = 0;
    createEventListeners();
    showImperial();
}

// creates event listeners
function createEventListeners() {
    document.getElementById("button").addEventListener("click", calculateBMR, false);
}

// resets form when page is reloaded
window.addEventListener("load", resetForm, false);

function showImperial() {
    document.getElementById("formImperial").style.display = "inline";
    document.getElementById("formMetric").style.display = "none";
}

function showMetric() {
    document.getElementById("formImperial").style.display = "none";
    document.getElementById("formMetric").style.display = "inline";
}


