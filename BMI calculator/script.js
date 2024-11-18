function goToPersonalInfo() {
    window.location.href = "personalinfo.html"; 
}

function goToBMICalculator() {
    window.location.href = "bmi.html"; 
}
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById('result').innerText = "Please enter valid values.";
        return;
    }

    const bmi = weight / (height * height);
    let resultMessage = `Your BMI is ${bmi.toFixed(2)} - `;

    if (bmi < 18.5) {
        resultMessage += "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultMessage += "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultMessage += "Overweight";
    } else {
        resultMessage += "Obese";
    }

    document.getElementById('result').innerText = resultMessage;
}

function goToWeightInfo() {
    window.location.href = "weightinfo.html"; 
}



