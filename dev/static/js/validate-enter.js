var currentTab = 0; // Current tab is set to be the first tab

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("form__list");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementByClassName("enter").submit();
        return false;
    }
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, z, i, valid = true;
    x = document.getElementsByClassName("form__list");
    y = x[currentTab].getElementsByTagName("input");
    z = x[currentTab].getElementsByTagName("li");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "error" class to the field:
            y[i].className += " error";
            z[i].className += " error";
            // and set the current valid status to false
            valid = false;
        }

        else {
            z[i].className -= " error";
            z[i].className += " form__item";
        }
    }
    // If the valid status is true, mark the step as finished and valid:

    return valid; // return the valid status
}
