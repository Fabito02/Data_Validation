function validate() {
    let name = document.getElementById("name").value
    window.localStorage.setItem("name", name)

    let date = document.getElementById("date").value
    window.localStorage.setItem("date", date)

    let email = document.getElementById("email").value
    window.localStorage.setItem("email", email)

    let passwd = document.getElementById("passwd").value
    window.localStorage.setItem("passwd", passwd)

    let rePasswd = document.getElementById("rePasswd").value
    window.localStorage.setItem("rePasswd", rePasswd)
    

}