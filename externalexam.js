let total = 0;

for (let i = 1; i <= 4; i++) {
    let marks = parseInt(prompt("Enter marks of Subject " + i));
    total += marks;
}

let average = total / 4;
let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 75) {
    grade = "B";
} else if (average >= 60) {
    grade = "C";
} else if (average >= 40) {
    grade = "D";
} else {
    grade = "F";
}

document.write("Total Marks = " + total + "<br>");
document.write("Average Marks = " + average + "<br>");
document.write("Grade = " + grade);