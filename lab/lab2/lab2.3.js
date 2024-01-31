var height = 1.80;
var weight = 100;
var increase = 0;
var decrease = 0;

var BMI = weight / (height * height)
console.log(BMI);
if (BMI <= 18.5){
    console.log("Underweight");
    increase = (18.5 - BMI) * (height * height)
    console.log("You need to increase at least " + increase + " kg");
}
else if(BMI > 18.5 && BMI <= 24.9){
    console.log("Normal weight");
}
else if(BMI >= 25 && BMI <= 29.9){
    console.log("Overweight");
    decrease = (BMI - 24.9) * (height * height)
    console.log("You need to decrease at least " + decrease + " kg");
}
else{
    console.log("Obesity");
    decrease = (BMI - 24.9) * (height * height)
    console.log("You need to decrease at least " + decrease + " kg");
}