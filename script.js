function login() {
  const username = document.getElementById("uname").value;
  const password = document.getElementById("psw").value;
if (username === "aron" && password === "kolodziejski"){
  console.log("Success");
  window.location.href = "loggedIn.html";
}
else {
  console.log("error");
}

}
