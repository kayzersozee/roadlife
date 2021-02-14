function validateForm() {
    var x = document.forms["contact_form"]["name"].value;
    var y = document.forms["contact_form"]["email"].value;
    if (x == "" || x.length <= 2) {
        alert("You need to fill out the name field properly");
        return false;
    }
    if (y == "") {
        alert("You need to fill out the email field");
        return false;
    }

}
