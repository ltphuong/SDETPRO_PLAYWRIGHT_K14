var height = 1.80;
var weight = 70;

var BMI = weight / (height * height)
console.log(BMI);
if (BMI <= 18.5){
    console.log("Underweight");
}
else if(BMI > 18.8 && BMI < 24.9){
    console.log("Normal weight");
}
else if(BMI > 25 && BMI < 29.9){
    console.log("Overweight");
}
else{
    console.log("Obesity");
}
