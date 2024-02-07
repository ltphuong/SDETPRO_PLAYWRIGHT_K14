/**
 Student: {name: String, grades: Array[Number]}
 Given 3 students -> find the best one
 The best one is the one who has highest score
 Incase more than 1 persons have same score -> print them all out
 */

let ti = {
    name: 'Ti',
    grades: [9, 8, 6]
}

let teo = JSON.parse(JSON.stringify(ti))
teo.age = 'Teo'
teo.grades = [7, 9, 9]

let tun = JSON.parse(JSON.stringify(ti))
tun.age = 'Tun'
tun.grades = [6,7,8]
 
const students = [ti, teo, tun]
const bestStudent = findBestStudent(students)
console.log('The best student is: ', bestStudent);

function findBestStudent(students){
    let currentHighestScore = 0;
    let bestStudent = undefined;

    for(const student of students){
        console.log(student);
        const avegrateScore = callculateAverageScore(student);
        if(avegrateScore >= currentHighestScore){
            bestStudent = student;
            currentHighestScore = avegrateScore;
        }
    }
    // highest = 7.0
    // [7.0]
    return bestStudent;
}

function callculateAverageScore(student){
    const studentGrade = student.grades;
    let totalGrade = 0
    let scoreLength = studentGrade.length;
    for(const grade of studentGrade){
        totalGrade = totalGrade + grade;
    }

    return Math.floor(totalGrade / scoreLength);
}