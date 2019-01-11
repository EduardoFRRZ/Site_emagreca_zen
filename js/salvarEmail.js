function salvarEmail() {
    var email = document.getElementsByName("email")[0].value;
    alert(email);
    save(email, "emails.txt");
}