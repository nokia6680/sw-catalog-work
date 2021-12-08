"use strict";

var input = document.getElementById("tel");

var prefixNumber = function prefixNumber(str) {
    if (str === "7") {
        return "7 (";
    }

    if (str === "8") {
        return "7 (";
    }

    if (str === "9") {
        return "7 (9";
    }

    return "7 (";
}; // ======================================


input.addEventListener("input", function(e) {
    var value = input.value.replace(/\D+/g, "");
    var numberLength = 11;
    var result;

    if (input.value == '+7 ' || input.value == '') {
        input.value = '';
        return false;
    }

    if (input.value.includes("+8") || input.value[0] === "8") {
        result = "+";
    } else {
        result = "+";
    } //


    for (var i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
            case 0:
                result += prefixNumber(value[i]);
                continue;

            case 4:
                result += ") ";
                break;

            case 7:
                result += "-";
                break;

            case 9:
                result += "-";
                break;

            default:
                break;
        }

        result += value[i];
    } //


    input.value = result;
});
