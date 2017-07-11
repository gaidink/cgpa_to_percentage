/*
 * CGPA to Percentage conversion
 * Author: Gaidin Kamei
 * Date: 11-7-17
 */


function convert(cgpi) {
    if (cgpi < 7) {
        var percentage = 7.1 * cgpi + 12;
    } else if (cgpi >= 7) {
        var percentage = 7.4 * cgpi + 12;
    }
    return percentage;
}

function result_display() {
    var cgpi = document.getElementById("cgpi").value;
    cgpi = cgpi * 1;
    //document.getElementById("msg").innerHTML = typeof cgpa;
    if (typeof cgpi != 'number') {
        alert("Enter numeral input");
    } else if (!(cgpi >= 0)) {
        alert("Input should be greater than or equal to 0");
    } else if (!(cgpi <= 10)) {
        alert("Input should be less than or equal to 10");
    } else {
        document.getElementById("msg").innerHTML = "Percentage is ";
        document.getElementById("result").innerHTML = convert(cgpi);
    }
}
