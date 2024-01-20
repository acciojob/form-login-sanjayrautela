function getFormvalue() {
    // Get the values of the first and last name
    var firstName = document.forms["form1"]["fname"].value;
    var lastName = document.forms["form1"]["lname"].value;

    // Display the values using alert
    alert(firstName + " " + lastName);
}
