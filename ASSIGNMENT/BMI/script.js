// program to calculate the body mass index (BMI)
const weight = parseFloat(prompt("Enter your weight "));
const height = parseFloat(prompt("Enter your height "));
const bmi = weight / (height * height);

if (bmi < 18.5){
    alert(`${bmi} is an underweight BMI`);
}else if (bmi >=18.5 && bmi < 25) {
    alert(`${bmi} is a normal BMI`);
}else if (bmi >= 25 && bmi < 30) {
    alert("overweight ");
}else {
    alert("obese");
}

// const weight =70;//weight in kg
// const height = 1.75; //height in meters

// const result = calculateBMI(weight, height);
// console.log("BMI Category:", result);