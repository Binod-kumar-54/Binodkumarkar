function dis() {
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('password').value;
    if (email == 'bk@gmail.com' && pwd == '888000') {
        window.location.assign("admin.html");
    }
    else {
        alert("Invalid Credential");
    }
}