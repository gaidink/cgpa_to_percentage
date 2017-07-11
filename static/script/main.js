/*
 * CGPA to Percentage conversion
 * Author: Gaidin Kamei
 * Date: 11-7-17
 */



function convert(cgpa) {
    if (cgpa < 7) {
        var percentage = 7.1 * cgpa + 12;
    } else if (cgpa >= 7) {
        var percentage = 7.4 * cgpa + 12;
    }
    return percentage;
}

function result_display() {
    var cgpa = document.getElementById("cgpa").value;
    cgpa = cgpa * 1;
    //document.getElementById("msg").innerHTML = typeof cgpa;
    if (typeof cgpa != 'number') {
        alert("Enter numeral input");
    } else if (!(cgpa >= 0)) {
        alert("Input should be greater than or equal to 0");
    } else if (!(cgpa <= 10)) {
        alert("Input should be less than or equal to 10");
    } else {
        document.getElementById("msg").innerHTML = "Percentage is ";
        document.getElementById("result").innerHTML = convert(cgpa);
    }
}
